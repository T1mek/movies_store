import React from 'react'
import styles from './HomePage.module.scss'
import Categories from './../../components/Categories/Categories';


import {getFilms} from "../../redux/slices/filmsSlice";
import {useAppDispatch, useAppSelector} from "../../redux/slices/hooks";
import MoviesItem from "../../components/MoviesItem/MoviesItem";
import Pagination from "../../components/Pagination/Pagination";
import {setPageCount} from "../../redux/slices/fillterSlice";
import Skeleton from "../../components/MoviesItem/Skeleton";


interface IHomePage{
    search:string
}

const HomePage: React.FC<IHomePage> = ({search}) => {
    const {data, status}=useAppSelector(state => state.filmsSlice)
    const {pageCount}=useAppSelector(state => state.filterSlice)

    const dispatch = useAppDispatch()

    const onClickPage = (number:number) => {
        dispatch(setPageCount(number))
    }

    const filterSearch =
        data.filter(films =>{
             return films.name_russian.toLowerCase().includes(search.toLowerCase())
        })



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


             {status === 'error'?(
                 <div>
                     <h2> Произошла ошибка загрузки</h2>
                 </div>

             ):status === 'loading'?(
                 [...new Array(50)].map((_,index)=><Skeleton key={index}/>)
             ): (filterSearch.map((item)=>(
                 <MoviesItem key={item.id} {...item} />)
             ))}

       </div>


          <Pagination onChangePage={onClickPage}/>

      </div>
   )
}

export default HomePage