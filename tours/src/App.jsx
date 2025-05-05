import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
import './style/App.css';

const App = () => {
  const url = 'https://www.course-api.com/react-tours-project';
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    setLoading(true);
    try {
      let dataSet = await axios.get(url);
      setData(dataSet.data);
      setLoading(false);
    } catch (error) {
        console.error(error);
    }
  }
  if(loading){
    return (
      <div>
        <Loading/>
      </div>
    )
  }
  if(data.length === 0){
    return(
      <main>
        <div className='no-tours'>
          <h2 className='title-no-tours'>No Tours Left</h2>
          <button className='btn-no-tour' onClick={() => fetchData()}>
            Refresh
          </button>
        </div>
      </main>
    )
  }
  return(
    <main>
      <Tours data={data} setData={setData} />
    </main>
  )
}

export default App;