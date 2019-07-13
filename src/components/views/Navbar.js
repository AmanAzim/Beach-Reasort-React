import React, {Component} from 'react';
import { FaBars } from "react-icons/fa"//https://react-icons.netlify.com/#/
import logo from '../../images/logo.svg'
import {Link} from 'react-router-dom'
import '../../App.css'

class Navbar extends Component {
    state={
        isOpen:false
    }

    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen});
    };

    render() {
        return (
            <nav className="navbar">
               <div className="nav-center">
                   <div className="nav-header">
                        <img src={logo} alt="Beach Resort"/>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaBars className="nav-icon"/>
                        </button>
                   </div>
                   <ul className={this.state.isOpen? "nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                   </ul>
               </div>
            </nav>
        );
    }
}

export default Navbar;
