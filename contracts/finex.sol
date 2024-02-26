 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductOwnership {
    mapping(uint256 => address) public productOwners;

    function transferOwnership(uint256 productId, address newOwner) external {
        productOwners[productId] = newOwner;
    }
}
