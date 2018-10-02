import React,{Component} from 'react'
import SunSignCards from './sunSignsCards'
import Banner from '../Components/banner'
import style from '../Components/AppLayout.css'

class Home extends Component{
    render(){
        return(
            <div className={style.center}>
                <Banner/>
                <SunSignCards/>
            </div>
        )
    }
}

export default Home