import Nav from './NavBar/NavBar';
import SubNav from './SubNavBar/SubNav';
import {Link} from 'react-router-dom';
import React from 'react';

export default function NavigationList(props){
    console.log(props)
    return(
        <div>
            <Nav theme={props.toggleTheme}/>
            <SubNav/>
        </div>
    )
};