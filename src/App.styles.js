import styled from 'styled-components'

export const Container = styled.div`
display:flex;
height:100vh;
justify-content:center;
align-items:center;
flex-direction:column;
text-align: center;
font-family:Poppins;
color:#fff;
background:${props=>props.theme.primary};
`;