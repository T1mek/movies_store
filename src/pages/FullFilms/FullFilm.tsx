import React from 'react'
import style from './FullFilm.module.scss'
import {useParams, useNavigate} from "react-router-dom";
import {IFilms} from "../../redux/slices/filmsSlice";
import axios from "axios";


const FullName : React.FC = () => {

const [country,setCountry]=React.useState<string>()

const [films,setFilms]=React.useState<IFilms>()
    const navigation = useNavigate()
    const {filmId}=useParams()


    React.useEffect(()=>{
        async function fetchFilms(){
            try {
                const {data}= await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/` + filmId,{
                    headers: {
                        'X-API-KEY': '26604d89-ae5c-49f8-b044-44ae69bde220',
                        'Content-Type': 'application/json',
                    }
                })
                setFilms(data)
            }
            catch (e){
                alert('Ошибка получкения фильма')
                navigation('/')
            }
        }
        fetchFilms()
    },[navigation,filmId])




    if (!films){
        return <>"Загрузка ..."; </>
    }


    return (
        <div className={style.fullfilm}>
            <div className={style.wrapper}>
                <img height={500} src={films.posterUrl} alt="Poster"/>
                    <div className={style.titleFilm}>
                <h2>{films.nameRu}  (<span>{films.year}</span>)</h2>
                        <div className={style.aboutFilm}>
                            <p>Название : {films.nameOriginal}</p>
                            <p>Год выхода : {films.year}</p>






                            </div>
                    </div>









            </div>

        </div>
    )
}

export default FullName