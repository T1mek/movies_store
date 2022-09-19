import React from 'react'
import styles from './HomePage.module.scss'
import Categories from './../../components/Categories/Categories';

import MoviesItem from '../../components/MoviesItem/MoviesItem';












const HomePage: React.FC = () => {

   // const [items, setItems] = React.useState<Iitems>()


   // React.useEffect(() => {
   //
   //    const fetchData = async () => {
   //       try {
   //          const res = await axios.get<Iitems>(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1`
   //          , {
   //             headers: {
   //                'X-API-KEY': '26604d89-ae5c-49f8-b044-44ae69bde220',
   //                'Content-Type': 'application/json',
   //             }
   //          })
   //          setItems(res.data)
   //       }
   //       catch (error) {
   //          alert("Ошибка Загрузки")
   //       }
   //    }
   //
   //
   //    fetchData()
   //
   //
   // }, [])


   return (
      <div className={styles.main}>

         <Categories />


         {/*<div className={styles.item}>*/}

         {/*{items ? items.films.map((item)=>(*/}
         {/*    <MoviesItem  key={item.filmId}{...item} / >*/}
         {/*)) : <div>*/}

         {/*       <h2> Ошибка загрузки фильмов</h2>*/}


         {/*    </div>}*/}
         {/*       </div>*/}




      </div>
   )
}

export default HomePage