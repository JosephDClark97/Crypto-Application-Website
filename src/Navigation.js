import Nav from './NavBar/NavBar';
import SubNav from './SubNavBar/SubNav';
import {Link} from 'react-router-dom';
import React from 'react';

export default function NavigationList(){
    return(
        <div>
            <Nav><Link to="/">
            Home
            </Link>
            </Nav>
            <SubNav/>
        </div>
    )
};