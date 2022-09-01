import React, {Component} from 'react';
import axios from 'axios';

export default class CoinsList extends Component{
    state={
        list:[]
    }

    async CoinList(){
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=cryptocurrency&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C7d'
        axios.get(url)
        .then((res)=> this.setState({list: res.data}))
        .catch((err)=> console.log(err))
            }

    componentDidMount(){
        this.CoinList()
    } 
    render(){
        return(
            <div>
            <div className="CoinHeader">
          <div>#</div>
          <div>Name</div>
            <div>Price</div>
        </div>
        <div className="CoinScrollEnabler">  
            {this.state.list.map((coin)=>{
               return <div className="CoinListWrapper">
                <p>{coin.market_cap_rank}</p>
                <p>{coin.name}</p>
                <p>{coin.current_price}</p>
                </div>
                })}
        </div>
            </div>
        )
    }
}