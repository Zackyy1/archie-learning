import React, { useEffect } from 'react'

const UseEffectTask = () => {

    const changeBgColor = (e) => {
        if (e.key !== 'r') return
        document.body.style.backgroundColor = 'red'
        setTimeout(() => {
            document.body.style.backgroundColor = 'white'
        }, 500)
    }

    useEffect(() => {
        document.addEventListener('keydown', changeBgColor)

        return (() => {
            document.removeEventListener('keydown', changeBgColor)
        })
    }, [])

    useEffect(() => {
        document.body.prepend('I will run once')
    }, [])

    return null
}

export default UseEffectTask