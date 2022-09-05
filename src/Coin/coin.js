import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

export default function Coins() {
    const [coin, setCoin] = useState({})
    const params = useParams()
    const getClickedCoin = async () => {
        try{
            const url = `https://api.coingecko.com/api/v3/coins/${params.coinid}`;
            const res = await fetch(url)
            const data = await res.json()
            setCoin(data)
        }catch(err){
           console.log(err)
        }
    }
    useEffect(()=> {
        getClickedCoin()
    }, [])

  return (
    <div>
        {coin.id}
    </div>
  )
}
