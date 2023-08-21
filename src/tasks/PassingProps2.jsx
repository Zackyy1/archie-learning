import React from 'react'

const PassingProps2 = (props) => {

    const { value } = props

    return (
        <div>
            <h1>Passed value:</h1>
            <h2>{value}</h2>
        </div>
    )
}

export default PassingProps2