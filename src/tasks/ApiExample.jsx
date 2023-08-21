import React, { useState } from 'react'

const ApiExample = () => {
    const [response, setResponse] = useState('')
    const sendApiRequest = async () => {
        return await fetch('https://random-word-api.herokuapp.com/word?length=5&lang=en').then(response => response.json()).then(data => {
            console.log(data)
            setResponse(data[0])
            return data
        }
        )
    }

    return (
        <div>
            <h1>Api Example</h1>
            <div>Api response:</div>
            <h2>{response}</h2>
            <button onClick={() => sendApiRequest()}>Send API request</button>
        </div>
    )
}

export default ApiExample