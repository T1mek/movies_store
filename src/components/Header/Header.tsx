import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Header.module.scss'
import Logo from '../../assets/logo.png'
import searchImg from '../../assets/search.png'


const Header: React.FC = () => {


   
   return (
      <div className={styles.header} >
         <img src={Logo} alt="Logo" width={70}  />
         <Navbar />
         <div className={styles.search}>
            <input type="text" placeholder='Поиск...' />
            <img src={searchImg} alt="Search" width={17} />
         </div>
         

      </div>
   )
}

export default Header