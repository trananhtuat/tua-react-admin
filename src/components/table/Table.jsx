import React from 'react'

import './table.css'

const Table = props => {

    const stripe = props.stripe ? 'stripe' : ''

    return (
        <table className={stripe}>
            <thead>
                <tr>
                    {
                        props.headData && props.renderHead ? props.headData.map((item, index) => props.renderHead(item, index)) : ''
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.bodyData && props.renderBody ? props.bodyData.map((item, index) => props.renderBody(item, index)) : ''
                }
            </tbody>
        </table>
    )
}

export default Table
