import React,{Component}  from 'react';
import style from './Projects.module.css';
import img1 from '../image/1.png';
import img2 from '../image/2.png';
import img3 from '../image/3.png';
import img4 from '../image/4.png';
import img5 from '../image/5.png';
import img6 from '../image/6.png';
import img7 from '../image/7.png';

import img9 from '../image/9.png';




class Projects extends Component{
    state ={
        activ: false,
        foto:false
    }
    ChengeDecor(){
        this.setState({
            activ:!this.state.activ
        })
    }
    ForoZoom(){
        this.setState({
            foro:!this.state.foto
        })
    }
    render(){
        return(
            <div className={style.Projects}>              
                <section className={style.navMenu}> 
                    <h1 className={style.hFP}><span className={style.F}>F</span>eatured <span className={style.P}>P</span>rojects</h1>
                    
                </section>
                <section>
                <ul className={style.ulMenu}>
                        <li className={style.secondLi}><a onChange ={this.ChengeDecor.bind()}className={style.secondA} href="">ALL WORKS</a></li>
                        <li className={style.secondLi}><a onChange ={this.ChengeDecor.bind()}className={style.secondA}href="">GAMES</a></li>
                        <li className={style.secondLi}><a onChange ={this.ChengeDecor.bind()}className={style.secondA}href="">APPLICATIONS</a></li>
                        <li className={style.secondLi}><a onChange ={this.ChengeDecor.bind()}className={style.secondA}href="">CONTENT DEVELOPMENT</a></li>
                    </ul>
                </section>
                <section>
                    <div className={style.fotoGame}>
                        <div className={style.LEFT}>
                    <img src={img1}></img>
                    <img src={img2}></img>
                    <img src={img3}></img>
                    <img src={img4}></img>
                        </div>
                        <div className={style.right}>
                        <img src={img5}></img>
                    <img src={img6}></img>
                    <img src={img7}></img>                   
                    <img src={img9}></img>
                        </div>
                    
                   
                    
                    </div>
                </section>
               
 
         
            </div>
        )
    }
   
}

export default Projects;