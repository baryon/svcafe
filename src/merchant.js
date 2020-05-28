"use strict";
const axios = require( "axios" );
const utils = require( "./utils" );

const API_ROOT = "https://sv.cafe/api/v1/"

class Merchant {
  constructor ( appID, appSecret, opts = {} ) {
    this._appID = appID,
    this._appSecret = appSecret
    this._timeout = opts.timeout || 5000
  }
  CreateOrder ( cny, address ) {
    const timestamp = parseInt(Date.now()/1000).toString()
    const signature = utils.CreateSignature( this._appID, cny, address, timestamp, this._appSecret );
    const orderURL = new URL( "orders/new", API_ROOT );
    return axios.get( orderURL.href, {
      params:{
        app:this._appID,
        cny,
        address,
        timestamp,
        signature
      },
      timeout: this._timeout
    } )
      .then( function ( res ) {
        if(res.data.r==='ok'){
          return res.data.order;
        }
        else{
          throw new Error(res.data.r)
          //'unknown_exception'
          //'invalid_arguments'
          //'invalid_cny'
          //'invalid_address'
        }
      } );
  }
  QueryOrder ( orderId ) {
    const orderURL = new URL( `orders/${orderId}`, API_ROOT );
    return axios.get( orderURL.href,{timeout: this._timeout} )
      .then( function ( res ) {
        if(res.data.r==='ok'){
          return res.data.order;
        }
        else{
          throw new Error(res.data.r)
          //'unknown_exception'
          //'invalid_order_id'
        }
      } );
  }

}

module.exports = {
  Merchant
};
