const Web3 = require('web3');
const fs = require('fs-extra')

const web3 = new Web3('wss://mainnet.infura.io/ws/v3/d9409fd4b4804716877c43f684f667b7');
const contractAddress = 'contract address';
const abi = fs.readFileSync('./eth-contract.abi', 'utf8')
const contractAbi = JSON.parse(abi)
const contract = new web3.eth.Contract(contractAbi, contractAddress);

async function logTime() {
  
    let len
    await contract
        .getPastEvents('Transfer', {
            fromBlock:  16330508 ,
            toBlock: 16332330 ,
        })
        .then(async function (events) {
            len = events.length
     
            for (let i = 0; i < len; i++) {
                let timelog = await web3.eth.getBlock(events[i].blockNumber)

                var date = new Date(timelog.timestamp * 1000)
                
              
                console.log(
                    'Tge Block Number: ' +events[i].blockNumber+
                    ' tokenId: '          +events[i].returnValues[2]+ 
                    ' transfered from: ' +events[i].returnValues[0]+
                    ' transfered to: '    +events[i].returnValues[1]+
                    ' at this time: '    +await date.toUTCString()

                )
            }
        })
  
}
logTime();
