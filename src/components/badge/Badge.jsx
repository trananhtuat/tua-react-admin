import React from 'react'

import './badge.css'

const Badge = props => {
    return (
        <span className={`badge badge-${props.type}`}>
            {props.content}
        </span>
    )
}

export default Badge
