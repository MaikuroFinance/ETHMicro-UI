---
layout: page
title: "System Diagrams"
permalink: /system-diagrams/
nav_order: 4
---


---
layout: page
title: "System Diagrams"
permalink: /system-diagrams/
nav_order: 4
---


### Minting ETHMICRO and ETHKEY / Depositing ETH
This diagram displays an overview of the process for Minting ETHMI and ETHKEY

{:refdef: style="text-align: center;"}
![deposit diagram](/assets/images/deposit.png)
{: refdef}

1. A user deposits ETH into the Treasury Contract
2. The Treasury makes a request to the ETHMicro contract to mint 980 ETHMicro
3. The ETHMicro contract mints 980 tokens and sends it to the user
4. The ETHMicro mints the 2% fee, 20 tokens, and sends them to the ETHKey contract pool
5. The Treasury Contract rmakes a request tp the ETHKey contract to mint 1000 ETHKey
6. The ETHKey contract mints 1000 tokens and sends it to the user


### Redeeming ETHMicro and ETHKey / Withdrawing ETH

{:refdef: style="text-align: center;"}
![deposit diagram](/assets/images/redeem.png)
{: refdef}

1. The User calls the withdraw function specifying that they wish to redeem 1000 ETHMI and 1000 ETHKey
2. The Treausury contract burns the 1000 ETHMicro
3. The Treasury contract burns the 1000 ETHKey
4. The ETHKey contract sends 90% of the rewards unlocked from the ETHKey to the user
5. The ETHKey contract distributes 10% of the reward back to the ETHKey owners
6. The Treasury Contract transfers 1 ETH to the user

### Transferring ETH Micro

{:refdef: style="text-align: center;"}
![deposit diagram](/assets/images/transfer-ethmi.png)
{: refdef}

1. User1 initiates a transfer of 1000 ETHMI to User2
2. The ETHmicro contract adds a .625% (0.00625) fee to the transfer and adds 60% of that fee to the ETHMicro contract pool.
3. The ETHmicro contract sends 40% of the transfer fee to the ETHKey contract pool.
4. User2 receives 993.75 ETHMI

### Transferring ETHKey

{:refdef: style="text-align: center;"}
![deposit diagram](/assets/images/transfer-ethkey.png)
{: refdef}

1. User1 initiates a transfer 1000 ETHKey to User2
2. All rewards associated with the 1000 ETHKey are redistributed back into the ETHKey contract pool
3. User2 receives 1000 ETHKey