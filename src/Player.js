import React from "react";
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body'
import Footer from './Footer'

const Player = ({spotify}) => {
    return ( 
      <React.Fragment>
        <div className="Player">
       <div className="Player_Body">
       <Sidebar/>
       <Body spotify={spotify}/>
       </div>
       
      <Footer/>

       </div>
      </React.Fragment>
       
     );
}
 
export default Player;