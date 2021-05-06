import '../App.css';
import logo from '../smiley.png';

import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
            <img className="App-logo" src={logo} alt="React Logo" />
            <h1>8bit Dex</h1>
            </header>
        )
    }
}





