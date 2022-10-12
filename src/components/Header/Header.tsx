import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Header.module.scss'
import Logo from '../../assets/logo.png'
import searchImg from '../../assets/search.png'
import {Link} from "react-router-dom";

interface IHeader{
    setSearch:(e:string)=>void
}


const Header: React.FC<IHeader> = ({setSearch}) => {



   return (
      <div className={styles.header} >
          <Link to={'/'}>
         <img src={Logo} alt="Logo" width={70}  />
          </Link>
         <Navbar />
         <div className={styles.search}>
            <input
                onChange={(e)=>setSearch(e.target.value)}
                type="text" placeholder='Поиск...' />
            <img src={searchImg} alt="Search" width={17} />
         </div>


      </div>
   )
}

export default Header