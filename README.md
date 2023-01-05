# Etherscan: Track Items transfered and date
 Web3.js script which is used to track nft transfered `from` an address `to`  an address and also time.

#npm install web3

create a web3.js function getPastEvents and loop it will the number of blocks the range given in 'Object' and pass event name 'Transfer'.

through ` getBlock ` function get the blockNumber from that block will get the unix timestamp of block.Javascript uses the number of milliseconds since epoch. Unix 

timestamp is seconds since epoch. That is why we have to multiply the tme with 1000.

Hence, the need to convert Unix timestamp into millseconds before using it in Javascript

Iterate the block number and print the event logs of 'from','to' and 'block.timestamp'
