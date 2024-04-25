import React, { useEffect, useRef } from 'react';
import mountains from '../assets/mountains.png'
import classNames from 'classnames';
import './card.scss';


const Card = () => {

    const imgRef = useRef(null)
    const cardRef = useRef(null)

    const handleMouseOver = (e) => {
        const mousePos = e.offsetX
        const center = imgRef.current.clientWidth / 2
        console.log(mousePos <= center ? 'left' : 'right')


        
    }

    useEffect(() => {
        imgRef.current.addEventListener('mousemove', handleMouseOver)


    }, [])


    return (+
        <div className="card" ref={cardRef}>
            <div className='card__content-wrapper'>

                <h1 className={'card__title'}>Hero Title</h1>
                <p className={'card__content'}>Brain pickles</p>
            </div>
            <img className={'card__image'} alt="" src={mountains} ref={imgRef} />
        </div>
    );
};

export default Card;
