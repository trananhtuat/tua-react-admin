import React, {useEffect, useState} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import {useSelector, useDispatch} from 'react-redux'

import statusCardJson from '../assets/JsonData/status-card-data.json'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import ThemeAction from '../redux/actions/ThemeAction'

const chartOptions = {
    series: [{
        name: "Online Customers",
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    },{
        name: "Store Customers",
        data: [40, 30, 80, 40, 16, 40, 20, 51, 10]
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

const topCustomers = {
    "header": [
        "user",
        "total orders",
        "total spending"
    ],
    "body": [
        {
            "img": "sdsdsd",
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "img": "sdsdsd",
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "img": "sdsdsd",
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "img": "sdsdsd",
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "img": "sdsdsd",
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        }
    ]
}

const renderCustomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCustomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>{item.status}</td>
    </tr>
)

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
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>Top customers</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.header}
                                renderHead={(item, index) => renderCustomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCustomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/">
                                view all
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>latest orders</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                stripe
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/">
                                view all
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
