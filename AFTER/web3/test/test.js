const { ethers } = require("ethers");
const CrowdfundingFactory = require("../artifacts/contracts/CrowdFunding.sol/Crowdfunding.json"); // Import your contract JSON artifact

describe("Crowdfunding Contract", () => {
  let crowdfundingContract, owner, donor;

  before(async () => {
    const provider = new ethers.providers.JsonRpcProvider("thirdwebProvider");
    crowdfundingContract = new ethers.Contract("YOUR_CONTRACT_ADDRESS", CrowdfundingFactory.abi, provider);
    [owner, donor] = await ethers.getSigners();
  });

  it("should create a campaign", async () => {
    // Simulate user input or generate parameters dynamically
    const title = "User Campaign";
    const description = "User-generated campaign description";
    const target = ethers.utils.parseEther("2");
    const deadline = Math.floor(Date.now() / 1000) + 7200;
    const image = "user.jpg";

    const tx = await crowdfundingContract.createCampaign(owner.address, title, description, target, deadline, image);
    await tx.wait();
  });

  it("should donate to a campaign", async () => {
    // Simulate user input or obtain the campaign ID from a previous test
    const campaignId = 0;
    const amount = ethers.utils.parseEther("0.5");

    const initialBalance = await owner.getBalance();
    const tx = await crowdfundingContract.connect(donor).donateToCampaign(campaignId, { value: amount });
    await tx.wait();
  });

  it("should get campaign donators and donations", async () => {
    // Simulate user input or obtain the campaign ID from a previous test
    const campaignId = 0;

    const [donators, donations] = await crowdfundingContract.getDonators(campaignId);
    console.log("Donators:", donators);
    console.log("Donations:", donations);
  });
});
