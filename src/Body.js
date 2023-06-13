import React from 'react';
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';


const Body = ({ spotify }) => {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

    return ( 
        <div className='Body'>
            <Header spotify={spotify} />
          <div className='Body_info'>
            <img src={discover_weekly?.images[0].url}/>
            <div className='Body_infoText'>
              <strong>PLAYLIST</strong>
              <h1>Discover Weekly</h1>
              <p>{discover_weekly?.description}</p>
            </div>
          </div>
          <div className='Body_songs'>
                <div className='body_icons'>
                  <PlayCircleIcon className='body_shuffle'/>
                  <FavoriteIcon fontSize='large'/>
                  <MoreHorizIcon/>
                </div>
                {discover_weekly?.tracks.items.map(item=>(
                  <SongRow track={item.track}/>
                ) )}
          </div>
        </div>
     );
}
 
export default Body;
