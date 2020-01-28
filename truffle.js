const HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic =
  "lab direct float merit wall huge wheat loyal maple cup battle butter";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  compilers: {
    solc: {
      version: "0.4.24",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1
        }
      }
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 6721975,
      gasPrice: 20000000000
    },
    // Local node with Docker
    // https://github.com/rsksmart/artifacts/tree/master/Dockerfiles/RSK-Node
    rskRegtestLocal: {
      host: "localhost",
      port: 4444,
      network_id: "*"
    },
    rskTestnet: {
      // 0xC67D9eE30d2119A384E02de568BE80FE785074Ba
      host: 'http://localhost:4444',
      provider: new HDWalletProvider('NUESTRA CLAVE PRIVADA', 'http://localhost:4444'),
      network_id: '*',
      gasPrice: 60000000
    }
  }
};
