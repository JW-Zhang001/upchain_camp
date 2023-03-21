// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bank {
    address public owner;
    mapping(address => uint256) public balances;

    // init msg.sender == owner
    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    // externalAddr save map
    receive() external payable {
        require(msg.value > 0, "Deposit amount must be greater than zero.");
        balances[msg.sender] += msg.value;
    }

    function balanceOf(address account) public view returns (uint256) {
        return balances[account];
    }

    // msg.sender withdraw update balances
    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance.");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }

    // owner withdrawAll
    function withdrawAll() public onlyOwner {
        uint b = address(this).balance;
        payable(owner).transfer(b);
    }
}
