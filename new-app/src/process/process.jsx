import React,{Component}  from 'react';
import style from './process.module.css';
import img1 from '../image/13.png';
import img2 from '../image/14.png';
import img3 from '../image/12.png';



class Process extends Component{
    render(){
        return(
            <div className={style.Process}>              
              <section className={style.Head}> 
                    <h1 className={style.hF}><span className={style.Fs}>S</span>trategic <span className={style.Ps}>P</span>rocess</h1>
                    <div className={style.hLoren}> 
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod. Pellentesque quis tristique magna.
</h3>
                    </div>
                    <div className={style.pLoren}>
                    <p>Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam. Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula. Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus. Sed rutrum tempus urna, sed aliquam lectus egestas eu. Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam. Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula. Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus. Sed rutrum tempus urna, sed aliquam lectus egestas eu. Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam. Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula. Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus. Sed rutrum tempus urna, sed aliquam lectus egestas eu. Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam. Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula. Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus. Sed rutrum tempus urna, sed aliquam lectus egestas eu.</p>
                    </div>
                    
                  
                </section>
                <section className={style.leftBar}>
                    <div className={style.imgLeft}>
                        <img src={img1} alt=""/>
                    </div>
                    <div>
                    <h1 className={style.hFs}><span className={style.Ps}>O</span>ur <span className={style.Ps}>P</span>rocess</h1>
                    <div className={style.hLorenLeft}> 
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod. Pellentesque quis tristique magna.
</h3>
                    </div>
                    <div className={style.pLorenLeft}>
                    <p>Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam. Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula. Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus. Sed rutrum tempus urna, sed aliquam lectus egestas eu</p>
                    </div>
                    </div>
                </section>
                <section className={style.rightBar}>
                    <div className={style.imgRight}>
                        <img src={img2} alt=""/>
                    </div>
                    <div>
                    <h1 className={style.hFm}><span className={style.Ps}>M</span>etod</h1>
                    <div className={style.hLorenRight}> 
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
</h3>
<p>Maecenas est risus tristique volutpat sagittis vel feugiat consectetur diam. Suspendisse justo sem, molestie tincidunt </p>
                    </div>
                    
                    </div>
                </section>
                <section className={style.leftBar}>
                    <div className={style.imgLeftTo}>
                        <img src={img3} alt=""/>
                    </div>
                    <div>
                    <h1 className={style.hFsTo}><span className={style.PsTo}>O</span>utcome</h1>
                    <div className={style.hLorenLeftTo}> 
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod. Pellentesque quis tristique magna.
</h3><p>Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam. Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula. Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus. Sed rutrum tempus urna, sed aliquam lectus egestas eu</p>
                    </div>
                    
                    </div>
                </section>
            </div>
        )
    }
   
}

export default Process;