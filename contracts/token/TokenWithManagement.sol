// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenWithManagement is ERC20, Ownable {
    uint8 decimal;
    mapping(address => bool) public blackList;

    constructor(string memory _name, string memory _symbol, uint8 _decimal)
        ERC20(_name, _symbol)
    {
        _mint(msg.sender, 1000000000000000000000000000000);
        decimal=_decimal;
    }

    function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount);
    }

    function decimals() public view override returns (uint8) {
        return decimal;
    }

    function banAccount(address account) external onlyOwner {
        blackList[account] = true;
    }
    function banAccounts(address[] calldata accounts) external onlyOwner {
        for (uint256 i = 0; i < accounts.length; i ++) {
            blackList[accounts[i]] = true;
        }
    }

    function freeAccount(address account) external onlyOwner {
        delete blackList[account];
    }

    function freeAccounts(address[] calldata accounts) external onlyOwner {
        for (uint256 i = 0; i < accounts.length; i ++) {
            delete blackList[accounts[i]];
        }
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256
    ) internal view override {
        require(!blackList[from], "from is baned!");
        require(!blackList[to], "to is baned!");
    }
}