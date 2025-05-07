import React, { useState } from 'react';
import Card from './components/Card.jsx';
import menu from './data/data.js';
import './style/App.css';
const App = () => {
  const [data , setData] = useState(menu);



  const changeMenu = (val) =>{
    if(val === "All"){
      setData(menu);
    }else{
      const updateData =   menu.filter((item)=>{
        return val === item.category;
      });
      setData(updateData);
    }
  }

  return (
    <div>
      <div className='container'>
      <h1 className='title'>Our Menu</h1>
      <div className='button-group'>
        <button className='btn' onClick={()=>{changeMenu("All")}} >All</button>
        <button className='btn' onClick={()=>{changeMenu("breakfast")}} >Breakfast</button>
        <button className='btn' onClick={()=>{changeMenu("lunch")}} >Lunch</button>
        <button className='btn' onClick={()=>{changeMenu("shakes")}} >Shakes</button>
      </div>
      </div>
      <div className='items'>
          {
            data.map((item)=>{
              return (<Card key={item.id} item={item} />)
            })
          }
      </div>
    

    </div>
  );
};

export default App;
