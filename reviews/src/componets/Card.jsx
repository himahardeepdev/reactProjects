import React, { useState } from 'react';
import { FcNext, FcPrevious } from "react-icons/fc";
import reviews from '../data/data.js';
import '../styles/Card.css';
const Card = () => {

  const [count , setCount] = useState(0);
  const [singlePerson , setSinglePerson] = useState(reviews[0]);

  const checkValue = (num)=>{
    if(reviews.length <= num ){
      num = 0;
    }else if(num <0){
      num = reviews.length -1;
    }
    return num;
  }

  const nextReview = ()=>{
    const val = checkValue(count+1);
    setSinglePerson(reviews[val]);
    setCount(val);
  }

  const previousReview =()=>{
    const val = checkValue(count -1);
    setSinglePerson(reviews[val]);
    setCount(val);
  }

  const randomReview =()=>{
    const val = checkValue(Math.floor(Math.random()*reviews.length));
    setSinglePerson(reviews[val]);
    setCount(val);
  }

  

  return (
    <div className='card'>
        <img src={singlePerson.image} alt={singlePerson.id} className='card-image' />
        <br />
        <h3 className='name'>{singlePerson.name.toUpperCase()}</h3>
        <h6 className='job'>{singlePerson.job.toUpperCase()}</h6>
        <p className='text'>{singlePerson.text}</p>
        <FcPrevious onClick={previousReview} className='arrow' />
        <FcNext onClick={nextReview}  className='arrow' />
        <br />
        <button onClick={randomReview} className='random-btn' >Random</button>
     


    </div>
  )
}

export default Card;
