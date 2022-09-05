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
} from './NavBar.styles'



export default class Nav extends Component{
    state={
        isLoading: false,
        marketData: null,
        hasError: false,
    }

    // async await

    render(){
        return(
            <NavBarContainer>
                    <LeftNav>
                        <CoinsLink>Coins
                        </CoinsLink>
                        <PortfolioLink>Portfolio</PortfolioLink>
                    </LeftNav>
                    <RightNav>
                        <SearchedDiv>
                            <SearchIconLogo />
                            <SearchInput placeholder={"Search..."} />
                        </SearchedDiv>
                            <CurrencyDropDown>
                                <Dropdown>USD</Dropdown>
                            </CurrencyDropDown>
                            <ToggleThemeButton>Toggle</ToggleThemeButton>
                    </RightNav>
             </NavBarContainer>
            )
        
    }

}