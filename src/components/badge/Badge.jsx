import React from 'react'

import './badge.css'

const badgeStyle = {
    "danger": "badge-danger",
    "primary": "badge-primary",
    "success": "badge-success",
    "warning": "badge-warning"
}

const Badge = props => {
    return (
        <span className={`badge ${badgeStyle[props.type]}`}>
            {props.content}
        </span>
    )
}

export default Badge
