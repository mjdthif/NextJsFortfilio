import{useState, useEffect} from 'react';
import SocialMedia from '../Components/socialMedia/SocialMedia';
import layoutStyle from '../styles/layout.module.scss';






const Layout = ({children}) => {

//=======================Global Functionallities be resued through out our app.======================. 

  const [ isOpen , setIsOpen] = useState(false)
  const [ navSocial, setNavSocial]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  
  };
 

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