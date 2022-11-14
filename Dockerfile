FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:latest as base

ENV NODE_OPTIONS=--openssl-legacy-provider
RUN sed -i s@/deb.debian.org/@/mirrors.aliyun.com/@g /etc/apt/sources.list
RUN apt-get update && apt-get install --no-install-recommends -y build-essential curl

RUN mkdir -p /home/app
WORKDIR /home/app

RUN npm config set registry https://registry.npm.taobao.org
RUN npm install --global web3 ethereumjs-testrpc ganache-cli truffle solc

EXPOSE 443 80