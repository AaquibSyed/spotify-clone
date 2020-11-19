import React from 'react'
import Body from './Body';
import SideBar from './SideBar';
import'./Player.css'
import Footer from './Footer';


function Player({spotify}) {
  
    return (
        <div className='player'>
            <div className="player__body">              
               <SideBar/>              
               <Body spotify={spotify}/>
            </div>
           
            <Footer/>
            {/* footer*/}
        </div>
    )
}

export default Player
