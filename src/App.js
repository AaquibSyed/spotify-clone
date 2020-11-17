import './App.css';
import React,{useEffect,useState} from 'react'
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';
import Player from './Components/Player';
import spotifyWebApi from 'spotify-web-api-js' 
import { useDatLayerValue } from './DataLayer';

const spotify = new spotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const[{},dispatch] = useDatLayerValue();

 useEffect(() => {
       const hash = getTokenFromUrl();
       window.location.hash='';
       const _token = hash.access_token;

       if(_token){
         setToken(_token);

         spotify.setAccessToken(_token);
         
         //get current user data         
         spotify.getMe()
         .then((user)=>{
           console.log(user)
         })
        }

 }, [])

  return (
    <div className="app">                
    {
      token?<Player/>:<Login/>
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
