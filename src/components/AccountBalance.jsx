import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
font-size:2rem;
padding:2rem;
`;

export default function AccountBalance(props) {



const handleClick = (e) => {
    e.preventDefault();
    props.handleBalance();
};
 
        const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
        const showingBalance = props.showBalance ? 'Balance: '+props.amount : ''
        return (
            <Section>
            <div>{showingBalance}</div>
            <button onClick={handleClick}>{buttonText}</button>
            </Section>
        )
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}