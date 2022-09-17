import './App.css';
import VolumeChart from './VolChart/VolChart';
import LineChart from './LineChart/LineChart';
import CoinsList from './CoinsList/CoinsList';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Coin from './Coin/coin';
import {darkTheme, lightTheme} from '../src/NavBar/ThemeProvider';
import { ThemeProvider } from 'styled-components';
import React, {useState} from 'react';
import {Container} from './App.styles';
import NavigationList from './Navigation'


function App() {
  const [toggle, setToggle] = useState(false)
  const theme = toggle ? darkTheme : lightTheme;
  const toggleTheme = () => setToggle(!toggle);

  return (
    <>
    <ThemeProvider theme={theme}>
    <Container>
      <BrowserRouter>
      <NavigationList toggleTheme={toggleTheme} />
      <Routes>
      <Route exact path="/" element="">Home</Route>
      <Route path="/Portfolio" element="">Portfolio</Route>
      <Route path="/coin/:coinid" element={<Coin />}></Route>
    </Routes> 
      </BrowserRouter>
      <div className="OrganizeCharts">
        <div className="ChartWrapper">
        <VolumeChart />
        </div>
        <div className="ChartWrapper">
        <LineChart />
        </div>
      </div>
      <CoinsList />
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
