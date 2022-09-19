import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Header.module.scss'
import Logo from '../../assets/logo.png'
import searchImg from '../../assets/search.png'
import {Link} from "react-router-dom";


const Header: React.FC = () => {


   
   return (
      <div className={styles.header} >
          <Link to={'/'}>
         <img src={Logo} alt="Logo" width={70}  />
          </Link>
         <Navbar />
         <div className={styles.search}>
            <input type="text" placeholder='Поиск...' />
            <img src={searchImg} alt="Search" width={17} />
         </div>
         

      </div>
   )
}

export default Header