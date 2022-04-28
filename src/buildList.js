const { version } = require('../package.json');
const testnet = require('./tokens/testnet.json');


module.exports = function buildList() {
  const parsed = version.split('.');
  return {
    'name': 'BSC Token List',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'logoURI': 'https://s2.coinmarketcap.com/static/img/coins/64x64/14941.png',
    'keywords': [
      'uniswap',
      'default'
    ],
    tokens: [
      ...testnet
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      })
  };
};
