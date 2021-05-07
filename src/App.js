import AccountBalance from './components/AccountBalance'
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import CoinList from './components/CoinList';
import Header from './components/Header';

class App extends React.Component {
  state = {
    balance: 10001,
    showBalance: true,
    coinData: [
      {
        key: uuidv4(),
        name: 'Bitcoin',
        balance: 1.5,
        ticker: 'BTC',
        price: 58000
      },
      {
        key: uuidv4(),
        name: 'Ethereum',
        balance: 20.4,
        ticker: 'ETH',
        price: 3700
      },
      {
        key: uuidv4(),
        name: 'TrustSwap',
        balance: 5236,
        ticker: 'SWAP',
        price: 4.13
      }
    ]
  }

handleBalance = () => {
    let balanceState = this.state.showBalance;
    console.log(balanceState);
    if(balanceState === true) {
      this.setState({showBalance: false});  
    } else {
      this.setState({showBalance: true});  
    };
   
}

handleRefresh = (valueChangeTicker) => {
  const newCoinData = this.state.coinData.map(function({key,ticker, name, price, balance}) {
    let newPrice = price;
    if(valueChangeTicker === ticker) {
      const randomPercentage = 0.995 + Math.random() * 0.01;
      newPrice = newPrice * randomPercentage;
    }
    return {
      key,
      ticker,
      name,
      balance,
      price: newPrice
    }
  });
  this.setState({coinData: newCoinData})
}

render() {
  
  return (
    <div className="App">
      <Header />
      <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} handleBalance={this.handleBalance} />
      <CoinList coinData={this.state.coinData} showBalance = {this.state.showBalance} handleRefresh={this.handleRefresh} />

    </div>
  );

}

}

export default App;
