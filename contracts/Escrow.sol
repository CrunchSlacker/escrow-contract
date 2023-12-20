// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "hardhat/console.sol";

contract Escrow {
    address public depositor;
    address public beneficiary;
    address public arbiter;

    constructor(address _beneficiary, address _arbiter) payable {
        depositor = msg.sender;
        beneficiary = _beneficiary;
        arbiter = _arbiter;
    }

    function approve() external onlyArbiter {
        emit Approved(address(this).balance);

        (bool success, ) = beneficiary.call{value: address(this).balance}("");
        require(success);
    }

    modifier onlyArbiter() {
        require(msg.sender == arbiter, "You're not the arbiter");
        _;
    }

    receive() external payable {
        require(msg.sender == depositor, "You're not the depositor, transaction reverted");
    }

    event Approved(uint sent);
}
