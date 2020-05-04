const SVCafe = require( '..' )
const appID = 'YOUR_APP_ID';
const appSecret = 'YOUR_APP_SECRET';
//contact aaron67@sv.cafe for your appId and appSecret

const merchant = new SVCafe.Merchant( appID, appSecret );

async function createOrder () {
  const cny = 50
  const address = '1Pwmd4RCoTbYP6tLWVoDcys1GW5chsve8C'
  try{
    let res = await merchant.CreateOrder( cny, address );
    console.log( res );
    const orderId = res.order_id;
    let status = await merchant.QueryOrder( orderId );
    console.log( status );
  }catch(e) {
    console.error(e)
  }
}

createOrder();