import React, {useEffect, useRef} from 'react'
import Sidebar from '../sidebar/Sidebar'
import Routes from '../Routes'
import TopNav from '../topnav/TopNav'

import { BrowserRouter, Route } from 'react-router-dom'

import {useDispatch} from 'react-redux'

import ThemeAction from '../../redux/actions/ThemeAction'

import './layout.css'

const Layout = () => {

    const dispatch = useDispatch()

    const layoutRef = useRef(null)

    // const currMode = 'theme-mode-dark'

    useEffect(() => {
        dispatch(ThemeAction.setThemeRef(layoutRef))
        // dispatch(ThemeAction.getThemeMode())
        // console.log(themeReducer.mode)
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <div ref={layoutRef} className="layout">
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