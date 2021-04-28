require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan rifle six pull install opinion slot giant'; 
let testAccounts = [
"0x732e226cd73a68b5fa0ad46665ac96e172265496a6aaf4eec0eeae73c9ac5b2a",
"0x50cd001b222506d1013a82efe72123a4a2c3e8e441a6190545f215e133921648",
"0xe3c91d754c14836917e37d7a79029089b4a14679b791883a11a1312f0392c184",
"0x8abec93ff2b3efc19338544fc40f642318e28186aaf74757f19b9ca2a9102c70",
"0xb7ad290c000a1a02e9294830f8a3f7a297ab1fe863d404f8d3c907f6556413f9",
"0x95ba0a2c04390f851faf93c66d7ac02b35d43ee948cf98959bbc699e7ee02b4f",
"0x53bf03f20147dc5a49d6eed3c449cf6c38e0ba284646aa28b04608aa80982738",
"0x1a1338c2f8bca8f743b48a346582d8362ad267a556eca71c4fc1c052e7f11b4c",
"0x24a2791678b5eee72b9687b0417c67ecfcd7b824882594a6eff0a450d29b35bc",
"0x9f918cc418c164bef32fd24f47d25657b314ed56cb3c309dabf099de3cc744ac"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
