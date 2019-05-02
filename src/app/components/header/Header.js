import React, { Component} from 'react';
import './Header.css';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            mobileMenu: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        
        console.log(this.refs)
    }

    render(){
        return (
            <header className="header">
                <div className="menu-container">
                    <div className="logo">
                        <h1>IRONMAN</h1>
                    </div>
                    <nav ref="menu" className="menu">
                        <ul className="menu-items">
                            <li className="menu-single-item">
                                <a href="#">About</a>
                            </li>
                            <li className="menu-single-item">
                                <a href="#">Projects</a>
                            </li>
                            <li className="menu-single-item">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="menu-icon">
                        &#9776;
                    </div>
                </div>
            </header>
            );
    }
}

export default Header;