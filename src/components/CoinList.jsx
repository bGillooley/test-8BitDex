import React from 'react'
import Coin from './Coin';

export default function CoinList(props) {
        return (
            <section>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Ticker</th>
                  <th>Price</th>
                  {props.showBalance && <th>Balance</th>}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  props.coinData.map(({id, name, ticker, price, balance}) => 
                  <Coin 
                        key={id} 
                        id={id}
                        handleRefresh={props.handleRefresh} 
                        name={name} 
                        ticker={ticker} 
                        balance={balance}  
                        showBalance={props.showBalance}
                        price={price}>
                    </Coin>)
                }
      
                
              </tbody>
            </table>
            </section>
        )

}
