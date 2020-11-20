require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food shock remember punch protect hidden produce army gift'; 
let testAccounts = [
"0x57d423bca92d25e282be333efa1c373887d919d314a040ffb9cb74716b9559f0",
"0x8184c9b06f482bd3a828e7a9a2670d882f9cbed1e3e5213e67b1fae8e82f5425",
"0x0e05069d2f21f173f4f2bebf26dd003b228e990fddc8add11ef9f16abbb2d920",
"0xa2ba58c8103e126fc459fbcc6a118605c520e958315fa734d6a89c01a2764ca3",
"0x22a25db07cd7e46cde670fbfc2143e3a012bc03a4310e66596deaaf2639b35c0",
"0xc3af1784413a514bae0eb4221ec18f3a26f9338a7ab131a4e11084dd3509c935",
"0x28a54b42835a342a2b62a993041f253115b36f71158c196fd843fc2dca2dd708",
"0x82ba8086d29138835cf6aa13373fcaabb867b75ea02ee2743fd98119d1361f56",
"0xbd4c69f1819c4fe6d5ecf642b98eb08ed6caf65e09e47e250f53b9e42ef0f6b2",
"0x298a51f615875bd117cf5afeb4797a6566d440741a9b817c86bf0421ce1c4ae7"
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
