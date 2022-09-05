import styled from "styled-components";

export const CoinTab = styled.div`
display:flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
background:${props=>props.theme.primary};
border: 0.5px solid gray;
margin:1rem;
border-radius:8px;
color:#fff;
`;

export const CoinHeader = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
justify-content:space-around;
flex-direction:row;
border: 1px solid gray;
`;

export const CoinListWrapper = styled.div`
display: grid;
justify-content:space-around;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
width: 100%;
`;
  
export const CoinScrollEnabler = styled.div`
height:30vh;
overflow:scroll;
`;

