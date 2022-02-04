import React from 'react';
import './ChatHeader.css';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import VideocamIcon from '@mui/icons-material/Videocam';
import PushPinIcon from '@mui/icons-material/PushPin';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';


function ChatHeader({ channelName }) {
  return (
    <div className='chatHeader'>
        <div className="chatHeader__left">
            <h3>
                <span className='chatHeader__hash'>#</span>
                {channelName}
            </h3>
        </div>

        <div className="chatHeader__right">
            <WifiCalling3Icon />
            <VideocamIcon />
            <PushPinIcon />

            <div className="chatHeader__search">
                <input placeholder="Search" />
                <SearchIcon />
            </div>

            <InboxIcon />
            <HelpIcon />
        </div>
    </div>
  );
}

export default ChatHeader;
