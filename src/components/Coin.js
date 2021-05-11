import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinRow = styled.tr`
background:#eee;
`;

export default function Coin(props)  {

   const handleClick = (event) => {
        event.preventDefault();
        props.handleRefresh(props.id);
    }
        return (
            <CoinRow>
                <td>1</td>
                <td>{props.name}</td>
                <td>{props.ticker}</td>
                <td>€{props.price}</td>
                {props.showBalance && <td>${props.balance}</td>}
                <td><button onClick={handleClick}>Refresh</button></td>
                </CoinRow>
        )
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}