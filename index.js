import Client from "mina-signer";
import request from "request";
const client = new Client({ network: "testnet" });

const keypair = {
  privateKey: "",
  publicKey: "B62qmQsEHcsPUs5xdtHKjEmWqqhUPRSF2GNmdguqnNvpEZpKftPC69e",
};
const payment = client.signPayment(
  {
    to: keypair.publicKey,
    from: keypair.publicKey,
    amount: "100000000",
    fee: "100000000",
    nonce: "0",
  },
  keypair.privateKey
);

const verified = client.verifyPayment(payment);
console.log("verified status: ", verified);

var options = {
  method: "POST",
  url: "https://berkeley.api.minaexplorer.com/broadcast/transaction",
  body: {
    publicKey: payment.data.from,
    signature: payment.signature,
    payload: payment.data,
  },
  json: true,
};

console.log(options);

if (verified) {
  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}