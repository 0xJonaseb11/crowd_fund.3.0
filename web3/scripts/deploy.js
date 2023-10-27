//import hardhat
const hre = require("hardhat");

//Env. variables
const vrfCoordinatorV2Address = process.env.VRFAddress;
const subId = process.env.SubId;
const keyHash = process.env.keyHash;
const callbackGasLimit =  process.env.gasLimit;


async function main() {
  console.log("Deploying Hogwarts NFT contract...");

  //deploy HogwartsNFT contract
  const HogwartsNFT = await hre.ethers.getContractFactory("HogwartsNFT");
  const hogwartsNFT = await HogwartsNFT.deploy();

  //waiting for confirmation blocks
  let currentBlock = await hre.ethers.provider.getBlockNumber();

  while(currentBlock + 5 > (await hre.ethers.provider.getBlockNumber())) {

  }
   
  //getting contract address
  const hogwartsAddress = await hogwartsNFT.getAddress();
  console.log("Hogwarts NFT deployed to: ", hogwartsAddress);

  // Deploying random house assignmet contract
  console.log("Deploying Random House Assignment Contract...");

  const RandomHouse = await hre.ethers.getContractFactory("RandomHouseAssignment");
  const randomHouse = await RandomHouse.deploy(hogwartsAddress, vrfCoordinatorV2Address, subId, keyHash, callbackGasLimit);\

  //waiting for confirmation blocks(again)
  while(currentBlock + 5 (await hre.ethers.provider.getBlockNumber()));

  //getting the contract address(again)
  const randomAddress = await randomHouse.getAddress();
  console.log("Random House Assignment deployed to: ", randomAddress);

  //  Transfer ownership
  

}
