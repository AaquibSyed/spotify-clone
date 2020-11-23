import './App.css';
import React,{useEffect,useState} from 'react'
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';
import Player from './Components/Player';
import spotifyWebApi from 'spotify-web-api-js' 
import { useDataLayerValue } from './DataLayer';

const spotify = new spotifyWebApi();

function App() {
  const[{playlists,playing_track,token,discover_weekly},dispatch] = useDataLayerValue();

 useEffect(() => {
       const hash = getTokenFromUrl();
       window.location.hash='';
       const _token = hash.access_token;

       if(_token){    
          dispatch({
            type:"SET_TOKEN",
            token:_token,
          })

          spotify.setAccessToken(_token);
         
         //get current user data         
         spotify.getMe()
         .then((user)=>{
                dispatch({
                    type:'SET_USER',
                    user:user
                 })
         })

         spotify.getUserPlaylists()
        .then((playlists)=>{
          console.log(playlists)
          dispatch({
            type:'SET_PLAYLISTS',
            playlists:playlists
          })         

          spotify.getPlaylist(playlists.items[0].id)
        .then((response)=>{
          dispatch({
            type:"SET_DISCOVER_WEEKLY",
            discover_weekly:response
          })
        })
        })      
         
      }
       
 }, [])
  console.log(' playing trakc',playing_track);
 
  return (
    <div className="app">                
    {
      token?<Player spotify={spotify}/>:<Login/>
    }
             
    </div>
  );
}
//prop drilling is a problem of passing on 
//props deeper into  component hierarchy
//Disadvantages: messy code, not production ready, 
//can break code easily when making changes in one component
//solution is redux  or react context API

export default App;
