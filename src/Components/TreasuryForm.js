import React, { useEffect, useState } from "react"
import "./Switch.css"
import "../App.css"
import Switch from "./Switch.js"
import { ethers } from "ethers"
import Treasury from "../artifacts/contracts/Treasury.sol/Treasury.json"
import { TreasuryAddress } from "../constants.js"

//Input Toggles
function WithdrawInput(
  ethmiBalance,
  balanceUpdate,
  ethKeyBalance,
  userAccount
) {
  const [withdrawAmount, setWithdrawAmount] = useState()
  const [withdrawDisabled, setWithdrawDisabled] = useState(true)
  const [withdrawErrorMessage, setWithdrawErrorMessage] = useState()

  useEffect(() => {}, [ethmiBalance, ethKeyBalance, userAccount])

  async function withdraw() {
    if (typeof window.ethereum !== "undefined" && userAccount) {
      let provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      let contract = new ethers.Contract(TreasuryAddress, Treasury.abi, signer)
      let nonce = await provider.getTransactionCount(userAccount)
      let overrideOptions = {
        nonce: nonce,
        gasLimit: 130000,
      }
      await contract
        .connect(signer)
        .withdraw(ethers.utils.parseEther(withdrawAmount), overrideOptions)
        .then((transaction) => {
          transaction.wait()
          setWithdrawErrorMessage("")
        })
        .catch((withdrawError) => {
          console.log(withdrawError)
          setWithdrawErrorMessage(withdrawError.description)
        })
      balanceUpdate()
    }
  }

  function validateWithdrawInput(amount) {
    let tempAmount = Number(amount)
    if (tempAmount > ethmiBalance || tempAmount > ethKeyBalance) {
      setWithdrawDisabled(true)
    }
    setWithdrawDisabled(false)
  }

  return (
    <div>
      <input
        type="number"
        className="form-control transparent-input token-input"
        onInput={(e) => {
          setWithdrawAmount(e.target.value)
          validateWithdrawInput(e.target.value)
        }}
        value={withdrawAmount}
        min="0.00"
        step="0.001"
        precision={18}
        placeholder="# ETHMI to Redeem"
      />
      <div>
        <button
          className="action-button btn"
          type="button"
          onClick={withdraw}
          disabled={withdrawDisabled}
        >
          Submit Redemption
        </button>
      </div>
      <span style={{ color: "red" }}>
        {withdrawErrorMessage != "" && withdrawErrorMessage}
      </span>
    </div>
  )
}

function DepositInput(etherDepositBalance, balanceUpdate, userAccount) {
  const [depositAmount, setDepositAmount] = useState()
  const [depositDisabled, setDepositDisabled] = useState(true)
  const [depositErrorMessage, setDepositErrorMessage] = useState()

  useEffect(() => {}, [etherDepositBalance, userAccount])

  function validateDepositInput(amount) {
    let tempAmount = Number(amount)
    if (tempAmount > etherDepositBalance) {
      setDepositDisabled(true)
    } else {
      setDepositDisabled(false)
    }
  }

  async function deposit() {
    if (typeof window.ethereum !== "undefined" && userAccount) {
      let provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      let contract = new ethers.Contract(TreasuryAddress, Treasury.abi, signer)
      let nonce = await provider.getTransactionCount(userAccount)
      let overrideOptions = {
        nonce: nonce,
        gasLimit: 200000,
        value: ethers.utils.parseEther(depositAmount),
      }
      await contract
        .connect(signer)
        .deposit(overrideOptions)
        .then((transaction) => {
          transaction.wait()
          setDepositErrorMessage("")
        })
        .catch((depositError) => {
          console.log(depositError.name)
          setDepositErrorMessage(depositError.description)
        })
      balanceUpdate()
    }
  }

  return (
    <div>
      <input
        type="number"
        className="form-control transparent-input token-input"
        onInput={(e) => {
          setDepositAmount(e.target.value), validateDepositInput(e.target.value)
        }}
        value={depositAmount}
        min="0.00"
        step="0.001"
        precision={17}
        placeholder="# of ETH to mint into ETHMI"
      />
      <div>
        <button
          className="action-button btn"
          type="button"
          onClick={deposit}
          disabled={depositDisabled}
        >
          Submit Mint
        </button>
      </div>
      <span style={{ color: "red" }}>
        {depositErrorMessage != "" && depositErrorMessage}
      </span>
    </div>
  )
}

function TreasuryForm(balances) {
  const [toggleValue, setToggleValue] = useState()

  useEffect(() => {}, [
    balances.etherBalance,
    balances.ethKeyBalance,
    balances.ethmiTreasuryBalance,
  ])

  function calculateMax() {
    if (balances.ethmiTreasuryBalance <= balances.ethKeyTreasuryBalance) {
      return balances.ethmiTreasuryBalance
    }
    return balances.ethKeyTreasuryBalance
  }

  return (
    <>
      {Switch(toggleValue, setToggleValue)}
      <div className="align-items-center justify-content-center">
        {toggleValue
          ? WithdrawInput(
              balances.ethmiTreasuryBalance,
              balances.balanceUpdate,
              balances.ethKeyTBalance,
              balances.userAccount
            )
          : DepositInput(
              balances.etherBalance,
              balances.balanceUpdate,
              balances.userAccount
            )}
        {/* <div className='text-white max-text'>
          {toggleValue
            ? "Max Available to Redeem " + calculateMax() : 
            "Ether Available to Mint " + balances.etherBalance}
          </div> */}
      </div>
    </>
  )
}

export default TreasuryForm
