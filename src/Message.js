import { Avatar } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
// import { db } from "./firebase"
// import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import "./Message.css";

function Message({ keyId, timestamp, user, message, fullmessage }) {
//   const deleteMessage = async (keyId) => {
//     // const collectionRef = collection(db, "channels")
//     // const q = query(collection)

//     await deleteDoc(doc(db, "messages", keyId)
// )}

  return (
    <div className='message' key={keyId}>
        <Avatar src={user.photo} />
        <div className="message__info">
            <h4>
                {user.displayName}
                <span className='message__timestamp'>
                  {new Date(timestamp?.toDate()).toUTCString()}
                </span>
            </h4>
            <p>
              {message}
              {/* <EditIcon />
              <DeleteOutlineIcon className="message__deleteChannel" onClick={() => deleteMessage(keyId)} /> */}
            </p>
        </div>
    </div>
  );
}

export default Message;
