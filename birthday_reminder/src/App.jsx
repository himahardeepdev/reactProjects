import React, { useState } from 'react';
import List from './components/List';
import data from './data/data';
import './styles/App.css';
const App = () => {
  const [people  ,setPeople] = useState(data);

  const cleatAll = ()=>{
    setPeople([]);
  }
  return (
    
    <div className='body'>
      <div className='section'>
        <center><h2>{people.length} Birthday Reminder  </h2></center>
        
        <List people={people} />
        <button onClick={cleatAll} className='button_clear' >Clear All </button>
      </div>
    </div>
    
    
   
  )
}

export default App
