import { ethers } from "ethers";
import contract_abi from "../abis/dbp_abi.json"

const getContractInstance = () => {
    // Replace "contractAddress" with the address of your deployed smart contract
    const contractAddress = "0xEA484E73dFbf26C9df58eF1003D1EFc523D7bdB4";
    // Replace "contractABI" with the ABI of your smart contract
    const contractABI = contract_abi;
  
    console.log("getContractInstance Fetch...");
    // Check if the "window" object is available (in the browser environment)
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      // Create a new ethers.js contract instance
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      return contract;
    } else {
      console.error("Ethers.js: Web3 not available in this environment.");
      return null;
    }
  };
  
  export default getContractInstance;