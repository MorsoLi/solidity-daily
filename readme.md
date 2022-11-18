## DApp 开发

一个DApp开发通常有如下流程：
1. 用户交互设计，UI设计
2. 智能合约的数据结构设计
3. 智能合约编码，测试，测试网（Goerli，Mumbai等）部署
4. 按照UI设计还原设计稿开发前端
5. 通过js完成与智能合约(接口ABI, JSON-RPC Provider)的交互，联调，测试
6. 智能合约安全审计
6. 主网发布

### [BuyCoffee](./BuyCoffee/contracts/BuyCoffee.sol)
* 一个向个人捐赠的应用，主要实现三个函数
1. getMemos 获取捐赠人列表
2. buyCoffee 捐赠行为
3. withdrawTips 提取合约余额
4. TODO: 基于 Vercel + Next.js 上线服务

### [OnchainNFT](./BuyCoffee/contracts/MyToken.sol)
* 基于 Ploygon，通过将经过Base64编码的矢量图上传保存到链上，真正的实现区中心化 NFT
1. 获取 solc 版本接口超时，可参考[Failed to obtain list of solc versions.](https://github.com/NomicFoundation/hardhat/issues/2684#issuecomment-1177001254)
2. 申请 POLYGONSCANAPI_KEY , 利用开发接口，快速进行 Verify & Publish Contract Source Code (正常智能合约部署到链上，只能看到opcode， bytecode)，通过开发接口，可以快速进行源码及ABI发布
