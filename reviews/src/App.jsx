import React, { useEffect } from 'react';
import Card from './componets/Card.jsx';
import reviews from './data/data.js';
import './styles/App.css';
const App = () => {
 useEffect(()=>{
  console.log(reviews);
 },[])
  return (
    <div className='container'>
      <center><h1>Our reviews  </h1></center>
      <Card/>
    </div>
  )
}

export default App
