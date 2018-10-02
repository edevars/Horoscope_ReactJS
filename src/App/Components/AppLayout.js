import React from 'react'
import style from './AppLayout.css'

const AppLyaout = (props) => {
   return(
       <div className={style.center}>
            <section className={style.HomeGrid}>
                {props.children}
            </section>
       </div>
   )
}

export default AppLyaout