import React from 'react'

import { Link } from 'react-router-dom'

import './topnav.css'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'

import user_image from '../../assets/images/tuat.png'

import notifications from './notification.json'

import user_dropdowns from './user_menus.json'

const curr_user = {
    display_name: 'Tuat Tran',
    image: user_image
}

const TopNav = () => {
    return (
        <div className="topnav">
            <div className="topnav__search">
                <input type="text" placeholder="Search here..." />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <TopNavRightItem>
                    <Dropdown customToggle={() => renderUserInfo(curr_user)} contentData={user_dropdowns} renderItems={(item, index) => renderUserMenu(item, index)}/>
                </TopNavRightItem>
                <TopNavRightItem>
                    <Dropdown icon='bx bx-bell' badge='12' contentData={notifications} renderItems={(item, index) => renderNotificationItem(item, index)} renderFooter={() => <Link to='/'>View all</Link>}/>
                </TopNavRightItem>
                <TopNavRightItem>
                    <ThemeMenu/>
                </TopNavRightItem>
            </div>
        </div>
    )
}

const TopNavRightItem = (props) => {
    return (
        <div className="topnav__right-item">
            {props.children}
        </div>
    )
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserInfo = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

export default TopNav
