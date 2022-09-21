import React from 'react'
import styles from './HomePage.module.scss'
import Categories from './../../components/Categories/Categories';

import {RootState} from "../../redux/store";
import {filmsAll, getFilms} from "../../redux/slices/filmsSlice";
import {useAppDispatch, useAppSelector} from "../../redux/slices/hooks";
import MoviesItem from "../../components/MoviesItem/MoviesItem";


const HomePage: React.FC = () => {
    const {films}=useAppSelector(filmsAll)
    const dispatch = useAppDispatch()

    React.useEffect(()=>{
        dispatch(getFilms())
    },[dispatch])


console.log(films)

   return (
      <div className={styles.main}>

         <Categories />


         <div className={styles.item}>
             {films.length ? films.map((item)=>(
                 <MoviesItem key={item.filmId} {...item}/>
             )):<div>Не удалось загрузить</div>}



       </div>




      </div>
   )
}

export default HomePage