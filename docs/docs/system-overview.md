---
layout: page
title: "System Overview"
permalink: /system-overview/
nav_order: 3
---

# System Overview

The micro ecosystem is compromised of two ERC20 tokens with some interesting opportunities for yield
{: .fs-6 .fw-300 }

## Main System Utilities

### Minting

Deposit ETH to mint 1000 to 1 ETHMI and 1000 to 1 ETHkey.
Example 1 ETH = 1000 ETHMI and 1000 ETHkey.
There is no minimum and no maximum amount that can be minted.

### Unlocking ETH

You must send equal amounts of ETHMI and ETHkey to unlock and redeem ETH from the treasury smart contract.
Example: Sendong 1000 ETHMI and 1000 ETHkey will burn the tokens and send you back 1 ETH, plus any ETHMI locked in the ETHkey.

### ETHMi Total Supply

There is no initial supply of ETHMI. The supply increases only from minting and decreases from redemption burn.

### ETHkey Total Supply

The initial total supply of ETHkey is 100,000,000. This initial supply is intended to create a market that allows ETHMI holders the opportunity to acquire extra ETHkey for the redemption of their ETHMI earnings. The ETHkey supply will increase and decrease from minting ETHMI and decrease from the redemption burn of ETHMI.

### ETHMI Transfer Fee

Every transaction of ETHMI has a fee of %0.625 which is deducted from the amount sent so sending 
100 ETHMI would result in 99.375 ETHMI being delivered. 

### Minting Fee

There is a 2% fee to create ETHkey when minting ETHMI. This 2% fee is sent to the ETHkey pool from the newly minted ETHMI balance.
Example:
Send 1 ETH to mint 1000 ETHMI and 1000 ETHkey. Sending address receives 980 ETHMI (1000 - 2%( 20 ETHmi) = 980 ETHmi) and 1000 ETkey.

### ETHMI Balance Growth

The balance of an address holding ETHMI automatically grows from receiving a portion of the transaction fees in the network. 60% of the 0.625% transfer fee gets reflectively distributed to all address balances based on the percentage of total supply the address represents.

### ETHkey Pool Rewards

40% of the 0.625% ETHMI transfer fee is sent to the ETHkey reward pool. Each held ETHkey accumulates a redeemable portion of new ETHMI in the ETHkey rewards pool. The amount assigned to each ETHkey is based on the percentage of total supply each ETHkey represents at the time in the network. An address holding ETHkey can check the underlying balance of ETHMI by connecting to the ETHMI app. ETHMI that is assigned to ETHkey can be redeemed by unlocking ETH from the ETHMI smart contract.

Caution! Transferring ETHkey to another address resets the assigned ETHMI back to zero, and transfers any prior assigned ETHMI back into the pool to be distributed amongst the ETHkey holders. Hold ETHkey in an address that you plan on connecting to the ETHMI app for redemption.
