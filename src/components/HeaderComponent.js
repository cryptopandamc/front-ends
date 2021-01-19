import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../btc.png';


class HeaderComponent extends Component {

    render() {

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><Link className="nav-link" to="/header" >  <img src={logo} className="App-logo" alt="logo" /></Link></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/simulator">Simulator</Link></li>
                    </ul>
                </nav>
            </header>
        );

    }

}
export default withRouter(HeaderComponent)