// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// Testing token for payment in fundraisings
contract TestToken is ERC20 {
    // solhint-disable-next-line no-empty-blocks
    constructor() ERC20("TestToken", "TST") {}

    function mint(address holder, uint256 amount) public {
        _mint(holder, amount);
    }
}
