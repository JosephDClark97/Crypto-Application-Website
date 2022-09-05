import React, {useState, useEffect} from 'react';
import {formatPercent} from '../utils/formatpercet';
import {convertNumber} from '../utils/convertnumber';
import {Routes, Route, Link} from 'react-router-dom';
import Coin from '../Routes/coin'

export default function CoinsList() {
    const [list, setList] = useState([])

    const getCoinData = async () => {
        try{
            const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=cryptocurrency&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C7d'
            const res = await fetch(url)
            const data = await res.json()
            setList(data)
        }catch(err){
           console.log(err)
        }
    }
    useEffect(()=> {
        getCoinData()
    }, [])

        return(
            <div>
            <div className="CoinHeader">
          <div>#</div>
          <div>Name</div>
            <div>Price</div>
            <div>1h%</div>
            <div>24h%</div>
            <div>7d%</div>
            <div>24h Volume/Market Cap</div>
            <div>Circulating/Total Supply</div>
            <div>Last 7d</div>
        </div>
        <div className="CoinScrollEnabler">  
            {list?.map((coin)=>{
               return <Link element={<Coin/>} to={`/Coin/${coin.id}`}>
               <div className="CoinListWrapper">
                <p>{coin.market_cap_rank}</p>
                <p><img width={33.54} height={33.54} alt="" src={coin.image} />{coin.name}</p>
                <p>${coin.current_price}</p>
                <p className={coin.price_change_percentage_1h_in_currency >= 0 ? "Green" : "Red"}>
                {formatPercent(coin.price_change_percentage_1h_in_currency)}</p>

                <p className={coin.price_change_percentage_24h >= 0 ? "Green" : "Red"}
                >{formatPercent(coin.price_change_percentage_24h)}</p>

                <p className={coin.price_change_percentage_7d_in_currency >= 0 ? "Green" : "Red"}
                >{formatPercent(coin.price_change_percentage_7d_in_currency)}</p>
                <p>{convertNumber(parseInt(coin.total_volume / coin.price_change_percentage_24h))} ${coin.price * coin.total_supply === NaN ? "∞" : convertNumber(parseInt(coin?.total_supply))}</p>
                <p>{convertNumber(parseInt(coin.circulating_supply))} {convertNumber(parseInt(coin.total_supply))}</p>
                <p></p>
                </div>
               </Link>
                })}
        </div>
        </div>
        )
    }