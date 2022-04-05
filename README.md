# Mina Signer Signing Reproduce

# Steps to reproduce

1. Install dependencies

```
npm install
```

2. Build the client_sdk and the mina-signer in the Mina repo

```
cd frontend/mina-signer
npm install
npm run prepublishOnly
```

3. Create a link to the built mina-signer (run this in `frontend/mina-signer`)

```
npm link
```

4. Inside this project repo, link the locally built `mina-signer`

```
npm link mina-signer
```

5. Run the script

```
node index.js
```

## Description

This repo reproduces the signing issues occuring on the Berkeley network. It signs a transaction with the faucet keypair, sends a transaction to `https://berkeley.api.minaexplorer.com/broadcast/transaction` and returns the response.

The resulting error is the following:

```
"$to":"PublicKey!",
"$amount":UInt64!,
"$fee":UInt64!,
"$memo":"String",
"$scalar":"String",
"$field":"String",
"$nonce":UInt32){
   "sendPayment(input":{
      "from":"$from",
      "to":"$to",
      "amount":"$amount",
      "fee":"$fee",
      "memo":"$memo",
      "nonce":"$nonce"
   },
   "signature":{
      "scalar":"$scalar",
      "field":"$field"
   }")"{
      "payment"{
         "amount fee feePayer"{
            "publicKey token"
         }"feeToken from fromAccount"{
            "publicKey token"
         }"hash id isDelegation kind memo nonce receiver"{
            "publicKey token"
         }"source"{
            "publicKey token"
         }"to token toAccount"{
            "token publicKey"
         }
      }
   }
}"|"{
   "errors":[
      {
         "message":"Couldn\\""t send user command":"Error creating user command":{
            "payload":{
               "common":{
                  "fee":"0.1",
                  "fee_token":"1",
                  "fee_payer_pk":"B62qmQsEHcsPUs5xdtHKjEmWqqhUPRSF2GNmdguqnNvpEZpKftPC69e",
                  "nonce":"0",
                  "valid_until":"4294967295",
                  "memo":"E4YM2vTHhWEg66xpj52JErHUBU4pZ1yageL4TVDDpTTSsv8mK6YaH"
               },
               "body":[
                  "Payment",
                  {
                     "source_pk":"B62qmQsEHcsPUs5xdtHKjEmWqqhUPRSF2GNmdguqnNvpEZpKftPC69e",
                     "receiver_pk":"B62qmQsEHcsPUs5xdtHKjEmWqqhUPRSF2GNmdguqnNvpEZpKftPC69e",
                     "token_id":"1",
                     "amount":"100000000"
                  }
               ]
            },
            "signer":"B62qmQsEHcsPUs5xdtHKjEmWqqhUPRSF2GNmdguqnNvpEZpKftPC69e",
            "signature":[
               "Signature",
               "7mXFj9fP222AgDNihm25CmmksRc1sBcqvBRB1awRSnLqmzErezgxxdYnzKD6ode1yhVK7A9GaAKEg7sgMoPj1HUKT3KX1hsB"
            ]
         }"Error":"Invalid_signature"", ""path"": [""sendPayment""]}], ""data""': None}"
```
