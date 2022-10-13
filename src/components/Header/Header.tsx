import React, {ChangeEvent} from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Header.module.scss'
import Logo from '../../assets/logo.png'
import searchImg from '../../assets/search.png'
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/slices/hooks";
import {setSearchFilms} from "../../redux/slices/filmsSlice";


const Header: React.FC = () => {
    // const [searchTitle,setSearchTitle]= React.useState('')
    const {data}=useAppSelector(state => state.filmsSlice)
    const dispatch =useAppDispatch()

    const filterSearch =(e:ChangeEvent<HTMLInputElement>)=> {
        if(e.target.value) {
            const searchTitle = e.target.value
            const searchFilm = data.filter(films =>
                films.name_russian.toLowerCase().includes(searchTitle.toLowerCase()))
            console.log(searchFilm)
            //@ts-ignore
            dispatch(setSearchFilms(searchFilm))
        }

    }




   return (
      <div className={styles.header} >
          <Link to={'/'}>
         <img src={Logo} alt="Logo" width={70}  />
          </Link>
         <Navbar />
         <div className={styles.search}>
            <input
                onChange={filterSearch}
                type="text" placeholder='Поиск...' />
            <img src={searchImg} alt="Search" width={17} />
         </div>




      </div>
   )
}

export default Header