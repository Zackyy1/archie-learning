import React, { useEffect, useRef, useState } from 'react'
import './Accordion.scss'
const Accordion = () => {

    const ref = useRef()
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        if (ref.current) {
            ref.current.style.height = !isOpen ? '0px' : `${ref.current.scrollHeight}px`
        }
    }, [isOpen])

    return (
        <div className='accordion'>
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'}</button>
            <div ref={ref} className="content">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod architecto culpa mollitia optio tempora qui obcaecati odit ab. Nihil corrupti, id dolores iste fuga rem neque dolorum voluptatum dolorem quae.
                </p>
            </div>
        </div>
    )
}

export default Accordion