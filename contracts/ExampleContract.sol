// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

/// @title 
/// @notice 
contract ExampleContract{


    function matchNumbersWrapper(uint a, uint b, uint256[] calldata masks)public pure returns(uint256){
        return matchNumbers(a, b, masks);
    }


    function matchNumbers(uint a, uint b, uint256[] calldata masks) public pure returns (uint) {
        uint256 numberOfMatches = 0;

        uint256 cardinality = 3;

        for (uint256 i = 0; i < masks.length; i++) {
            uint256 mask = masks[i];
            assembly {
                if not( eq( and(a, mask), and(b, mask) ))  {
                    
                    mstore(0x0, sub(cardinality,numberOfMatches))
                    return(0x0, 32)
                }
                numberOfMatches := add(numberOfMatches, 1)
            }

        }

        return cardinality - numberOfMatches;

    }


}
