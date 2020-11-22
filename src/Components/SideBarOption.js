import React from 'react'
import './SideBarOption.css'
import { useDataLayerValue } from './../DataLayer';
import  spotifyWebApi  from 'spotify-web-api-js';

function SideBarOption({id,title,Icon}) {
    const spotify =  new spotifyWebApi();
    const[{current_playlist},dispatch] = useDataLayerValue();
    const playlistClick = (e)=>{
        console.log(e.target.id);
        spotify.getPlaylist(e.target.id)
        .then((response)=>{
          dispatch({
            type:"SET_DISCOVER_WEEKLY",
            discover_weekly:response
          })
        })
        dispatch({
            type:"SET_CURRENT_PLAYLIST",
            current_playlist:e.target.id
        })
    }
    return (
        <div className='sidebaroption'>
            {Icon && <Icon className='sidebaroption__icon'/>}
            {Icon ?<h4>{title}</h4>: <p id={id} onClick={playlistClick}>{title}</p>}
        </div>
    )
}

export default SideBarOption
