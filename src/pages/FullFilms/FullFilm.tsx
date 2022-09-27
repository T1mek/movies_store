import React from 'react'
import style from './FullFilm.module.scss'
import {useParams, useNavigate} from "react-router-dom";
import {IFilms} from "../../redux/slices/filmsSlice";
import axios from "axios";


import ReactPlayer from "react-player";










const FullName : React.FC= () => {



const [films,setFilms]=React.useState<IFilms>()
    const navigation = useNavigate()
const {id} = useParams()



    React.useEffect(()=>{
        async function fetchFilms(){

            try {
                const {data}= await axios.get(`https://kinobd.ru/api/films/${id}`
                )
                setFilms(data)


            }
            catch (e){
                alert('Ошибка получкения фильма')
                navigation('/')
            }
        }

        fetchFilms()
    },[navigation,id])






    if (!films){
        return <>"Загрузка ..."; </>
    }



    return (
        <div className={style.fullfilm}>
            <div className={style.wrapper}>
                <img height={500} src={films.small_poster} alt="Poster"/>
                    <div className={style.titleFilm}>
                <h2>{films.name_russian}  (<span>{films.year}г. </span>) смотерть онлайн</h2>
                        <ul className={style.aboutFilm}>
                            <li>Название : {films.name_original}</li>
                            <li>Год выхода : {films.year}г.</li>
                            <li>Страна: {films.country_ru} </li>
                            <li>Жанр: {films && films.genres.map(g => g.name_ru).join()} </li>
                            <li> Герой : {films && films.persons.map(p=>p.name_russian).join()}</li>
                            <li> Описание : {films && films.description}</li>

                            </ul>
                            <ReactPlayer width={800} style={{marginLeft:'140px',marginTop:'70px'}} url={films.trailer}/>








                    </div>










            </div>

        </div>
    )
}

export default FullName