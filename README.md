<h1 align="center">
  LendTez
</h1>



<div align="center">

[![license](https://img.shields.io/github/license/dec0dOS/amazing-github-template.svg?style=flat-square)](LICENSE)
![version](https://img.shields.io/badge/build%20version-1.0-blue)

</div>


# LendTez
LendTez is an open-source, decentralised, Peer-to-Peer lending and borrowing protocol with no commissions and no liquidation where users can participate as borrowers or lenders. Borrowers can borrow XTZ and Tezos-based tokens built with the FA token standards (FA1.2 and FA2), while lenders provide liquidity.


## What is Peer-to-Peer crypto lending?

Peer-to-peer or P2P crypto lending is a process that lets a user lend cryptocurrencies directly to a borrower who wants to take out a crypto-backed loan.

P2P crypto lending minimizes the role of the third party (even the platform itself) in the lending and borrowing processes. Rather than funding the loan itself, with the use of P2P platforms, users can:

* Set rates and terms of the loan.
* Ease money transfers between lender and borrower.
* Ask the borrower to pay down or add more collateral to their loan if the value drops significantly.
* Collaborate with a custodian to hold the crypto assets while the loan is in repayment.
* Offer some kind of insurance to protect the collateral in repayment.

On a P2P platform, lenders choose the rates, terms and amount they want to fund. That allows for more control over the investment than parking that money in an account that offers a flat APY.

## Benefits of Peer-to-Peer lending

* Increased scalability. There are millions of people all over the world with no access to a bank account. At the same time, traditional financial institutions have dramatically lost the trust of consumers. 
* Faster and more efficient process. The automatic process of matching that takes place makes the whole task of lending very easy and fast. One doesn’t need to wait much as participants from all over the world are present on the platform, increasing the chances of investment and loan. Also, transactions done on the blockchain platform are really quick, especially when compared to traditional financial institutions.
* Reduced cost: Since the need for a middleman is eradicated, their charges also go away. Also, one doesn’t need to pay sky-rocketing interest rates as they are already fixed by smart contracts based on the risk profile of the borrower.
* Loan tokenization: The transformation of assets into units that store value is called loan tokenization. It is a pertinent advantage offered by blockchain platforms. Participants can exchange anything, in any currency on a blockchain platform- transparently and securely.
* Identity protection: Blockchain platforms don’t require you to enter bank details or credit card numbers, protecting your fiat money. Digital money doesn’t ask for details other than the amount of the transaction.
* Trustless. There is no need to trust the counterparty. When the borrower places the loan request on OPD, the counterparty, OPD or any other party cannot manipulate, stop and prevent the loan request once the loan is deployed. Instead of the need to trust the counterparty, decentralisation removes the necessity to trust your provider and your counterparty.

Peer-to-peer lending platforms presage a more inclusive and accessible financial services system.


# LendTez 1.0
This version allows users to use XTZ and Tezos-based tokens built with the FA token standards (FA1.2 and FA2).


1. `Log in` (Connect wallet) Enter the system with your wallet. 
2. `My Deals.` View and repay existing deals - both borrowings and lendings
3. `Borrow.` Create a borrow request by providing the necessary information, like the choice of a token you want to borrow ( = the reward token), the number of tokens to borrow, the number and type of tokens as collateral and the reward, time (loan term). There is an optional field *"Deadline"* for liquidation of the request if it wasn't accepted by a creditor.
4. `Lend.` View borrowing requests from other users and lend requested tokens.
5. `Info.` Information about the service done in a simple-to-read F.A.Q style 

# How it works for lenders

* Enter the service with your Tezos wallet by clicking the **Connect wallet** button.
* Choose your preferred wallet from the list.
* Approve the permission request from the wallet. 
* Visit the **Lend** section from the platform’s dashboard for loans to be funded. Select a loan to fund. Check if the loan request reward and collateral are good for you.
* Make sure the necessary crypto asset is in the wallet.
* Click on the **Supply** button from the pop-up you see after clicking on a loan row.
* Approve the permission request from the wallet.
* Collect the reward together with the asset when the loan is returned. If the borrower fails to repay the loan, you can seize the borrower’s collateral to make up for your losses.
* **Important!** If the borrower fails to repay the loan, the system will not send you the collateral. You will have to collect the collateral manually! 

# How it works for borrowers

* Enter the service with your Tezos wallet by clicking the **Connect wallet** button.
* Choose your preferred wallet from the list.
* Approve the permission request from the wallet. 
* Visit the **Borrow** section from the platform’s dashboard to see your active loan requests.
* **Create a new loan request** by clicking the **+New loan** button.
* **The Borrow Pop-up**:

**LOAN**
1. `Asset` Choose an asset to borrow from the drop-down list (select token).
2. `Amount` Enter the number of tokens you want to borrow.
3. `Loan term` Choose the time of your request - how long you want to keep the asset. You can pay it back before the time runs out. If you don't pay it in time, the lender will have the opportunity to seize your collateral.  
4. `Reward` Reward token type is chosen automatically with the Loan. Set the reward amount manually. 
**The reward is given to a lender in recognition of their provided liquidity. The higher the reward, the more attractive the request. The Greater the Effort, the Sweeter the Reward**

**COLLATERAL**
1. `Asset` Choose an asset to be used as a collateral from the drop-down list (select token).
2. `Amount` Set the amount of chosen collateral assets a lender will get if the loan is not paid in time. **Same as the reward affects the attractiveness of your request.**

**OPTIONAL**
1. `Request valid till` You can set the timing for that request to be active until someone fills it up.

* Press the **Send request** button.
* Approve the new loan request from the wallet.
* You will see the loan request from the **Borrow** section. A lender will see it from the **Lend** section as a loan to supply


## Glossary
| Term | Description |
| --- | --- |
| APR | Annual Percentage Rate. The rate to earn on an account over a year and it includes compound interest. |
| FA1.2 | Refers to an [ERC20](https://eips.ethereum.org/EIPS/eip-20)-like fungible token standard (TZIP-7) for Tezos. At its core, FA1.2 contains a ledger which maps identities to token balances, providing a standard API for token transfer operations, as well as providing approval to external contracts (e.g. an auction) or accounts to transfer a user's tokens. The FA1.2 specification is described in details in [TZIP-7](https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-7/tzip-7.md). |
| FA2 | The newer token standard is based on a proposal for a unified token contract interface. It addresses two aspects of importance to token standards: Token type and permission standardization. It was meant to help support different token types. While FA1.2 requires multiple smart contracts for multiple tokens, FA2 allows single- and multi-token smart contracts for a variety of tokens. Thus, FA2 maintains the functionalities from the FA1.2 standard. At the same time, the creation of NFTs was taken into consideration, i.e. a greater potential for tokenization was added with the introduction of the FA2 standard. FA2 is agnostic to the token type and therefore, applicable to different types.
| P2P | Peer-to-Peer. Relating to, using, or being a network by which computers operated by individuals can share information and resources directly without relying on a dedicated central server. |
| P2P Lending | Peer-to-peer lending networks consist of two or more computers that interact to communicate, share data, and provide lending services without the need for a central server. The P2P lending networks of yesterday are beginning to integrate with blockchain-based smart contracts, contributing to the evolution of decentralized finance (DeFi). The resulting networks facilitate trustless transactions that lower costs and save time by removing intermediaries. Peer-to-peer lending has become a significant subset of the DeFi ecosystem, and its growth is accelerating. |
| Smart Contract | A self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code. The code and the agreements contained therein exist across a distributed, decentralized blockchain network. |
| XTZ | The native cryptocurrency for the Tezos blockchain. Also known as Tez or  tezzie. |

---

## License
This project is licensed under the MIT license.
