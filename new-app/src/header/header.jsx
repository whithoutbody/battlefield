import React,{Component}  from 'react';
import style from './header.module.css'
import Menu from './Menu/menu';



class Header extends Component{
    render(){
        return(
            <div className={style.header}>
                <div className={style.content}>
                <h1 className={style.we}><span className={style.hSpan}>We</span> create</h1>
                 <h1 className={style.weA}>Awesome Games</h1>
                 <Menu></Menu>
                </div>
               
 
         
            </div>
        )
    }
   
}

export default Header;