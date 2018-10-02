import React, {Component} from 'react'
import Card from '../Components/card'
import AppLyaout from '../Components/AppLayout';
class Home extends Component{
    constructor(){
        super();
        this.state = {
            sunSigns: []
        }
    }
    componentWillMount(){
        fetch('https://api.adderou.cl/tyaas/')
        .then((response)=>{
            return response.json()
        }).then((sunsigns)=>{
            var horoscope=sunsigns.horoscopo
            for(let i=0;i<Object.keys(horoscope).length;i++){
                var sign = horoscope[Object.keys(horoscope)[i]]
                let data={
                    name: sign.nombre,
                    signDate: sign.fechaSigno, 
                    love: sign.amor, 
                    health: sign.salud, 
                    money: sign.dinero, 
                    color: sign.color, 
                    luckyNumber: sign.numero
                }
                this.setState({sunSigns: this.state.sunSigns.concat([data])})
            }
        })
    }
    render(){
        return(
            <AppLyaout>
                {
                    this.state.sunSigns.map((signo)=>{
                        return(
                            <Card 
                                title={signo.name}
                                content={signo.love}
                                url='https://storage.googleapis.com/mmc-elcaribe-bucket/uploads/2018/09/4df34464-horoscopo-17-abril-t.jpg'
                            />
                        )
                    })
                }
            </AppLyaout>
        )
    }
}

export default Home