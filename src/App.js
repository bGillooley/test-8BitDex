import './App.css';
import logo from './logo.svg';
import Coin from './components/Coin';
import AccountBalance from './components/AccountBalance'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="React Logo" />
        <h1>8bit Dex</h1>
      </header>
      <AccountBalance amount={10000} />
      <section>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={9999.99} />
          <Coin name="Ethereum" ticker="ETH" price={230} />
          <Coin name="Polkastarter" ticker="POLK" price={500} />
          
        </tbody>
      </table>
      </section>
    </div>
  );
}

export default App;
