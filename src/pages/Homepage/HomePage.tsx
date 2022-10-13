import React from 'react'
import styles from './HomePage.module.scss'
import Categories from './../../components/Categories/Categories';


import {getFilms,setRating,setPopularFilms} from "../../redux/slices/filmsSlice";
import {useAppDispatch, useAppSelector} from "../../redux/slices/hooks";
import MoviesItem from "../../components/MoviesItem/MoviesItem";
import Pagination from "../../components/Pagination/Pagination";
import {setPageCount} from "../../redux/slices/fillterSlice";
import Skeleton from "../../components/MoviesItem/Skeleton";






const HomePage: React.FC = () => {
    const {data, status}=useAppSelector(state => state.filmsSlice)
    const {pageCount}=useAppSelector(state => state.filterSlice)

    const dispatch = useAppDispatch()

    const onClickPage = (number:number) => {
        dispatch(setPageCount(number))
    }


    const searchRating = ()=>{
        const copyFilms = data.concat()

        const sortFilms = copyFilms.sort((a,b)=> {
            return  a.rating_kp <= b.rating_kp ? 1 :-1
        })
        dispatch(setRating(sortFilms))

    }
    const searchPopularFilm = ()=>{
        const copyFilms = data.concat()
        const lastFilms = copyFilms.sort((a,b)=>{
            return a.popular_weight <= b.popular_weight ? 1 :-1
        })
        dispatch(setPopularFilms(lastFilms))
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

         <Categories searchPopularFilm={searchPopularFilm} searchRating={searchRating} />


         <div className={styles.item}>


             {status === 'error'?(
                 <div>
                     <h2> Произошла ошибка загрузки</h2>
                 </div>

             ):status === 'loading'?(
                 [...new Array(50)].map((_,index)=><Skeleton key={index}/>)
             ): ( data && data.map((item)=>(
                 <MoviesItem key={item.id} {...item} />)
             ))}

       </div>


          <Pagination onChangePage={onClickPage}/>

      </div>
   )
}

export default HomePage