import React, {useState} from 'react'

import './sidebar.css'
import SidebarItem from './SidebarItem'

import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

import sidebar_items from './sidebar_routes.json'

// const sidebar_items = [
//     {
//         display_name: 'Dashboard',
//         route: '/',
//         icon: 'bx bx-category-alt'
//     },
//     {
//         display_name: 'Customers',
//         route: '/customers',
//         icon: 'bx bx-user-pin'
//     },
//     {
//         display_name: 'Products',
//         route: '/products',
//         icon: 'bx bx-package'
//     },
//     {
//         display_name: 'Orders',
//         route: '/orders',
//         icon: 'bx bx-cart'
//     },
//     {
//         display_name: 'Analytics',
//         route: '/analytics',
//         icon: 'bx bx-bar-chart-alt'
//     },
//     {
//         display_name: 'categories',
//         route: '/categories',
//         icon: 'bx bx-list-ol'
//     },
//     {
//         display_name: 'discount',
//         route: '/discount',
//         icon: 'bx bx-gift'
//     },
//     {
//         display_name: 'inventory',
//         route: '/inventory',
//         icon: 'bx bx-store-alt'
//     },
//     {
//         display_name: 'settings',
//         route: '/settings',
//         icon: 'bx bx-cog'
//     },
// ]

const Sidebar = (props) => {

    const location = props.location

    const activeItem = sidebar_items.findIndex(item => item.route === location.pathname)

    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
            </div>
            {
                sidebar_items.map((item, key) => (
                    <Link to={item.route} key={key}>
                        <SidebarItem title={item.display_name} icon={item.icon} active={key === activeItem}/>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar