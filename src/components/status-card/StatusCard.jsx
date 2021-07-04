import React from 'react'

import './statuscard.css'

const StatusCard = props => {
    return (
        <div className='status-card'>
            <div className="status-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="status-card__info">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default StatusCard
