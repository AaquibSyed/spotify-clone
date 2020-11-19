export const initialState = {
    user:null,
    //remove after development
    token:'BQDIHiD_nEJyfBV5hkNwoTVHnBjoDTyp1JU9fGq33kjVnj_IL-Iju7vBYzoM7aco5famzoj6Y9DFeQovbhlp6p_kBoRJSwoH2AGoqLO3lmMYnDl5MAjqfRHCkCzVw26-ocv7574cFeJ5TtI_6heFwrejO7KkmIebvA5QIS3nvfFXnOMT',
    playLists : [],
    playing:false,
    item:null,
    discover_weekly:null
}

const reducer = (state,action)=>{
    //Action -> type,[PAYLOAD]
   console.log(action);

   switch(action.type){
       case 'SET_USER':
           return{
               ...state,
               user:action.user
           }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }   
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            } 
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly:action.discover_weekly
            }       
           default:
               return state;
   }
}

export default reducer;