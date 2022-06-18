import React, { useState } from 'react';
import data from './data';
import List from './List';
import '../project.scss';
import ProjectNav from '../ProjectNav/ProjectNav';
function Birthday() {
  const [people, setPeople] = useState(data)
  return(
        <section className='container'>
          <main className='containerBirthday'>
            <h3> {people.length} people</h3>
              <List people={people}/>
            <button className='birthday-btn ' onClick={()=> setPeople([])}>
              Clear All
            </button>
            <button className='birthday-btn' onClick={()=>setPeople(data)}> Show All </button>
            <ProjectNav></ProjectNav>
          </main>
        </section>
        
  )
}

export default Birthday;
