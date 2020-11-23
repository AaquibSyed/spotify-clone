import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import {Grid, Slider} from '@material-ui/core';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { useDataLayerValue } from './../DataLayer';




function Footer() {
    const[{playing_track},dispatch] = useDataLayerValue();
    return (
        <div className='footer'>
            <div className="footer__left">
                {playing_track && <img src={playing_track?.album.images[0].url}
                     alt="album"
                    className='footer__image'/>  }           
                <div className="footer__songInfo">
                {playing_track && <> <h6>{playing_track.name} </h6>
                                 <p>{playing_track.artists[0].name}</p>
                                 </> }
                                       
                </div>
            </div>

            <div className="footer__center">
               <ShuffleIcon className='footer__green'/>
               <SkipPreviousIcon className='footer__icon'/>
               <PlayCircleOutlineIcon fontSize='large' className='footer__icon'/>
               <SkipNextIcon className='footer__icon'/>
               <RepeatIcon className='footer__green'/>
            </div>

            <div className="footer__right">
                 <Grid container spacing = {2}>
                   <Grid item>
                       <PlaylistPlayIcon/>
                   </Grid>
                   <Grid item>
                       <VolumeDownIcon/>
                   </Grid>
                   <Grid item xs>
                       <Slider/>
                   </Grid>
                 </Grid>
            </div>
        </div>
    )
}

export default Footer
