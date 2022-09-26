import React from 'react'
import style from './FullFilm.module.scss'
import {useParams, useNavigate} from "react-router-dom";
import {IFilms, IItems} from "../../redux/slices/filmsSlice";
import axios from "axios";
import {getVideo, IVideos} from "../../redux/slices/videoSlice";
import {useAppDispatch, useAppSelector} from "../../redux/slices/hooks";







const FullName : React.FC= () => {



const [films,setFilms]=React.useState<IFilms>()
    const navigation = useNavigate()
const dispatch = useAppDispatch()
const {filmId} = useParams()




    React.useEffect(()=>{
        async function fetchFilms(){

            try {
                const {data}= await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`, {
                    headers: {
                        'X-API-KEY': '26604d89-ae5c-49f8-b044-44ae69bde220',
                        'Content-Type': 'application/json',
                    }

                }


                )
                setFilms(data)


            }
            catch (e){
                alert('Ошибка получкения фильма')
                navigation('/')
            }
        }
        fetchFilms()
    },[navigation,filmId])

React.useEffect(()=>{

    dispatch(getVideo())
},[dispatch])





    if (!films){
        return <>"Загрузка ..."; </>
    }



    return (
        <div className={style.fullfilm}>
            <div className={style.wrapper}>
                <img height={500} src={films.posterUrl} alt="Poster"/>
                    <div className={style.titleFilm}>
                <h2>{films.nameRu}  (<span>{films.year}г. </span>) смотерть онлайн</h2>
                        <ul className={style.aboutFilm}>
                            <li>Название : {films.nameOriginal}</li>
                            <li>Год выхода : {films.year}г.</li>
                            <li>Страна: {films && films.countries.map(c => c.country).join()} </li>
                            <li>Жанр: {films && films.genres.map(g => g.genre).join()} </li>
                            <li> Описание : {films && films.description}</li>
                            </ul>




                    </div>









            </div>

        </div>
    )
}

export default FullName