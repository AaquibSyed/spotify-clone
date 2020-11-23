//http://developer.spotify.com/
//documentation/web-playback-sdk/quick-start/#

//when user clicks on login , 
//then send user to authenticate using this endpoint
export const authEndpoint =
'http://accounts.spotify.com/authorize';

//After authentication, redirect to this link
const redirectUri = 'http://spotify-clone-aaq.web.app/';

const clientId  = '30f07a17db594c4ea9da5a786a143345';

//Scopes - very important, send user to spotify and include bunch of scopes
//these scopes let the spotify clone app to have access to scopes included in the clone
//Basically grant user a set of permissions
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
]

//Login URL
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`


//after successful authentication , get the access token from response ur
export const getTokenFromUrl =()=>{
   //access token = mysjdfjdfjrg&name=sfjfj&nffnff
   //get substring til &ampersand
   //split at = sign 
   return window.location.hash
   .substring(1)
   .split('&')
   .reduce((initial,item)=>{     
      let parts = item.split('=');
      initial[parts[0]]=decodeURIComponent(parts[1])
      return initial;
 },{})
}