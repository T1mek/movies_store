import React from 'react'
import styles from './HomePage.module.scss'
import Categories from './../../components/Categories/Categories';
import axios from 'axios';
import MoviesItem from '../../components/MoviesItem/MoviesItem';



export type Iitems = {
   pagesCount:number,
   films:{
   filmId: number,
   name: string,
   year: string,
   filmLength: string,
   countries: string[],
   genres: string[],
   rating: string[],
   posterUrl: string,
   posterUrlPreview: string,
}



}
export type IMoviesItem={
   id:string,
  imageUrl:string,
  title:string,
  price:number,
  sizes:number[],
  types:number[],
  categories:number,
  rating:number,
}

const HomePage: React.FC = () => {

   const [items, setItems] = React.useState<IMoviesItem[]>([])


   React.useEffect(() => {
      
      const fetchData = async () => {
         try {
            const res = await axios.get<IMoviesItem[]>(`https://62c5602fa361f72512824193.mockapi.io/pizza`)
            // , {
            //    headers: {
            //       'X-API-KEY': '26604d89-ae5c-49f8-b044-44ae69bde220',
            //       'Content-Type': 'application/json',
            //    }
            // })
            setItems(res.data)
         }
         catch (error) {
            alert("Ошибка Загрузки")
         }
      }


      fetchData()
      

   }, [])
   console.log(items)
   
   return (
      <div className={styles.main}>

         <Categories />

         <div className={styles.item}>
           {/* {items.map((obj:any)=>(
            <MoviesItem  key={obj.filmId} {...obj}/>  
           ))} */}
        {/* {items.map((obj:any)=>(
         <MoviesItem key={obj.id} {...obj} />
        ))} */}
         
         </div>





      </div>
   )
}

export default HomePage