import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FaBars, FaTimes} from 'react-icons/fa';
import { MdFingerprint} from 'react-icons/md';

function Navbar() {

    const [click , setClick] = useState(false);

    const handleClick = () => setClick(!click)

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to = './' className="navbar-logo">
                        <MdFingerprint className = 'navbar-icon' />
                        LAVISH
                    </Link>
                    <div className="menu-icon" onClick = {handleClick} >
                        { click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                       <li className="nav-item">
                           <Link to = '/' className="nav-links">
                               Home
                           </Link>
                       </li>
                       <li className="nav-item">
                           <Link to = '/services' className="nav-links">
                               Services
                           </Link>
                       </li>
                       <li className="nav-item">
                           <Link to = '/products' className="nav-links">
                               Products
                           </Link>
                       </li>
                       <li className="nav-btn">
                           {}
                       </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
