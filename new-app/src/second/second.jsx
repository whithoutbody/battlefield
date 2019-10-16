import React,{Component}  from 'react';
import style from './second.module.css'




class Second extends Component{
    render(){
        return(
            <div className={style.second}>              
               <section className={style.hText}>
                <h3 className={style.s3}><span className={style.spanA}>A</span> bout</h3>
                <h1 className={style.s1}><span className={style.spanS}>S</span>ublime</h1>
               </section>
               <section className={style.pText}>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod. Pellentesque quis tristique magna.

                </h5>
                <p>Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam. Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula. Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus. Sed rutrum tempus urna, sed aliquam lectus egestas eu. Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam. Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula. Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus. Sed rutrum tempus urna, sed aliquam lectus egestas eu</p>
               </section>
               <section className={style.secondSection}>
                   <div className={style.leftDiv}>
                     <img src="https://icon-icons.com/icons2/37/PNG/48/joystick_game_3819.png" alt=""/>
                     <h4 className={style.hfo}>
                         App Development
                     </h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod. Pellentesque quis tristique magna.
</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod. Pellentesque quis tristique magna.
</p>
                   </div>
                   <div className={style.centrDiv}>
                     <img src="https://icon-icons.com/icons2/37/PNG/48/joystick_game_3819.png" alt=""/>
                     <h4 className={style.hfo}>
                         Game Design
                     </h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod. Pellentesque quis tristique magna.
</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod. Pellentesque quis tristique magna.
</p>
                   </div>
                   <div className={style.rightDiv}>
                     <img src="https://icon-icons.com/icons2/37/PNG/48/joystick_game_3819.png" alt=""/>
                     <h4 className={style.hfo}>
                         Content Creation
                     </h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod. Pellentesque quis tristique magna.
</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod. Pellentesque quis tristique magna.
</p>
                   </div>
               </section>
 
         
            </div>
        )
    }
   
}

export default Second;