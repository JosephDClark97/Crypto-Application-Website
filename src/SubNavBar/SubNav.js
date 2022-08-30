import React, {Component} from 'react';
import {SubNavBarContainer, SubNavWrapper} from './SubNav.styles'

export default class SubNav extends Component{
    render(){
        return(
            <SubNavWrapper>
            <SubNavBarContainer>
                This is the SubNav
            </SubNavBarContainer>
            </SubNavWrapper>
        )
    }
}