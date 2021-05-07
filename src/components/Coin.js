import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinRow = styled.tr`
background:#eee;
`;

export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick = (event) => {
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
    }

    render() {

        return (
            <CoinRow>
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>€{this.props.price}</td>
                {this.props.showBalance && <td>${this.props.balance}</td>}
                <td><button onClick={this.handleClick}>Refresh</button></td>
                </CoinRow>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}