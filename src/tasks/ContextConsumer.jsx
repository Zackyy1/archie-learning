import React from 'react'
import { TestContext } from './ContextTask'

const ContextConsumer = () => {
    const context = React.useContext(TestContext)

    if (!context) {
        return null
    }

    return (
        <div>
            <h1>Context Consumer Value</h1>
            <h2>Value: {context.value}</h2>
            <h2>Override:</h2>
            <input type="text" onInput={(e) => context.setValue(e.target.value)} />

        </div>
    )
}

export default ContextConsumer