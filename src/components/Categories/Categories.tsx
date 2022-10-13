import React from 'react'
import styles from './Categories.module.scss'


interface ICategories{
    searchRating:()=>void
    searchPopularFilm:()=>void

}


const Categories:React.FC<ICategories> = ({searchRating,searchPopularFilm}) => {

  return (
    <ul className={styles.categories}>
      <li onClick={searchRating}>По рейтингу</li>
      <li onClick={searchPopularFilm}>Популярные</li>
    </ul>
  )
}

export default Categories