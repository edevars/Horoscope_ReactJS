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
                    luckyNumber: sign.numero,
                    url: '../../img/'+sign.nombre+'.jpg' 
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
                        var image
                        switch (signo.name) {
                            case 'Acuario':
                                image=require('../../img/Acuario.jpg')
                                break;
                            case 'Aries':
                                image=require('../../img/Aries.jpg')
                                break;
                            case 'Cáncer':
                                image=require('../../img/Cáncer.jpg')
                                break;
                            case 'Capricornio':
                                image=require('../../img/Capricornio.jpg')
                                break;
                            case 'Escorpión':
                                image=require('../../img/Escorpión.jpg')
                                break;
                            case 'Géminis':
                                image=require('../../img/Géminis.jpg')
                                break;
                            case 'Leo':
                                image=require('../../img/Leo.jpg')
                                break;
                            case 'Libra':
                                image=require('../../img/Libra.jpg')
                                break;
                            case 'Piscis':
                                image=require('../../img/Piscis.jpg')
                                break;
                            case 'Sagitario':
                                image=require('../../img/Sagitario.jpg')
                                break;
                            case 'Tauro':
                                image=require('../../img/Tauro.jpg')
                                break;
                            case 'Virgo':
                                image=require('../../img/Virgo.jpg')
                                break;
                        }
                        return(
                            <Card 
                                key={signo.name}
                                title={signo.name}
                                content={signo.love}
                                signDate={signo.signDate}
                                love={signo.love}
                                health={signo.love}
                                money={signo.money}
                                color={signo.color}
                                luckyNumber={signo.luckyNumber}
                                url={image}
                            />
                        )
                    })
                }
            </AppLyaout>
        )
    }
}

export default Home