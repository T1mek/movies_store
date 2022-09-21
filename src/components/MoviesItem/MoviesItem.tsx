import React from 'react'
import styles from './MoviesItems.module.scss'

import {Link} from "react-router-dom";
import {IFilms} from "../../redux/slices/filmsSlice";







const MoviesItem:React.FC<IFilms> = ( {
                                          filmId,
                                          nameRu,
                                          nameEu,
                                          year,
                                          filmLength,
                                          countries,
                                          genres,
                                          rating,
                                          posterUrl,
                                          posterUrlPreview,
                                      }
) => {



  return (
      <div className={styles.films}>
          <Link key={filmId} to={`/films/${filmId}`}>
          <img src={posterUrlPreview} alt="Poster"/>
          </Link>


      </div>


  )
}

export default MoviesItem