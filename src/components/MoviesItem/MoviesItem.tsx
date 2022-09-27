import React from 'react'
import styles from './MoviesItems.module.scss'

import {Link} from "react-router-dom";
import {IFilms} from "../../redux/slices/filmsSlice";







const MoviesItem:React.FC<IFilms> = ( {
                                          // filmId,
                                          // nameRu,
                                          // nameEu,
                                          // year,
                                          // filmLength,
                                          // countries,
                                          // genres,
                                          // rating,
                                          // posterUrl,
                                          // posterUrlPreview,
                                          age_restriction,
                                          big_poster,
                                          small_poster,
                                          budget,
                                          name_russian,
                                          country_ru,
                                          genres,
                                          rating,
                                          name_original,
                                          persons,
                                          year,
                                          description,
                                          webUrl,
                                          trailer,
                                          id,



                                      }
) => {



  return (
      <div className={styles.films}>
          <Link key={id} to={`/films/${id}`}>
          <img src={big_poster} alt="Poster"/>
          </Link>
          <p>{name_russian}</p>


      </div>


  )
}

export default MoviesItem
