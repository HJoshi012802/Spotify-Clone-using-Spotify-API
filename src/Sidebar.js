import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/HomeRounded';
import SearchIcon from '@mui/icons-material/SearchRounded';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusicRounded';

import { useDataLayerValue } from './DataLayer';

const Sidebar = () => {
    const[{playlists},dispatch]= useDataLayerValue();
    return ( 
    <div className='Sidebar'>
        <img className='side_logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=''/>
        <SidebarOptions Icon={HomeIcon} title="Home"/>
        <SidebarOptions Icon={SearchIcon} title="Search"/>   
        <SidebarOptions Icon={LibraryMusicIcon} title="Your Library"/>

        <br/>
        <strong className='sidebar_title'>PLAYLISTS</strong>
        <hr/>
        {playlists?.items?.map((playlist) => (
        <SidebarOptions key={playlist.name} title={playlist.name} />
      ))}
        
    </div>
     );
}
 
export default Sidebar;