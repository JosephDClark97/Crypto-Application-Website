import React, {Component} from 'react';
import axios from 'axios';

export default class CoinsList extends Component{
    state={
        list:[]
    }

    async CoinList(){
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=cryptocurrency&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C7d'
        axios.get(url)
        .then((res)=> console.log((this.setState({list: res.data}))))
        .catch((err)=> console.log(err))
            }

    componentDidMount(){
        this.CoinList()
    } 
    render(){
        return(
            <div>
                {this.state.list.map((coin)=>{
               return <p>{coin.name}</p> 
                })}
            </div>
        )
    }
}