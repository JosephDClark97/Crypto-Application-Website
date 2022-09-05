import styled from "styled-components";

export const SubNavBarContainer = styled.div`
display:flex;
flex-direction:column;
width:800px;
height:25px;
border:1px solid #707070;
background-color: ${props=>props.theme.primary};
color:${props=>props.theme.secondary};
`;

export const SubNavWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:16.5px;
width:100%;
background-color:  ${props=>props.theme.primary};
`