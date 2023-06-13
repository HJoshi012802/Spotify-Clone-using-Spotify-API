import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import './App.css';
import { useEffect } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() { 

 const[{user,token},dispatch]= useDataLayerValue();   //dispatch can pull any point{user,token} in the component tree from DataLayer


 
  useEffect(()=>{
    const hash = getTokenFromUrl();
   // Window.location.hash='';      //clear access for security
    const _token =hash.access_token;

    if(_token){

      dispatch({                   //this will pop in the token in the Data Layer
        type:'SET_TOKEN',
        token:_token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user=>{
        dispatch({                  //this will pop in the user in the Data Layer
          type:'SET_USER',
          user:user,
        });
      });
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
       

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    } 
    

    spotify.getPlaylist('37i9dQZEVXcIwxdBlRKLvb').then(respone=>{
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly:respone,
      });
    }
      
    )

  },[]);
   

  return (
    <BrowserRouter>
    <div className='app'>
      {token ? <Player spotify={spotify}/> : <Login/>}
    </div>
    </BrowserRouter>
    
  );
}

export default App;


//The dispatch function returned by useReducer lets you update the state to a different value and trigger a re-render.