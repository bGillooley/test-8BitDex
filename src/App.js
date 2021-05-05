import './App.css';
import logo from './logo.svg';
import Coin from './components/Coin';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="React Logo" />
        <h1>8bit Dex</h1>
      </header>
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
    </div>
  );
}

export default App;
