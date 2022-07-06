import { useState } from 'react';
import  data from './data';
import style from '../../../styles/project.module.scss';
import SingleQuestion from './Question';
import ProjectNav from '../ProjectNav/ProjectNav';
function Accordion() {
  const [questions, setQuestions] = useState(data);

  return (
    <section>
        <main className={style.accordionContainer}>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
              <ProjectNav/>
        </main>
    </section>
  );
}

export default Accordion;
