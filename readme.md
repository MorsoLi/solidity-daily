## DApp 开发

一个DApp开发通常有如下流程：
1. 用户交互设计，UI设计
2. 智能合约的数据结构设计
3. 智能合约编码，测试，测试网（Goerli，Mumbai等）部署
4. 按照UI设计还原设计稿开发前端
5. 通过js完成与智能合约(接口ABI, JSON-RPC Provider, 例如[Alchemy](https://alchemy.com/?r=Tc4MjkwNzQxMzQwM))的交互，联调，测试
6. 智能合约安全审计
6. 主网发布

### [BuyCoffee](./DApp/contracts/BuyCoffee.sol)
* 一个向个人捐赠的应用，主要实现三个函数
1. getMemos 获取捐赠人列表
2. buyCoffee 捐赠行为
3. withdrawTips 提取合约余额
4. TODO: 基于 Vercel + Next.js 上线服务
5. [合约地址](https://goerli.etherscan.io/address/0x0abfa39ba5c8aec9be8643bcaa002b9bcf3914cf)

### [OnchainNFT](./DApp/contracts/MyToken.sol)
* 基于 Ploygon，通过将经过Base64编码的矢量图上传保存到链上，真正的实现区中心化 NFT
1. 获取 solc 版本接口超时，可参考[Failed to obtain list of solc versions.](https://github.com/NomicFoundation/hardhat/issues/2684#issuecomment-1177001254)
2. 申请 POLYGONSCANAPI_KEY , 利用开发接口，快速进行 Verify & Publish Contract Source Code (正常智能合约部署到链上，只能看到opcode， bytecode)，通过开发接口，可以快速进行源码及ABI发布
3. `npx hardhat run scripts/deploy-mytoken.js --network mumbai`
4. `npx hardhat verify --network mumbai 0xF9f3e4f365BF8eaD086d26B018ce9Ed221EeA7b1 --show-stack-traces`
5. [合约地址](https://mumbai.polygonscan.com/address/0xf9f3e4f365bf8ead086d26b018ce9ed221eea7b1)


### [BullBear](./DApp/contracts/BullBear.sol)
* 基于 chainlink 预言机获取实时资产价格，来自动更新nft（牛熊卡通形象）状态 (chainlink的Data Feed获取资产，Keeper实现合约自动化执行)
1. [MockAggregator](./DApp/contracts/MockAggregator.sol): 本地测试部署的 Mock Price Feed
2. `npx hardhat run scripts/deploy-bear.js --network goerli`
3. [合约地址](https://goerli.etherscan.io/address/0xdd044eabe7adfd7987f942439be75ef1d7ab2ecf)

## DeFi 协议

### 流动性协议之[Uniswap V3](https://uniswap.org/blog/uniswap-v3)
* Curve

### 借贷协议之[Compound](https://compound.finance/)
* Other: MakerDAO 和 Aave

## 深入理解 EVM

### 认识 opcode

### Geth——用Go来做以太坊开发

## MEV
* [MEV了解](./MEV/MEV%E4%BA%86%E8%A7%A3.md)
