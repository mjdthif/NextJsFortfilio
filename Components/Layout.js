import{useState, useEffect} from 'react';
import SocialMedia from '../Components/SocialMedia';
import layoutStyle from '../styles/layout.module.scss';






const Layout = ({children}) => {

//=======================Global Functionallities be resued through out our app.======================. 

  const [ isOpen , setIsOpen] = useState(false)
  const [ navSocial, setNavSocial]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  
  };
 
// const toggleSocialNav  =  ()=>{
//   setToggleSocial(!toggleSocial)
// }

// const reversScrolling = () =>{
//   if (window.scrollY >= 0){
//       if(isOpen===true){
//          toggle()
//       }
//     // setShowSocial(false)
//     // console.log('the is the reverse scrolling')
//     // setToggleSocial(false)
//     // console.log(showSocial)
//   }
// };

// useEffect(()=>{
//   window.addEventListener('scroll', reversScrolling)
// }, [])




  return (
    <>
    <SocialMedia/>
        <div className={layoutStyle.container}>
            <main className={layoutStyle.main}>
                {children}  
            </main>
        </div>
    </>
  )
}

export default Layout;