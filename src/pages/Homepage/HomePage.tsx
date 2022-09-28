import React from 'react'
import styles from './HomePage.module.scss'
import Categories from './../../components/Categories/Categories';


import {getFilms} from "../../redux/slices/filmsSlice";
import {useAppDispatch, useAppSelector} from "../../redux/slices/hooks";
import MoviesItem from "../../components/MoviesItem/MoviesItem";
import Pagination from "../../components/Pagination/Pagination";
import {setPageCount} from "../../redux/slices/fillterSlice";

const HomePage: React.FC = () => {
    const {data}=useAppSelector(state => state.filmsSlice)
    const {pageCount}=useAppSelector(state => state.filterSlice)

    const dispatch = useAppDispatch()

    const onClickPage = (number:number) => {
        dispatch(setPageCount(number))
    }

        React.useEffect(()=>{
        const fetchFilms = ()=>{

        dispatch(
            //@ts-ignore
            getFilms(pageCount)
        )
            window.scroll(0, 0);

        }
        fetchFilms()
    },[dispatch,pageCount])




   return (
      <div className={styles.main}>

         <Categories />


         <div className={styles.item}>

             {data && data.map((item)=>(
                 <MoviesItem key={item.id} {...item} />
             ))}


       </div>


          <Pagination onChangePage={onClickPage}/>

      </div>
   )
}

export default HomePage