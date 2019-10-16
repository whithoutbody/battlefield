import React,{Component}  from 'react';
import style from './provided.module.css';
import imgBg from   '../image/Bg.png'




class Provided extends Component{
    render(){
        return(
            <div className={style.Provided}>             
             
                  <img src={imgBg} alt=""/>
              
            </div>
        )
    }
   
}

export default Provided;