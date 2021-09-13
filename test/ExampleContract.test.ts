import { expect } from 'chai';
import { deployMockContract, MockContract } from 'ethereum-waffle';
import { Contract, ContractFactory, Signer, Wallet } from 'ethers';
import { ethers } from 'hardhat';
import { Interface } from 'ethers/lib/utils';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

describe('Test Set Name', () => {
    let exampleContract: Contract

    let wallet1: SignerWithAddress, wallet2: SignerWithAddress, wallet3: SignerWithAddress, wallet4: SignerWithAddress

    beforeEach(async () =>{
        [wallet1, wallet2, wallet3, wallet4] = await ethers.getSigners()

        const exampleContractFactory: ContractFactory = await ethers.getContractFactory("ExampleContract")
        exampleContract = await exampleContractFactory.deploy()
    })
    describe("callMe()", ()=>{
        it('Test Name', async () => {
            
            const result = await exampleContract.matchNumbersWrapper(255, 252, [15, 240])
            console.log(result)

        })
    })

})