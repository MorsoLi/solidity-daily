const hre=require("hardhat");

async function getBalance(address){
    const balanceBigInt = await hre.ethers.provider.getBalance(address);
    return hre.ethers.utils.formatEther(balanceBigInt);
}

async function printBalance(addresses){
    let idx=0;
    for(const address of addresses){
        console.log(`Adress ${idx} banlance:`, await getBalance(address));
        idx++;
    }
}

async function printMemos(memos){
    for(const memo of memos){
        const timestamp = memo.timestamp;
        const name =memo.name;
        const address=memo.from;
        const message=memo.message;
        console.log(`At ${timestamp}, ${name}, ${address}, ${message}`);
    }
}

async function main(){
    const [owner, tipper, tipper2, tipper3] = await hre.ethers.getSigners();
    const Coffee = await hre.ethers.getContractFactory("BuyCoffee");
    const BuyCoffee = await Coffee.deploy();

    await BuyCoffee.deployed();
    console.log("buy coffee deployed to:", BuyCoffee.address);

    const addresses = [owner.address, tipper.address, BuyCoffee.address];
    console.log("======start======");
    await printBalance(addresses);

    const tip = {value: hre.ethers.utils.parseEther("1")};
    await BuyCoffee.connect(tipper).buyCoffee("Tom", "you are good!", tip);
    await BuyCoffee.connect(tipper2).buyCoffee("Tedy", "you are better", tip);
    await BuyCoffee.connect(tipper3).buyCoffee("Sam", "you are best", tip);

    console.log("=====bought coffee===");
    await printBalance(addresses);

    await BuyCoffee.connect(owner).withdrawTips();

    console.log("=====withdrawTips===");
    await printBalance(addresses);

    console.log("=====memos=====");
    const memos = await BuyCoffee.getMemos();
    printMemos(memos);

}

main().then(()=>process.exit(0)).catch((error)=>{
    console.error(error);
    process.exit(1);
})