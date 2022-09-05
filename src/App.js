import './App.css';
import Nav from './NavBar/NavBar';
import Charts from './Charts/Charts';
import CoinsList from './CoinsList/CoinsList';
import SubNav from './SubNavBar/SubNav';
import {Routes, Route, Link} from 'react-router-dom';
import Coin from '../src/Routes/coin'

function App() {
  return (
    <>
    <div className="App">
      <Nav />
      <SubNav />
      <Routes>
      <Route exact path="/" element="">Home</Route>
      <Route path="/Portfolio" element="">Portfolio</Route>
      <Route path="/coins">Coins</Route>
      <Route path="/coin/:coinid" element={<Coin />}></Route>
    </Routes>
      <Link to="/">Home</Link>
    <Link to="/Portfolio">Portfolio</Link>
    <Link to="/coins">Coins</Link>
      <Charts />
    <div className="CoinTab">
        <CoinsList />
      </div>
    </div>
    </>
  );
}

export default App;
