import React from 'react';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import '../style/SingleQuestions.css';
const SingleQuestions = ({question , setCurrentShow ,currentShow     }) => {
    const {id , title } = question
    const show = (id) =>{
        setCurrentShow(id);
    }

    const hide = ()=>{
        setCurrentShow(0);
    }
    return (
    <div className='single-question'>
        <h2>{title}</h2>
        {
            currentShow !== id ? <button onClick={()=>{show(id)}} className='btn' ><CiCirclePlus /></button>   :  <button onClick={hide}  className='btn hide' ><CiCircleMinus  /></button>
        }
    </div>
    )
}

export default SingleQuestions
