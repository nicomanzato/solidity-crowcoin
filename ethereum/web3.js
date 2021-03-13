import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') { 
    web3 = new Web3(window.ethereum);
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://goerli.infura.io/v3/21ddf5b1307a4d7aa351255cdb949f57',
    );
    web3 = new Web3(provider);
}


export default web3;