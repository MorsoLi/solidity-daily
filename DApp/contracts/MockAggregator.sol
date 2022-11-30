// SPDX-License-Identifier: MIT 
// https://github.com/smartcontractkit/chainlink/tree/develop/contracts/src/v0.8/mocks
pragma solidity ^0.8.0;

contract MockAggregator {
  int256 public s_answer;

  function setLatestAnswer(int256 answer) public {
    s_answer = answer;
  }

  function latestAnswer() public view returns (int256) {
    return s_answer;
  }
}