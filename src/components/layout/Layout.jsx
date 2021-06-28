import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Routes from '../Routes'
import TopNav from '../topnav/TopNav'

import { BrowserRouter, Route } from 'react-router-dom'

import './layout.css'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <div className="layout">
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                            <Routes/>
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
        
    )
}

export default Layout