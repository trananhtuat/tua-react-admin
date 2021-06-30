import React, {useState} from 'react'

import './table.css'

const Table = props => {

    const stripe = props.stripe ? 'stripe' : ''

    const initDataShow = props.limit ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData

    let pages = 1

    let range = []

    if (props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / props.limit)
        pages = props.bodyData.length % props.limit === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const [dataShow, setDataShow] = useState(initDataShow);

    const [currPage, setCurrPage] = useState(1);

    const selectPage = (page) => {

        const start = props.limit * (page - 1)

        const end = start + Number(props.limit)

        console.log(`start => ${start}`)

        console.log(`end => ${end}`)

        setDataShow(props.bodyData.slice(start, end))

        setCurrPage(page)
    }

    return (
        <table className={stripe}>
            {
                console.log(currPage)
            }
            <thead>
                <tr>
                    {
                        props.headData && props.renderHead ? props.headData.map((item, index) => props.renderHead(item, index)) : ''
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.bodyData && props.renderBody ? dataShow.map((item, index) => props.renderBody(item, index)) : ''
                }
            </tbody>
            {
                pages > 1 ? (
                    <tfoot>
                        <tr>
                            <td colSpan={props.headData.length}>
                                <div className="table__pagination">
                                    {
                                        range.map((item, index) => (
                                            <div className={`table__pagination-item ${currPage === index + 1 ? 'active' : ''}`} key={index} onClick={() => selectPage(index + 1)}>
                                                {item + 1}
                                            </div>
                                        ))
                                    }
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                ) : ''
            }
        </table>
    )
}

export default Table
