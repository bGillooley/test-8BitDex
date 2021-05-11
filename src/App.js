import AccountBalance from './components/AccountBalance'
import React, {useEffect, useState} from 'react';
//import { v4 as uuidv4 } from 'uuid';
import CoinList from './components/CoinList';
import Header from './components/Header';
import axios from 'axios';

const COIN_COUNT = 10;

export default function App(props) {


const [balance, setBalance] = useState(10001);
const [showBalance, setShowBalance] = useState(true);
const [coinData, setCoinData] = useState([])

const componentDidMount = async () => {
  const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    //Retrieve the prices...
    const tickerURL = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerURL + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response) {
     const coin = response.data;
      return {
        id: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: parseFloat(Number(coin.quotes.USD.price).toFixed(2))
      };
    });
    setCoinData(coinPriceData);
};

useEffect(function() {
  if(coinData === 0) {
    //component did mount
    componentDidMount();
  }
});


  
const handleBalance = () => {
 setShowBalance(oldValue => !oldValue);
   
}

const handleRefresh = async (valueChangeTicker) => {

  const response = await axios.get('https://api.coinpaprika.com/v1/tickers/' + valueChangeTicker);
  const newCoinData = coinData.map(function({id,ticker, name, price, balance}) {
    let newPrice = price;
    if(valueChangeTicker === id) {
      
      newPrice = response.data.quotes.USD.price;
    }
    return {
      id,
      ticker,
      name,
      balance,
      price: parseFloat(Number(newPrice).toFixed(2))
    }
  });



  setCoinData(newCoinData);
}


  
  return (
    <div className="App">
      <Header />
      <AccountBalance amount={balance} showBalance={showBalance} handleBalance={handleBalance} />
      <CoinList coinData={coinData} showBalance = {showBalance} handleRefresh={handleRefresh} />

    </div>
  );


}

