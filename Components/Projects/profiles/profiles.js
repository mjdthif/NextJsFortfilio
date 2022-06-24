import React, { useState } from 'react';
import data from './data';
import List from './List';
import style from '../project.module.scss';
import ProjectNav from '../ProjectNav/ProjectNav';



function Profiles() {
  const [people, setPeople] = useState(data)
  return(
        <section className={style.container}>
          <main className={style.containerBirthday}>
            <h3> {people.length} people</h3>
              <List people={people}/>
            <button className={style.birthdayBtn}  onClick={()=> setPeople([])}>
              Clear All
            </button>
            <button className={style.birthdayBtn} onClick={()=>setPeople(data)}> Show All </button>
            <ProjectNav></ProjectNav>
          </main>
        </section>
        
  )
}

export default Profiles;
