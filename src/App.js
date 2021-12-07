import "./App.css"
import React, { useState, useEffect } from "react"
import { ethers } from "ethers"
import ETHMicro from "./artifacts/contracts/ETHMicro.sol/ETHMicro.json"
import ETHKey from "./artifacts/contracts/ETHKey.sol/ETHKey.json"
import TransferForm from "./Components/TransferForm"
import TreasuryForm from "./Components/TreasuryForm"
import Data from "./Components/Data"
import About from "./Components/About"
import { ETHMiAddress, ETHKeyAddress } from "./constants.js"
import {
  ETHKeyEtherscan,
  TreasuryEtherscan,
  ETHMIEtherscan,
  Github,
  Docs,
} from "./constants"

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

function App() {
  const [ethmiBalance, setETHMIBalance] = useState()
  const [ethKeyBalance, setETHKeyBalance] = useState()
  const [balance, setBalance] = useState()
  const [functionToggle, setFunctionToggle] = useState(false)
  const [about, setAbout] = useState(true)
  const [account, setAccount] = useState(null)

  // const [transferAccountValid, setTransferAccountValid] = useState(false)

  useEffect(() => {
    getBalance()
  }, [ethmiBalance, ethKeyBalance, balance, account])

  async function requestAccount() {
    if (typeof window.ethereum !== "undefined") {
      setAccount(
        (
          await window.ethereum.request({
            method: "eth_requestAccounts",
          })
        )[0]
      )
    }
  }

  async function getBalance() {
    if (typeof window.ethereum !== "undefined" && account && account) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await getETHMIBalance()
      await getETHKeyBalance()
      provider.getBalance(account).then((balance) => {
        // convert a currency unit from wei to ether
        const balanceInEth = ethers.utils.formatEther(balance)
        setBalance(balanceInEth)
      })
    }
  }

  async function getETHMIBalance() {
    if (typeof window.ethereum !== "undefined" && account) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(ETHMiAddress, ETHMicro.abi, provider)
      const newBalance = await contract.balanceOf(account)
      setETHMIBalance(ethers.utils.formatEther(newBalance.toString()))
    }
  }

  async function getETHKeyBalance() {
    if (typeof window.ethereum !== "undefined" && account) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(ETHKeyAddress, ETHKey.abi, provider)
      const newBalance = await contract.balanceOf(account)
      setETHKeyBalance(ethers.utils.formatEther(newBalance.toString()))
    }
  }
  if (about) {
    return (
      <div className="App">
        <About setAboutToggle={setAbout} />
      </div>
    )
  } else {
    return (
      <>
        <div className="App">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
          />

          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossOrigin="anonymous"
          ></script>

          <Navbar collapseOnSelect fixed="top" expand="sm" variant="dark">
            <Container className="nav-container">
              <Navbar.Brand>
                <img
                  src="/ETHMI_logo.png"
                  alt="ETH micro logo tiny"
                  width="35"
                  height="55"
                  className="d-inline-block align-text-middle brand-logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-end"
              >
                <Nav className="justify-content-start">
                  <Nav.Link href={Docs}>Documentation</Nav.Link>
                  <Nav.Link href={Github}>Github</Nav.Link>
                  <NavDropdown title="Etherscan" id="basic-nav-dropdown">
                    <NavDropdown.Item href={TreasuryEtherscan}>
                      Treasury Contract
                    </NavDropdown.Item>
                    <NavDropdown.Item href={ETHKeyEtherscan}>
                      ETHKey Contract
                    </NavDropdown.Item>
                    <NavDropdown.Item href={ETHMIEtherscan}>
                      ETHMicro Contract
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    href="#"
                    onClick={() => {
                      setAbout(true)
                    }}
                  >
                    Home
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div className="d-flex text-white bg-black justify-content-center app-logo-flex flex-wrap">
            <img
              // width="96"
              // height="150"
              className="app-logo"
              src="/ETHMI_logo.png"
              alt="ethmi logo"
            />
            {/* <div className="d-flex align-items-center logo-title">ETHmicro</div> */}
            <div className="d-flex align-items-center logo-plus-app">+</div>
            <img
              className="app-logo"
              src="/ETHkey_logo.png"
              alt="ethkey logo"
            />
            {/* <div className="d-flex align-items-center logo-title">ETHKey</div> */}
            <div className="d-flex-column wallet-status-flex flex-wrap text-start justify-content-start">
              <button className="wallet-button btn-lg" onClick={requestAccount}>
                Connect Wallet
              </button>
              {account && <p>Connected To: {account}</p>}
            </div>
          </div>

          <div className="app-margins">
            <div className="app-container mx-auto">
              <div className="card input-card justify-content-center align-items-center bg-dark">
                <div className="d-flex-column input-area justify-content-center align-items-center bg-dark">
                  <p className="b"></p>
                  {
                    <TreasuryForm
                      balanceUpdate={() => {
                        getBalance()
                      }}
                      etherBalance={balance}
                      ethmiTreasuryBalance={ethmiBalance}
                      ethKeyTreasuryBalance={ethKeyBalance}
                      userAccount={account}
                    />
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="app-margins">
            {account && <Data userAccount={account} />}
          </div>
        </div>
        <footer className="text-center text-whitebg-dark">
          <div className="container p-4"></div>
          <div className="container p-3"></div>
          <div className="d-flex text-center p-3 container justify-content-center">
            <div className="footer-container">
              <div className="d-flex align-items-center justify-content-center">
                <a className="text-white" href={Github}>
                  Github
                </a>
                <a className="text-white footer-link" href={Docs}>
                  Documentation
                </a>
              </div>
              <div className="text-white justify-content-center">
                © 2021 Copyright:{" "}
                <a
                  className="text-white justify-content-center"
                  href="https://ethmicro.finance"
                >
                  ethmicro.finance
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default App
