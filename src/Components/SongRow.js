import React from 'react'
import './SongRow.css'
import { useDataLayerValue } from './../DataLayer';


function SongRow({track = 'test'}) {
    const [{playing_track},dispatch] = useDataLayerValue();
    const trackClicked = ()=>{
        dispatch({
            type:"SET_PLAYING_TRACK",
            playing_track:track
        })
    }
    return (
        <div className='songRow'>
            <img 
            className='songRow__album'
            src={track.album.images[0].url}
             alt="albumart"/>
            <div className="songRow__info" onClick={trackClicked}>
                  <h1 >{track?.name}</h1>
                  <p> {track?.artists.map((artist)=>artist.name).join(', ')}
                       -{track.album.name}
                  </p>
            </div>
    
     </div>
    )
}

export default SongRow
