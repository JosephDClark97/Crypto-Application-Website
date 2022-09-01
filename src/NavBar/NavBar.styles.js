import styled from "styled-components";

export const NavBarContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
justify-content: center;
flex: 1;
border-radius:5px;
border:0.5px solid #707070;
box-shadow:3px 3px 3px #707070;
background-color: #1F2128;
color:#fff;
`;

export const LeftNav = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const CoinsLink = styled.div``;

export const PortfolioLink = styled.div``;

export const RightNav = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const SearchedDiv = styled.div`
background-color: ${(props) => props.theme.tertiary};
width: 380px;
height: 40px;
border-radius: 10px;
display: flex;
align-items: center;
padding: 6px;
margin-right: 25px;
color: black;
`;

export const SearchIconLogo = styled.div``;

export const SearchInput = styled.input`
background: transparent;
border: none;
outline: none;
padding: 8px;
color: ${(props) => props.theme.mainFont};
font-size: 17px;
::placeholder {
  color: ${(props) => props.theme.mainFont};
}
`;

export const CurrencyDropDown = styled.div``;

export const Dropdown = styled.div`
margin-right: 25px;
z-index: 1;
`;

export const ToggleThemeButton = styled.div`
display: flex;
algin-items: center;
justify-content: center;
background-color: ${(props) => props.theme.tertiary};
padding: 15px 10px;
border-radius: 10px;
margin-right: 25px;
cursor: pointer;
`;