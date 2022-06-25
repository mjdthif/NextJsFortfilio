
import Image from 'next/image';
import style from '../../../styles/project.module.scss'
const List = ({people}) => {
  return (
    <>
        {people.map((person)=>{
          const {id, name, age, image}  = person;
          return(
            <article key={id} className={style.person}>
              <Image 
               
                width="100px"
                height="100px"
                src={image} 
                alt={name}
                className={style.profilePic}
              />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </article>
          )
        })}
    </>
  );
};

export default List;
