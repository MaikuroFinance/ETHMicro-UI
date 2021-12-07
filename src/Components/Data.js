import "../App.css";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import ETHMicro from "../artifacts/contracts/ETHMicro.sol/ETHMicro.json";
import ETHKey from "../artifacts/contracts/ETHKey.sol/ETHKey.json";
import Treasury from "../artifacts/contracts/Treasury.sol/Treasury.json";
import { ETHMiAddress, TreasuryAddress, ETHKeyAddress } from "../constants.js";

function Data(userAccount) {
  const [ethmiBalance, setETHMIBalance] = useState();
  const [ethKeyBalance, setETHKeyBalance] = useState();
  const [ethmiRate, setETHMIRate] = useState();
  const [ethKeyRate, setETHKeyRate] = useState();
  const [balance, setBalance] = useState();
  const [etherLocked, setEtherLocked] = useState();
  const [ethmiTotalSupply, setETHMiTotalSupply] = useState();
  const [ethKeyTotalSupply, setETHKeyTotalSupply] = useState();
  const [ethmiRewardsPoolBalance, setETHMIRewardsPoolBalance] = useState();
  const [ethKeyRewardsPoolBalance, setETHKeyRewardsPoolBalance] = useState();
  const [excessETHKey, setExcessETHKey] = useState();
  // const [colateralization, setCollateralization] = useState();
  const [ethKeyRewards, setETHKeyRewards] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      getBalance();
      getRates();
      getEtherLocked();
      getETHKeyRewardsPoolBalance();
      getExcessETHKey();
      getETHMiTotalSupply();

      getETHKeyBalance();

      getETHKeyRewards();
      getETHKeyTotalSupply();

      // getCollaterization();
      getETHMIRewardsPoolBalance();
    }, 5000);
    return () => clearInterval(interval);
  }, [
    ethmiBalance,
    excessETHKey,
    ethKeyBalance,
    ethmiRate,
    ethKeyRate,
    etherLocked,
    ethmiTotalSupply,
    ethKeyTotalSupply,
    userAccount.userAccount
  ]);

  async function getBalance() {
    if (typeof window.ethereum !== "undefined" && userAccount.userAccount) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await getETHMIBalance();
      await getETHKeyBalance();
      provider.getBalance(userAccount.userAccount).then((balance) => {
        // convert a currency unit from wei to ether
        const balanceInEth = ethers.utils.formatEther(balance);
        setBalance(balanceInEth);
      });
    }
  }

  async function getExcessETHKey() {
    if (typeof window.ethereum !== "undefined" && userAccount.userAccount) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let contract = new ethers.Contract(TreasuryAddress, Treasury.abi, provider);
      const excess = ethers.utils.formatEther(
        (await contract.getExcessETHKey()).toString()
      );
      setExcessETHKey(excess);
    }
  }

  async function getRates() {
    if (typeof window.ethereum !== "undefined" && userAccount.userAccount) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let contract = new ethers.Contract(ETHMiAddress, ETHMicro.abi, provider);
      let newRate = ethers.utils.formatEther(
        (await contract.getRate(userAccount.userAccount)).toString()
      );
      setETHMIRate(newRate);
      contract = new ethers.Contract(ETHKeyAddress, ETHKey.abi, provider);
      newRate = ethers.utils.formatEther(
        (await contract.getRate(userAccount.userAccount)).toString()
      );
      setETHKeyRate(newRate);
    }
  }

  async function getEtherLocked() {
    if (typeof window.ethereum !== "undefined" && userAccount.userAccount) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      provider.getBalance(TreasuryAddress).then((lockedBalance) => {
        // convert a currency unit from wei to ether
        const lockedBalanceInEth = ethers.utils.formatEther(
          lockedBalance.toString()
        );
        setEtherLocked(lockedBalanceInEth);
      });
    }
  }

  async function getETHMiTotalSupply() {
    if (typeof window.ethereum !== "undefined" && userAccount.userAccount) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let contract = new ethers.Contract(ETHMiAddress, ETHMicro.abi, provider);
      let totalSupply = ethers.utils.formatEther(
        (await contract.totalSupply()).toString()
      );
      setETHMiTotalSupply(totalSupply);
    }
  }

  async function getETHKeyTotalSupply() {
    if (typeof window.ethereum !== "undefined" && userAccount.userAccount) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let contract = new ethers.Contract(ETHKeyAddress, ETHKey.abi, provider);
      let totalSupply = ethers.utils.formatEther(
        (await contract.totalSupply()).toString()
      );
      setETHKeyTotalSupply(totalSupply);
    }
  }

  async function getETHMIBalance() {
    if (typeof window.ethereum !== "undefined" && userAccount.userAccount) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        ETHMiAddress,
        ETHMicro.abi,
        provider
      );
      const newBalance = await contract.balanceOf(userAccount.userAccount);
      setETHMIBalance(ethers.utils.formatEther(newBalance.toString()));
    }
  }

  async function getETHKeyBalance() {
    if (typeof window.ethereum !== "undefined" && userAccount.userAccount) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(ETHKeyAddress, ETHKey.abi, provider);
      const newBalance = await contract.balanceOf(userAccount.userAccount);
      setETHKeyBalance(ethers.utils.formatEther(newBalance.toString()));
    }
  }

  async function getETHMIRewardsPoolBalance() {
    if (typeof window.ethereum !== "undefined" && userAccount.userAccount) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        ETHMiAddress,
        ETHMicro.abi,
        provider
      );
      const newBalance = await contract.balanceOf(contract.address);
      setETHMIRewardsPoolBalance(
        ethers.utils.formatEther(newBalance.toString())
      );
    }
  }

  async function getETHKeyRewardsPoolBalance() {
    if (typeof window.ethereum !== "undefined" && userAccount.userAccount) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(ETHMiAddress, ETHKey.abi, provider);
      const newBalance = await contract.balanceOf(ETHKeyAddress);
      setETHKeyRewardsPoolBalance(
        ethers.utils.formatEther(newBalance.toString())
      );
    }
  }

  async function getETHKeyRewards() {
    if (typeof window.ethereum !== "undefined" && userAccount.userAccount) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(ETHKeyAddress, ETHKey.abi, provider);
      const newBalance = ethers.utils.formatEther(
        await contract.balanceOf(userAccount.userAccount)
      );
      const rate = ethers.utils.formatEther(
        await contract.getRate(userAccount.userAccount)
      );
      const rewards = +newBalance * +rate;
      setETHKeyRewards(rewards);
    }
  }

  // async function getCollaterization() {
  //   if (typeof window.ethereum !== "undefined" && userAccount.userAccount) {
  //     const calculation = ethmiTotalSupply / etherLocked / 1000.0;
  //     setCollateralization((calculation * 100).toString() + "%");
  //   }
  // }
  return (
    <div className="d-flex justify-content-center align-items-center data-container bg-dark rounded text-white mx-auto">
      <div className="row profile justify-content-center">
        <div className="col mx-auto">
          <h4 className="dataTitle">Wallet</h4>
          <div className="row rowData">
            <div className="col">Wallet Address:</div>
            <div className="col colData">{userAccount.userAccount}</div>
          </div>
          <div className="row rowData">
            <div className="col">Ether Balance:</div>
            <div className="col colData">{balance}</div>
          </div>
          <div className="row rowData">
            <div className="col">ETHKey Balance:</div>
            <div className="col colData">{ethKeyBalance}</div>
          </div>
          <div className="row rowData">
            <div className="col">ETHMI Balance:</div>
            <div className="col colData">{ethmiBalance}</div>
          </div>

          <h4 className="dataTitle">Earnings</h4>
          <div className="row rowData">
            <div className="col">ETHKey Rewards:</div>
            <div className="col colData">{ethKeyRewards}</div>
          </div>
          <div className="row rowData">
            <div className="col">ETHKey Rewards Rate: </div>
            <div className="col colData">{ethKeyRate} per ETHKey</div>
          </div>
          <div className="row rowData">
            <div className="col">Excess ETHKey remaining: </div>
            <div className="col colData">{excessETHKey}</div>
          </div>
          <h4 className="dataTitle">System Information</h4>
          <div className="row rowData">
            <div className="col">ETHMI Total Supply:</div>
            <div className="col colData">{ethmiTotalSupply}</div>
          </div>
          <div className="row rowData">
            <div className="col">ETHKey Total Supply:</div>
            <div className="col colData">{ethKeyTotalSupply}</div>
          </div>
          <div className="row rowData">
            <div className="col">Ether Locked: </div>
            <div className="col colData">{etherLocked}</div>
          </div>
          {/* <div className="row rowData">
            <div className="col">ETHMI Collateralization:</div>
            <div className="col colData">{colateralization}</div>
          </div> */}
                    <div className="row rowData">
            <div className="col">Treasury Contract Address: </div>
            <div className="col colData">{TreasuryAddress}</div>
          </div>
          <div className="row rowData">
            <div className="col">ETHkey Contract Address: </div>
            <div className="col colData">{ETHKeyAddress}</div>
          </div>
          <div className="row rowData">
            <div className="col">ETHMI Contract Address: </div>
            <div className="col colData">{ETHMiAddress}</div>
          </div>
          <h4 className="dataTitle">Rewards Pools</h4>
          <div className="row rowData">
            <div className="col">ETHKey Rewards Pool Balance: </div>
            <div className="col colData">{ethKeyRewardsPoolBalance}</div>
          </div>
          <div className="row rowData">
            <div className="col">ETHMI Rewards Pool Balance:</div>
            <div className="col colData">{ethmiRewardsPoolBalance}</div>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Data;
