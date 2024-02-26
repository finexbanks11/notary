// This script can be used to deploy the "Storage" contract using Web3 library.
// Please make sure to compile "./contracts/1_Storage.sol" file before running this script.
// And use Right click -> "Run" from context menu of the file to run the script. Shortcut: Ctrl+Shift+S

import { deploy } from './web3-lib'

(async () => {
  try {
    const result = await deploy('Storage', [])
    console.log(`address: ${result.address}`)
  } catch (e) {
    console.log(e.message)
  }
})()
<header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="index.html">
        <img src="./assets/img/logos/Logo ACIC-CBIT.png" alt="">
        <img src="./assets/img/logos/Chaitanya_Bharathi_Institute_of_Technology_logo.png" alt="">
      </a></h1>CryptoKey