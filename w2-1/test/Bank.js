const Web3 = require('web3');
const web3 = new Web3('https://rpc-mumbai.matic.today');

const abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]; // 合约ABI
const address = '0x8b3f7aB47cBBB1D537F7dEad7e3594bA3FAB08Cd'; // 合约地址
const addr = '0x863221244596659aE10C4383021b4Da3ACe907C1'; // 普通地址


const bankContract = new web3.eth.Contract(abi, address);

async function init1() {
    const balanceWei = await web3.eth.getBalance(address); // 这里得到的是Wei单位的余额
    return balanceWei
}
init1().then(value => {
    console.log(`web3 address balance ${value}`);
})




// bankContract.methods.balanceOf(address)
//     .then(balances => {
//         console.log(`address balance ${balances}`);
//     })
//     .catch(error => {
//         console.error(error);
//     });
