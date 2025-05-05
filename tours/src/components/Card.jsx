import React, { useState } from 'react';
import '../style/Card.css';
const Card = ({val}) => {

    const [showMore , setShowMore] = useState(true);

    const changeShowMore = ()=>{
        setShowMore(prev => !prev)
    }

    
    
  return (
    <>
    <img src={val.image} alt={val.name} className='card-image' />
        <div className='card-details'>
            <div className='card-name-price'>
                <h3 className='card-name'>{val.name}</h3>
                <span className='card-price'>{val.price}</span>
            </div>
            {
                showMore ? <p className='card-info'>{val.info.substring(0,250)} <button className='show-more' onClick={changeShowMore} >show more </button></p> : <p className='card-info'>{val.info}  <button className='show-more' onClick={changeShowMore}>show less</button> </p>
            }
        </div>
    </>
    
    )
}

export default Card;