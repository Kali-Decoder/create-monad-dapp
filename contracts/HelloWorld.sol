// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.0;
contract HelloWorld {

    string public greeting;
    address public owner;
    constructor(string memory _greeting) {
        greeting = _greeting;
        owner = msg.sender;
    }

    function setGreeting(string memory _greeting) public {
        require(msg.sender == owner, "Only the owner can set the greeting");
        greeting = _greeting;
    }

    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}