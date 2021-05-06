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
                        price={value.price}>
                    </Coin>)
                }
      
                
              </tbody>
            </table>
            </section>
        )
    }
}
