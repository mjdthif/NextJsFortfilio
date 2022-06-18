import React, { useState } from 'react';
import  data from './data';
import '../project.scss';
import SingleQuestion from './Question';
import ProjectNav from '../ProjectNav/ProjectNav';
function Accordion() {
  const [questions, setQuestions] = useState(data);

  console.log(questions)
  return (
    <section>
   
        {/* <h3>Questions and answers about our services.</h3> */}
        <main className='accordion-container'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
          <ProjectNav></ProjectNav>
    
        </main>

    </section>
  );
}

export default Accordion;
