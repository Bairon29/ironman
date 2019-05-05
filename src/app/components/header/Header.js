import React, { Component} from 'react';
import './Header.css';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            mobileMenu: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.resize = this.resize.bind(this)
    }

    toggleMenu(){
        var mobileMenu = !this.state.mobileMenu;
        this.refs['menu'].style.display = mobileMenu ? 'flex' : 'none';
        this.setState({
            mobileMenu: mobileMenu
        })
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize);
    }
    
    resize() {
        if(window.innerWidth > 700){
            this.refs['menu'].style.display = 'flex';
        } else {
            this.refs['menu'].style.display = 'none';
        }
        this.setState({
            mobileMenu: false
        })
    }

    render(){

        return (
            <header className="header">
                <div className="menu-container">
                    <div className="logo">
                        <h1>IRON MAN</h1>
                    </div>
                    <nav ref="menu" className="menu" 
                        // style={{display: this.state.mobileMenu  ? 'flex' : 'none'}}
                        >
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
                    {/* <div className="menu-icon">
                        &#9776;
                    </div> */}
                    <div className="menu-icon" onClick={this.toggleMenu} >
                        <hr className="menu-icon-bar1" />
                        <hr className="menu-icon-bar2" />
                        <hr className="menu-icon-bar3" />
                    </div>
                </div>
            </header>
            );
    }
}

export default Header;