import React from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar() {
    return ( 
        <div className="sidebar">
            <div className='sidebar__top'>
                <h3>Clever Programmer</h3>
                <ExpandMoreIcon/>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebarHeader">
                    <ExpandMoreIcon/>
                    <h4>Text Channels</h4>
                    </div>

                    <AddIcon className="sidebar__addChannel"/>
                </div>

                <div className="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon
                className="sidebar__voiceIcon"
                fontSize="large"
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoIcon />
                    <CallIcon />
                </div>
            </div>

            <div className="sidebar__profile">
               <Avatar src='https://res.cloudinary.com/drqgfjtni/image/upload/v1642629799/B0A0563A-E7BD-4CDB-B42A-B0E8D8A10943_ggogvk.jpg'/> 
               <div className="sidebar__profileInfo">
                   <h3>Kweli Hall</h3>
                   <p>#thisIsMyID</p>
               </div>

               <div className="sidebar__profileIcons">
                   <MicIcon />
                   <HeadsetIcon />
                   <SettingsIcon />
               </div>
            </div>
        </div>
    );
}

export default Sidebar;
