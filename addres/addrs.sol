// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

contract AddressValidator {
    // Function to validate if an address is not the zero address
    function validateAddress(address _address) external pure returns (bool) {
        return _address != address(0);
    }
}
