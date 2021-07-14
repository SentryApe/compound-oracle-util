# compound-oracle-util

Usage:

1) Create a .env file with "INFURA_ENDPOINT=yourkeyhere"

2) npm install

3) node update_prices.js



## prices.js

Contains the oracle interface for the new Compound Chainlink ORACLE_ABI

It will be updated as tokens are added to Compound.

The current symbol list is "ETH", "BTC", "COMP", "LINK", "BAT", "ZRX", "DAI", "UNI", "SAI", "REP". USDC, USDT, and TUSD are fixed to equal 1 US Dollar.

## update_prices.js

A sample program for accessing the prices and printing them to console. Using the same pattern one could save it to a file or to a database.
