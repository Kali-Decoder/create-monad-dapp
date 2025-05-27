// Contract based on https://docs.openzeppelin.com/contracts/4.x/erc721
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PrintMonadEventNFT is ERC721URIStorage, Ownable {
    uint256 private tokenId;
    string private URL =
        "https://ivory-injured-gerbil-133.mypinata.cloud/ipfs/bafkreifco224irrduhepzrcdee4iptbyvqr4w5lqos7zrhza7efylrbpae";

    constructor(string memory collectionName, string memory collectionSymbol)
        Ownable(msg.sender)
        ERC721(collectionName, collectionSymbol)
    {}

    function transferFunds() external payable onlyOwner {
        (bool sent, bytes memory data) = (msg.sender).call{
            value: address(this).balance
        }("");
        require(sent, "Failed to send Ether");
    }

    receive() external payable {}

    function changeUrl(string calldata _url) external onlyOwner {
        URL = _url;
    }

    function mintNFT(address recipient) public payable {
        require(msg.value >= 1 ether, "INSUFFICIENT BALANCE");
        unchecked {
            tokenId++;
        }
        uint256 newItemId = tokenId;
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, URL);
    }
}
