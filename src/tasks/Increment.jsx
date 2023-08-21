import React, { useEffect } from 'react'
import { useState } from 'react'

const Increment = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    useEffect(() => {
        console.log('I will run every time count changes')
    }, [count])

    return (
        <div>
            <h1>Increment</h1>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>

    )
}

export default Increment