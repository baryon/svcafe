import hashlib
def sign(*p):
 return hashlib.md5(u''.join(p).encode('utf8')).hexdigest().lower()

print(sign(
 'YOUR_APP_ID',
 '100',
 '17wgraDiNkQsvKpUnC65spkbxPx3tMZWAM',
 '1588495687',
 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
))