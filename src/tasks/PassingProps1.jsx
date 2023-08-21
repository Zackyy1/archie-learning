import React, { useState } from 'react'
import PassingProps2 from './PassingProps2'

const PassingProps1 = () => {

    const [value, setValue] = useState('')

    return (
        <div>
            <h1>Passing Props</h1>
            <label>What prop value to pass:</label>
            <input type="text" onInput={(e) => setValue(e.target.value)} />

            <PassingProps2 value={value} />
        </div>
    )
}

export default PassingProps1