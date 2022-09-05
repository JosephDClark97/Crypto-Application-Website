import './App.css';
import Nav from './NavBar/NavBar';
import Charts from './Charts/Charts';
import CoinsList from './CoinsList/CoinsList';
import SubNav from './SubNavBar/SubNav';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Coin from './Coin/coin';
import {darkTheme, lightTheme} from '../src/NavBar/ThemeProvider';
import { ThemeProvider } from 'styled-components';
import React, {useState} from 'react';
import {Container} from './App.styles';


function App() {
  const [toggle, setToggle] = useState(false)
  const theme = toggle ? darkTheme : lightTheme;
  const toggleTheme = () => setToggle(!toggle);

  return (
    <>
    <ThemeProvider theme={theme}>
    <Container>
      <BrowserRouter>
      <Nav themeToggle={toggleTheme} />
      <Link to="/">Home</Link>
      <SubNav />
      <Routes>
      <Route exact path="/" element="">Home
      </Route>
      <Route path="/Portfolio" element="">Portfolio</Route>
      <Route path="/coins">Coins</Route>
      <Route path="/coin/:coinid" element={<Coin />}></Route>
    </Routes>
      <Charts />
    <div className="CoinTab">
        <CoinsList />
      </div>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
