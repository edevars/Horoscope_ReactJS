import React from 'react'
import style from './AppLayout.css'

const AppLyaout = (props) => {
   return(
            <section className={style.HomeGrid}>
                {props.children}
            </section>
   )
}

export default AppLyaout