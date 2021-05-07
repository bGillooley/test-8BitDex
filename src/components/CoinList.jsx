import React, { Component } from 'react'
import Coin from './Coin';

export default class CoinList extends Component {
    render() {
        return (
            <section>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Ticker</th>
                  <th>Price</th>
                  {this.props.showBalance && <th>Balance</th>}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.coinData.map(value => 
                  <Coin 
                        key={value.key} 
                        handleRefresh={this.props.handleRefresh} 
                        name={value.name} 
                        ticker={value.ticker} 
                        balance={value.balance}  
                        showBalance={this.props.showBalance}
                        price={value.price}>
                    </Coin>)
                }
      
                
              </tbody>
            </table>
            </section>
        )
    }
}
