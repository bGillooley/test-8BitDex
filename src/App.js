import AccountBalance from './components/AccountBalance'
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import CoinList from './components/CoinList';
import Header from './components/Header';

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    balance: 10001,
    coinData: [
      {
        key: uuidv4(),
        name: 'Bitcoin',
        ticker: 'BTC',
        price: 58000
      },
      {
        key: uuidv4(),
        name: 'Ethereum',
        ticker: 'ETH',
        price: 3700
      },
      {
        key: uuidv4(),
        name: 'TrustSwap',
        ticker: 'SWAP',
        price: 4.13
      }
    ]
  }
  this.handleRefresh = this.handleRefresh.bind(this);
}

handleRefresh(valueChangeTicker) {
  const newCoinData = this.state.coinData.map(function({key,ticker, name, price}) {
    let newPrice = price;
    if(valueChangeTicker === ticker) {
      const randomPercentage = 0.995 + Math.random() * 0.01;
      newPrice = newPrice * randomPercentage;
    }
    return {
      key,
      ticker,
      name,
      price: newPrice
    }
  });
  this.setState({coinData: newCoinData})
}

render() {
  
  return (
    <div className="App">
      <Header />
      <AccountBalance amount={this.state.balance} />
      <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />

    </div>
  );

}

}

export default App;
