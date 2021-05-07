import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
font-size:2rem;
padding:2rem;
`;

export default class AccountBalance extends Component {

constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
}


handleClick(event) {
    event.preventDefault();
    this.props.handleBalance();
}

    render() {
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance';
        const showingBalance = this.props.showBalance ? 'Balance: '+this.props.amount : ''
        return (
            <Section>
            <div>{showingBalance}</div>
            <button onClick={this.handleClick}>{buttonText}</button>
            </Section>
        )
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}