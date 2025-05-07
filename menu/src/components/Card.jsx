import React from 'react';
import '../style/Card.css';

const Card = ({ item }) => {
    const {  title, price, img, desc } = item;
    const image = img.substring(2); // assuming image paths start with './'

  return (
    <div className='card'>
        <div className='image-div'>
            <img src={image} alt={title} className='image' />
        </div>

        <div className='card-title-price-info' >
            <div className='card-title-price'>
                <h3 className='card-title'>{title}</h3>
                <h5 className='card-price'>{price}</h5>
            </div>
            <div><p>{desc}</p></div>
        </div>

    </div>
  );
};

export default Card;
