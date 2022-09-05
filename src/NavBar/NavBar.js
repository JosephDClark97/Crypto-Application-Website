import React, {Component} from 'react';
import  {NavBarContainer,
    LeftNav,
    CoinsLink,
    PortfolioLink,
    RightNav,
    SearchedDiv,
    SearchIconLogo,
    SearchInput,
    CurrencyDropDown,
    Dropdown,
    ToggleThemeButton
} from './NavBar.styles';
import {Link} from 'react-router-dom';



export default class Nav extends Component{
    state={
        isLoading: false,
        marketData: null,
        hasError: false,
    }


    render(){
        return(
            <NavBarContainer>
                    <LeftNav>
                        <CoinsLink>
                        <Link to="/coins">Coins</Link>
                        </CoinsLink>
                        <PortfolioLink><Link to="/Portfolio">Portfolio</Link></PortfolioLink>
                    </LeftNav>
                    <RightNav>
                        <SearchedDiv>
                            <SearchIconLogo />
                            <SearchInput placeholder={"Search..."} />
                        </SearchedDiv>
                            <CurrencyDropDown>
                                <Dropdown>USD</Dropdown>
                            </CurrencyDropDown>
                            <ToggleThemeButton onClick={()=>this.props.themeToggle()}
                            >Toggle</ToggleThemeButton>
                    </RightNav>
             </NavBarContainer>
            )
        
    }

}