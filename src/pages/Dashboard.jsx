import React, {useEffect, useState} from 'react'

import statusCardJson from '../assets/JsonData/status-card-data.json'

import StatusCard from '../components/status-card/StatusCard'

import Chart from 'react-apexcharts'

import {useSelector, useDispatch} from 'react-redux'

import ThemeAction from '../redux/actions/ThemeAction'

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    // const [options, setOptions] = useState(chartOptions.options);

    const options = chartOptions.options

    useEffect(() => {
        dispatch(ThemeAction.getThemeRef())
    }, [dispatch]);    

    return (
        <div>
            {
                console.log('object')
            }
            <h2 className="page-header">
                Dashboard
            </h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCardJson.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard 
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        <Chart
                            options={themeReducer.mode && themeReducer.mode.current && themeReducer.mode.current.classList.contains('theme-mode-dark') ?{...options, theme: {mode: 'dark'}} : {...options, theme: {mode: 'light'}}}
                            series={chartOptions.series}
                            type="line"
                            height="100%"
                            // width="500"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const chartOptions = {
    series: [{
        name: "Store Customers",
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    },{
        name: "Online Customers",
        data: [20, 30, 10, 20, 16, 40, 20, 51, 10]
    }],
    options: {
        colors: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        },
        theme: {
            mode: 'dark'
        }
    }
}

export default Dashboard
