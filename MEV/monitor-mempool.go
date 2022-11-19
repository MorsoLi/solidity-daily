// https://learnblockchain.cn/article/3263
package main

import (
	"context"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/ethereum/go-ethereum/ethclient/gethclient"
	"github.com/ethereum/go-ethereum/rpc"
	"log"
	"os"
	"os/signal"
	"syscall"
)

const (
	url = "https://eth-goerli.g.alchemy.com/v2/${PRIVATE_KEY}"
	wss = "wws://eth-goerli.g.alchemy.com/v2/${PRIVATE_KEY}"
)

func watch() {
	backend, err := ethclient.Dial(url)
	if err != nil {
		log.Printf("failed to dial: %v", err)
		return
	}

	rpcCli, err := rpc.Dial(wss)
	if err != nil {
		log.Printf("failed to dial: %v", err)
		return
	}
	gcli := gethclient.New(rpcCli)

	txch := make(chan common.Hash, 100)
	_, err = gcli.SubscribePendingTransactions(context.Background(), txch)
	if err != nil {
		log.Printf("failed to SubscribePendingTransactions: %v", err)
		return
	}
	for {
		select {
		case txhash := <-txch:
			tx, _, err := backend.TransactionByHash(context.Background(), txhash)
			if err != nil {
				continue
			}
			data, _ := tx.MarshalJSON()
			log.Printf("tx: %v", string(data))
		}
	}
}

func main() {
	go watch()
	signalChan := make(chan os.Signal, 1)
	signal.Notify(signalChan, syscall.SIGINT, syscall.SIGTERM)
	<-signalChan
}
