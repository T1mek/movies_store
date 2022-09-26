import React from 'react'
import styles from './HomePage.module.scss'
import Categories from './../../components/Categories/Categories';


import {getFilms} from "../../redux/slices/filmsSlice";
import {useAppDispatch, useAppSelector} from "../../redux/slices/hooks";
import MoviesItem from "../../components/MoviesItem/MoviesItem";


const HomePage: React.FC = () => {
    const {films,pagesCount}=useAppSelector(state => state.filmsSlice)

    const dispatch = useAppDispatch()

    React.useEffect(()=>{
        dispatch(getFilms())
    },[dispatch])





   return (
      <div className={styles.main}>

         <Categories />


         <div className={styles.item}>

             {films && films.map((item)=>(
                 <MoviesItem key={item.filmId} {...item} />
             ))}


       </div>




      </div>
   )
}

export default HomePage