// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "hardhat/console.sol";

contract Escrow {
    address public depositor;
    address public beneficiary;
    address public arbiter;
    uint public balance;

    constructor(address _beneficiary, address _arbiter) payable {
        depositor = msg.sender;
        beneficiary = _beneficiary;
        arbiter = _arbiter;
        balance = msg.value;
    }

    function approve() external onlyArbiter {
        emit Approved(balance);

        (bool success, ) = beneficiary.call{value: balance}("");
        require(success);

        balance = address(this).balance;
    }

    modifier onlyArbiter() {
        require(msg.sender == arbiter, "You're not the arbiter");
        _;
    }

    event Approved(uint sent);
}
