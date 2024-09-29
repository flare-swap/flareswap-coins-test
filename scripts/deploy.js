const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploy with address: ", deployer.address)

  // FlareSwapToken
  const FlareSwapToken = await hre.ethers.getContractFactory("FlareSwapToken");
  const flareSwapToken = await FlareSwapToken.deploy(deployer.address);
  await flareSwapToken.waitForDeployment();
  const flareSwapTokenAddress = await flareSwapToken.getAddress();
  try {
    await hre.run("verify:verify", {
      address: await flareSwapToken.getAddress(),
      constructorArguments: [deployer.address],
    });
  } catch (error) {
    console.error("Error verifying contract:", error);
  }

  // TestUSDT
  const TestUSDT = await hre.ethers.getContractFactory("TestUSDT");
  const TestUSDTInstance = await TestUSDT.deploy(deployer.address);
  await TestUSDTInstance.waitForDeployment();
  const TestUSDTAddress = await TestUSDTInstance.getAddress();
  try {
    await hre.run("verify:verify", {
      address: TestUSDTAddress,
      constructorArguments: [deployer.address],
      contract: "contracts/TestUSDT.sol:TestUSDT",
    });
  } catch (error) {
    console.error("Error verifying contract:", error);
  }

  // TestUSDC
  const TestUSDC = await hre.ethers.getContractFactory("TestUSDC");
  const TestUSDCInstance = await TestUSDC.deploy(deployer.address);
  await TestUSDCInstance.waitForDeployment();
  const TestUSDCAddress = await TestUSDCInstance.getAddress();
  try {
    await hre.run("verify:verify", {
      address: TestUSDCAddress,
      constructorArguments: [deployer.address],
      contract: "contracts/TestUSDC.sol:TestUSDC",
    });
  } catch (error) {
    console.error("Error verifying contract:", error);
  }

  return {
    fls: flareSwapTokenAddress,
    testUsdt: TestUSDTAddress,
    testUsdc: TestUSDCAddress,
  };
}

main()
  .then((deployedAddresses) => {
    console.log("Deployed addresses:", deployedAddresses);
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
