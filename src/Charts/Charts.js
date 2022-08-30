import React, {Component} from 'react';
import {
    CoinCharts,
    PriceVolChart,
    VolumeChart
} from './Chart.styles'

export default class Charts extends Component{

    render(){
        return(
            <div>
                            <CoinCharts>
                <PriceVolChart>This is the prive volatility</PriceVolChart>
                <VolumeChart>This is the volume</VolumeChart>
            </CoinCharts>

            </div>
        )
    }
}