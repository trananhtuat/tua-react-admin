import React, {useRef} from 'react'

import './thememenu.css'

const ThemeMenu = () => {

    const menu_ref = useRef(null)

    const setActiveMenu = () => menu_ref.current.classList.add('active')

    return (
        <div>
            <button className="dropdown__toggle" onClick={() => setActiveMenu()}>
                <i className='bx bx-palette' ></i>
            </button>
            <div ref={menu_ref} className="theme-menu">
                <h4 className="theme-menu__header">Choose theme</h4>
                <div className="theme-menu__select">

                </div>
            </div>
        </div>
    )
}

export default ThemeMenu
