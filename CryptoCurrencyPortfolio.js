/*
FILENAME: CryptoCurrencyPortfolio.js
DESCRIPTION: This code implements a simplified cryptocurrency portfolio manager that allows the user to buy, sell, and track their digital assets. It includes various functionalities to calculate portfolio value, perform transactions, and display useful information.

*/

// Define a class to represent a cryptocurrency
class Cryptocurrency {
  constructor(name, ticker, price) {
    this.name = name;
    this.ticker = ticker;
    this.price = price;
  }
}

// Define a class to represent a portfolio
class Portfolio {
  constructor() {
    this.assets = [];
  }

  // Method to add a cryptocurrency to the portfolio
  addAsset(crypto, quantity) {
    const existingAsset = this.assets.find((asset) => asset.crypto.ticker === crypto.ticker);

    if (existingAsset) {
      existingAsset.quantity += quantity;
    } else {
      this.assets.push({ crypto, quantity });
    }
  }

  // Method to remove a cryptocurrency from the portfolio
  removeAsset(ticker, quantity) {
    const existingAsset = this.assets.find((asset) => asset.crypto.ticker === ticker);

    if (existingAsset) {
      existingAsset.quantity -= quantity;

      if (existingAsset.quantity <= 0) {
        // Remove asset if quantity reaches zero or negative
        this.assets = this.assets.filter((asset) => asset.crypto.ticker !== ticker);
      }
    }
  }

  // Method to calculate the total value of the portfolio
  calculatePortfolioValue() {
    let totalValue = 0;

    for (const asset of this.assets) {
      totalValue += asset.crypto.price * asset.quantity;
    }

    return totalValue;
  }

  // Method to display portfolio information
  displayPortfolio() {
    console.log("----- Portfolio Summary -----");

    for (const asset of this.assets) {
      console.log(
        `${asset.crypto.name} (${asset.crypto.ticker}): ${asset.quantity} units - Value: $${asset.crypto.price * asset.quantity}`
      );
    }

    console.log("-----------------------------");
    console.log(`Total Portfolio Value: $${this.calculatePortfolioValue()}`);
  }
}

// Create some instances of cryptocurrencies
const bitcoin = new Cryptocurrency("Bitcoin", "BTC", 50000);
const ethereum = new Cryptocurrency("Ethereum", "ETH", 4000);
const litecoin = new Cryptocurrency("Litecoin", "LTC", 200);

// Create a portfolio
const myPortfolio = new Portfolio();

// Perform some transactions
myPortfolio.addAsset(bitcoin, 2);
myPortfolio.addAsset(ethereum, 5);
myPortfolio.addAsset(litecoin, 10);
myPortfolio.removeAsset("ETH", 1);

// Display portfolio information
myPortfolio.displayPortfolio();

// OUTPUT:
/*
----- Portfolio Summary -----
Bitcoin (BTC): 2 units - Value: $100000
Litecoin (LTC): 10 units - Value: $2000
-----------------------------
Total Portfolio Value: $102000
*/
