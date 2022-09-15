import React from 'react'
import styles from './MoviesItem.module.scss'

import { IMoviesItem } from '../../pages/Homepage/HomePage'






const MoviesItem:React.FC<IMoviesItem> = ({id, imageUrl}) => {
  return (
    <div>


      {/* {id}
      <img src={imageUrl} alt="" /> */}
    </div>
  )
}

export default MoviesItem