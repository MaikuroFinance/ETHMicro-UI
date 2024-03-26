import React, { useState, useEffect } from "react"
import "../App.css"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

import {
  ETHKeyEtherscan,
  TreasuryEtherscan,
  ETHMIEtherscan,
  Github,
  Docs,
} from "../constants"

{
  /* <Nav.Item>
<button
    onClick={() => {
      setAbout.setAboutToggle(false);
    }}
    className="btn launch-button"
  >
    Launch App
  </button>
  </Nav.Item> */
}

function About(setAbout) {
  return (
    <div>
      <div>
        <Navbar
          collapseOnSelect
          fixed="top"
          expand="sm"
          bg="dark"
          variant="dark"
          className="nav-container"
        >
          <Container className="nav-container">
            <Navbar.Brand>
              <div className="brand-background">
                <img
                  src="/ETHMI_logo.png"
                  alt=""
                  width="35"
                  height="55"
                  className="d-inline-block align-text-middle brand-logo"
                />
              </div>
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
                <Nav.Link>
                  {" "}
                  <button
                    onClick={() => {
                      setAbout.setAboutToggle(false)
                    }}
                    className="launch-button"
                  >
                    Launch App
                  </button>{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <main>
        <div className="container logo-container">
          <div className="d-flex text-white justify-content-center logo-flex">
            <img
              className="about-logo"
              src="/ETHMI_logo.png"
              alt="ethmi logo"
            />
            <div className="d-flex align-items-center logo-title">ETHmicro</div>
            <div className="d-flex align-items-center logo-plus">+</div>
            <img
              className="about-logo"
              src="/ETHkey_logo.png"
              alt="ethkey logo"
            />
            <div className="d-flex align-items-center logo-title">ETHKey</div>
          </div>
          <div className="mx-auto text-white lead">
            Earn yield by minting fully collaterized micro-sized ETH.
            <br></br>
            Earn even more with its accompanying utility token.
          </div>
        </div>

        <div className="container about-container">
          <div className="d-flex about-flex justify-content-center text-center flex-wrap">
            <div className="card about-card rounded">
              <div className="card-body text-start">
                <h2 className="card-title">Mint</h2>
                <p className="card-text">
                  ETH Micro (ETHMI) + ETHKey are minted at a ratio of 1000:1 ETH
                  less a 2% deposit fee taken from the ETHmicro
                </p>
              </div>
            </div>
            <div className="card about-card rounded">
              <div className="card-body text-start">
                <h2 className="card-title">Earn</h2>
                <p className="card-text">
                  A 2% deposit fee is added to the ETHKey rewards pool and the
                  .625% transfer fee is split between the ETHkey rewards pool
                  and ETHmicro rewards pool at a rate of 60:40
                </p>
              </div>
            </div>

            <div className="card about-card rounded">
              <div className="card-body text-start">
                <h2 className="card-title">Redeem</h2>
                <p className="card-text">
                  Pair your ETHmicro and ETHkey to redeem for ETH at a rate of
                  1000:1. Since ETHmicro is always 100% collateralized, one can
                  be sure there will be always be enough ETH to redeem their
                  ETHmicro.
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex bg-dark p-3 p-md-5 m-md-3 description">
            <div className="row">
              <div className="col text-start">
                <h2 className="token-desription-title">
                  Earn yield in your wallet using ETHmicro.
                </h2>
                <p className="token-description-text">
                  ETH Micro is an ERC20 token fuly collaterized by ETH in a
                  smart contract at a ratio of 1000 ETHMI to 1 ETH. Additional
                  features allow holders to deposit ETH for ETHMI and start
                  earning yield. Each ETHMI is always fully redeemable for ETH,
                  making the value pegged to ETH. The reflective nature of the
                  token allows you to earn yield from the .375% share of
                  transfers.
                  <br />
                  <br />
                  ETH Micro provides the benefit of giving you
                  ETH-collateralized, readily available liquidity that you do
                  not need to deposit into a smart contract to earn yield. This
                  means that you benefit from swaps, liquidity pools, and
                  arbitrage trades with the added benefit of being able to
                  redeem your ETHMI and rewards at any time for ETH. This makes
                  it a great way to earn low risk yield on ETH without any
                  restrictions on being able to use your tokens.
                </p>
              </div>
              <div className="d-none d-md-block d-lg-block d-xl-block col-3">
                <img width="207" height="322.5" src="/ETHMI_logo.png" />{" "}
              </div>
            </div>
          </div>

          <div className="d-flex bg-dark p-3 p-md-5 m-md-3 description">
            <div className="row">
              <div className="d-none d-md-block d-lg-block d-xl-block col-3">
                <img width="207" height="322.5" src="/ETHkey_logo.png" />{" "}
              </div>
              <div className="col  text-start">
                <h2 className="token-desription-title">
                  Stablize the Ecosystem + Earn Yield with ETHKey.
                </h2>
                <p className="token-description-text">
                  ETHKey is an ERC20 utility token required to unlock ETH from
                  the Treasury contract It is designed to add security and
                  stability to the ecosystem via the addition of secondary
                  market. Hold ETHkey to accumulate rewards from .25% of
                  transfers and the 2% deposit fees. Access your rewards by
                  redeeming ETHmicro and ETHkey for ETH.
                  <br />
                  <br />
                  Since the ETHKey is provided in exchange for the 2% minting
                  fee, this makes 1000 ETHKey roughly the price of 2% of the
                  current market price of ETH or 1 ETHKey = .00002 ETH. ETHkey
                  creates a dynamic market where minters, redeemers, and hodlers
                  will be constantly moving the ETHKey market to achieve their
                  individual goals.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dark p-3 p-md-5 m-md-3 description">
            <div className="row">
              <div className="col">
                <h2 className="token-desription-title text-start">
                  How It Works
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col text-start">
                <h4 className="token-desription-subtitle">1. Mint</h4>
                <p className="token-description-text">
                  Minting of ETHmicro and ETHKey is done by depositing ETH into
                  the smart contract. Minters wiill receive 1000:1 ETHMI and
                  1000:1 EHTKY by ratio to ETH A 2% fee is charged on the ETHMI
                  after minting to generate ETHKey and send to the ETHKey
                  rewards pool.
                </p>
                <h4 className="token-desription-subtitle">2. Hold and Earn</h4>
                <p className="token-description-text">
                  ETHMicro takes a 60% share of the .625% transfer fee on each
                  transfer. This .3% of all transfers gets distributed equally
                  to all ETHmicro holders at that point in time and is
                  immediately available for use.
                  <br></br>
                  <br></br>
                  ETHKey receives a 40% share of the .625% transfer fee on each
                  transfer as well as the 2% deposit fee on all ETHMicro mints.
                  Each of these rewards is equally distributed among all ETHKey
                  holders as part of their rewards balance. Unlke ETHKey the
                  rewards are only sent to the owner during redemption of their
                  ETHKey for ETH.
                </p>
                <h4 className="token-desription-subtitle">3. Redeem</h4>
                <p className="token-description-text">
                  To redeem your ETHmicro for ETH, the withdraw function is used
                  to burn equal amounts of ETHMI and ETHKEY. Upon a successful
                  burn of ETHMI and ETHKEY, ETH is send back to the user at a
                  rate of 1:1000 in addition to any rewards they have
                  accumulated with their ETHKey.
                </p>
              </div>
              {/* <div className='col'>
              <div className="d-flex d-none d-md-block d-lg-block d-xl-block">
                <img width="128" height="200" src="ETHMI_logo.png" />
                <img width="128" height="200" src="ETHKey_logo.png" />
              </div>
              </div> */}
            </div>
          </div>
          <div className="bg-dark p-3 p-md-5 m-md-3 description">
            <div className="row">
              <div className="col">
                <h2 className="token-desription-title text-align-center">
                  What Makes ETHmicro Different?
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col text-start">
                <h4 className="token-desription-subtitle">Time and Place</h4>
                <p className="token-description-text">
                  The ETHmicro and ETHkey smart contracts ensure that rewards
                  from the rewards pools ensure you keep your spot in line and
                  that no one can make a large takeover of tokens and access
                  existing rewards.
                </p>
                <h4 className="token-desription-subtitle">
                  Transfer Cost of ETHKey
                </h4>
                <p className="token-description-text">
                  You can use your rewards immediately for ETHmicro, but ETHKey
                  rewards are locked into the token. A very important aspect of
                  ETHKey is that any rewards matched to the ETHkey transferred
                  to another address is forfeited back to the rest of the ETHkey
                  holders.
                </p>
                <h4 className="token-desription-subtitle">
                  Always 100% Collateralized
                </h4>
                <p className="token-description-text">
                  Unlike many other token projects that have no underlying
                  value, ETHmicro will always be 100% collateralized with the
                  collateral being 100% accessible at any time.
                  <br></br>
                  <br></br>
                  In addition, 100,000,000 excess ETHkey will be minted to
                  ensure sufficient utility liquidity to make accessing the
                  underlying ETH more accessible.
                </p>
              </div>
              <div className="col text-start">
                <h4 className="token-desription-subtitle">
                  Transfer Fees Benefit the Community
                </h4>
                <p className="token-description-text">
                  Transfers of ETHmicro have a fee of .625%. 60% of the fee is
                  sent to the ETHMI holders and 40% is sent to ETHKEY holders.
                </p>
                <h4 className="token-desription-subtitle">
                  Arb Traders Benefit the Holders
                </h4>
                <p className="token-description-text">
                  ETHMi is pegged to the price of ETH by being fully
                  collateralized in the smart contract. Trading on decentralized
                  exchanges offsets the price and creates an opportunity for
                  arbitrage trading to balance the price. These trades are a
                  natural function of exchanges, now benefitting ETHmicro and
                  ETHkey holders through the .625% transfer fee.
                </p>
                <h4 className="token-desription-subtitle">
                  Fully Decentralized
                </h4>
                <p className="token-description-text">
                  ETHmicro and all associated contracts are completely
                  decentralized and locked upon deployment and initialization.
                  There are no owners of the contract who can access collateral
                  which is wholly governed by the smart contract. Furthermore,
                  there are no updates to this smart contract which can present
                  vulnerabilities as seen in other projects. This system is for
                  you, the user, to have a completely decentralized DeFi utility
                  at your fingertips.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex bg-dark p-3 p-md-5 m-md-3 description">
            <div className="row">
              <h2 className="token-desription-title text-align-center">
                ETHMicro Yield Estimation
              </h2>
              <p className="token-description text-start"></p>
              <img src="/Yield_Estimation.jpeg" />
            </div>
          </div>
          <div className="d-flex bg-dark p-3 p-md-5 m-md-3 description">
            <div className="row">
              <h2 className="token-desription-title text-align-center">
                Excess ETHKey Distribution
              </h2>
              <p className="token-description-text text-start">
                The ETHKey utility token is used as a key to lock collateral and create a dynamic market. An excess of 100,000,000 tokens
                will be minted to provide adequate liquidity for collateral redemption far into the future. This ensures that lost tokens or adversaries cannot
                create conditions where significant collateral is locked indefinitely.
                <br/>
                <br/>
                The 85,000,000 will be used to fund liquidity pools, grants to other projects, and airdrops (stay tuned)
                <br/>
                <br/>
                The remainder excess ETHkey will be distributed at a preset rate when the excess ETHkey remaining reaches the following levels<br/>
                1. 15,000,000 - 10,000,000:  3x more tokens <br/>
                2. 10,000,000 - 5,000,000e excess remaining: 2x more tokens<br/>
                3. 5,000,000 - 0 excess remaining: 1x more tokens<br/>
                <br/>
                After the excess supply is exhausted ETHkey will be minted at the normal rate of 1 ETH : 1000 ETHKey
              </p>
            </div>
          </div>
        </div>
        <Nav.Link>
          <button
            onClick={() => {
              setAbout.setAboutToggle(false)
            }}
            className="btn-lg launch-button-bottom"
          >
            Launch App
          </button>
        </Nav.Link>
      </main>

      <footer className="text-center text-whitebg-dark justify-content-center align-items-center align-self-center">
        <div className="container p-4"></div>
        <div className="container p-3"></div>
        <div className="d-flex text-center container justify-content-center">
          <div className="d-flex-inline align-items-center align-self-center justify-content-center">
            <a className="text-white footer-link" href="#">
              Github
            </a>
            <a className="text-white footer-link" href="">
              Documentation
            </a>
            <div className="text-white justify-content-center">
              © 2021 Copyright:{" "}
              <a className="text-white justify-content-center" href="localhost">
                ethmicro.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default About
