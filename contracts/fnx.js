const Web3 = require('web3');
const contractABI = require('./ProductOwnershipABI.json');

const web3 = new Web3('http://localhost:8545'); // Connect to local Ethereum node
const contractAddress = 'CONTRACT_ADDRESS';
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

async function transferOwnership(productId, newOwner) {
    const accounts = await web3.eth.getAccounts();
    await contractInstance.methods.transferOwnership(productId, newOwner).send({ from: accounts[0] });
}
