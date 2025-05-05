import React, { useEffect } from 'react';
import '../styles/List.css';
const List = ({people}) => {
    useEffect(()=>{
        console.log(people);
    })
    return (
    <>
    {
        people.map((person)=>{
            const {id , name , age , image} = person;
            return(
                <article key={id} className='article' >
                    <img src={image} alt={name} className='image' />
                    <div className='person_details'>
                        <h4>{name}</h4>
                        <h5>{age}</h5>
                    </div>
                </article>
            )
        })
    }
    </>
    )
}

export default List
