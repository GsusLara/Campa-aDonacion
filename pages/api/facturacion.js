const bip32 = require('bip32');
const bitcoin = require('bitcoinjs-lib');

export default function handler(req, res) {
  const zpub = [process.env.ZPUB1, process.env.ZPUB2];
  const randomAddr = Math.floor(Math.random() * 21); 
  let pubkeys = [];
  const redMainet = Object.assign({}, bitcoin.networks.bitcoin,
    {
      bip32: {
        public: 0x02aa7ed3,
        private: 0x02aa7a99,
      },
    },
  );

  if (req.method === 'GET') {
    for (let i = 0; i < 2; i++) {
      const zpubNode = bip32.fromBase58(zpub[i], redMainet);
      const path = zpubNode.derivePath(`0/${randomAddr}`);
      pubkeys.push(path.publicKey)
    }
    pubkeys.sort((a, b) => a.compare(b));
    const { address } = bitcoin.payments.p2wsh({
      redeem: bitcoin.payments.p2ms({ m: 2, pubkeys }),
    });
    res.status(200).json({ direccion: address });
  } else {
    res.status(400)
  }
}
