import React, { useState } from 'react';

import SingleQuestions from './components/SingleQuestions.jsx';
import questions from './data/data.js';
import './style/App.css';
const App = () => {

  const [currentShow , setCurrentShow] = useState(0);

  return (
    <div className='container' >
      <div className='intro'>
        <h1>Questions And Answers About Login</h1>
      </div>

      <div className='question-section'>
        {
          questions.map((question)=>{
              return (
                <div key={question.id} className='question-info'>
                  <SingleQuestions question={question}  currentShow={currentShow}  setCurrentShow={setCurrentShow} />
                  {
                    currentShow === question.id ?  <p className='info'>{question.info}</p> : <></>
                  }
                </div>
              )
          })
        }
      </div>
    </div>
  )
}

export default App
