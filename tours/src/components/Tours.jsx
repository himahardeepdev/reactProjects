import React from 'react';
import '../style/Card.css';
import '../style/Tours.css';
import Card from './Card';
const Tours = ({data , setData}) => {
    const updateData = (id)=>{
        const updateData = data.filter((val)=>{
            return val.id !== id;
        });
        setData(updateData);
    }
  return (
    <div>
        <center><h1 className="underline-custom">Our Tours</h1></center>
        {
        data.map((val)=>{
            return(<div className='card' key={val.id}>
            
            <Card val={val}  setData={setData} />

            <button className='btn-not-interested'  onClick={()=>{updateData(val.id)}} >Not Interested </button>
            </div>
                
                
            )
        })
      }
    </div>
  )
}

export default Tours
