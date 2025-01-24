
---

### **React Code Files**

#### **`src/api.js`**
This file contains all the functions used to make API calls to the Memescan API.

```javascript
import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Replace with the Memescan API URL if deployed

// Function to analyze a contract
export const analyzeContract = async (contractAddress) => {
  try {
    const response = await axios.get(`${API_URL}/contract_analysis/`, {
      params: { contract_address: contractAddress },
    });
    return response.data;
  } catch (error) {
    console.error('Error analyzing contract:', error);
    throw error;
  }
};

// Function to detect bundle trading activities
export const detectBundles = async (transactionData) => {
  try {
    const response = await axios.get(`${API_URL}/bundle_detection/`, {
      params: { transaction_data: transactionData },
    });
    return response.data;
  } catch (error) {
    console.error('Error detecting bundles:', error);
    throw error;
  }
};

// Function to analyze trends
export const analyzeTrends = async (marketData) => {
  try {
    const response = await axios.get(`${API_URL}/trend_analysis/`, {
      params: { market_data: marketData },
    });
    return response.data;
  } catch (error) {
    console.error('Error analyzing trends:', error);
    throw error;
  }
};

// Function to monitor a wallet
export const monitorWallet = async (walletAddress) => {
  try {
    const response = await axios.get(`${API_URL}/real_time_monitoring/`, {
      params: { wallet_address: walletAddress },
    });
    return response.data;
  } catch (error) {
    console.error('Error monitoring wallet:', error);
    throw error;
  }
};
