import React from 'react'
import styles from './Navbar.module.scss'




const Navbar:React.FC = () => {
  return (
    <ul className={styles.navbar}>
      <li>Фильмы</li>
      <li>Сериал</li>
      <li>Подборки</li>
      
    </ul>
  )
}

export default Navbar