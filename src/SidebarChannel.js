import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from './features/appSlice';
import "./SidebarChannel.css";
import { deleteDoc, collection, query, doc } from 'firebase/firestore';
import { db } from "./firebase"

function SidebarChannel({id, channelName }) {
    const dispatch = useDispatch();

    const deleteChannel = async (channelId) => {
        // const collectionRef = collection(db, "channels")
        // const q = query(collection)

        await deleteDoc(doc(db, "channels", channelId)
    )}


    return (
        <div className='sidebarChannel' 
        onClick={() => 
            dispatch(
                setChannelInfo({
                    channelId: id, 
                    channelName: channelName,
                })
            )
        }
        >
            <h4>
                <span className='sidebarChannel__hash'>#</span>
                {channelName}
                <RemoveIcon onClick={() => deleteChannel(id)} className='sidebarChannel__deleteChannel' />
            </h4>
        </div>
    );
}

export default SidebarChannel;

