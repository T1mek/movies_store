import React from 'react'
import styles from './Categories.module.scss'




const Categories:React.FC = () => {
  return (
    <ul className={styles.categories}>
      <li>Последние</li>
      <li>По рейтингу</li>
      <li>Популярные</li>
    </ul>
  )
}

export default Categories