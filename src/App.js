import './App.css';
import React,{useEffect,useState} from 'react'
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';
import Player from './Components/Player';
function App() {
  const [token, setToken] = useState(null)

 useEffect(() => {
       const hash = getTokenFromUrl();
       window.location.hash='';
       const _token = hash.access_token;

       if(_token){
         setToken(_token)
       }
 }, [])

  return (
    <div className="app">                
    {
      token?(<Player/>):<Login/>
    }
             
    </div>
  );
}

export default App;
