import React,{Component}  from 'react';
import style from './menu.module.css'


class Menu extends Component{
    state={
        activ: false
    }
Chenge(){
    this.setState({
        activ:!this.state.activ
    })
}
    render(){
        return(            
               <div className={style.navMenu}>
               <ul>
<li ><a onChange ={this.Chenge.bind()} className={this.state.activ? style.aActiv: style.a} href="">About</a></li>
<li><a onChange ={this.Chenge.bind()} className={this.state.activ? style.aActiv: style.a} href="">Development</a></li>
<li><a  onChange ={this.Chenge.bind()} className={this.state.activ? style.aActiv: style.a}href="">Projects</a></li>
<li><a onChange ={this.Chenge.bind()} className={this.state.activ? style.aActiv: style.a}href="">Blog</a></li>
</ul>
               </div>
         
           
        )
    }
   
}

export default Menu;