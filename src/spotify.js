//http://developer.spotify.com/
//documentation/web-playback-sdk/quick-start/#

//when user clicks on login , 
//then send user to authenticate using this endpoint
export const authEndpoint =
'http:///accounts.spotify.com/authorize';

//After authentication, redirect to this link
const redirectUri = 'http://localhost:3000/';

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
