import React ,{useEffect , useState} from 'react'
import './SidebarChat.css'
import { Link } from 'react-router-dom';
import {Avatar } from "@material-ui/core"
import GroupIcon from '@material-ui/icons/Group';
import db from './firebase';

function SidebarChat({ id , name, addNewChat}) {
const [messages , setMessages] = useState("")


useEffect(() => {
    if (id) {
        db.collection ('rooms').doc(id).collection('messages').orderBy('timestamp' , 'desc').onSnapshot(snapshot =>(
           setMessages(snapshot.docs.map((doc)=>doc.data()))
        ))
    }
}, [id]);


const createChat = ()=>{
    const roomName = prompt ("Please enter name for new chat room or group");

    if (roomName) {
      db.collection('rooms').add({
            name: roomName ,
        });
    }
};
    return !addNewChat ? (
        
        <>
       
     {/* <h2 style={{textAlign:"center", cursor:"default"  , paddingBottom:"20px" , display:"flex" , alignItems:"center" , justifyContent:"center" , borderBottom:" 1px solid gray"  }} > <GroupIcon /> &nbsp;&nbsp; My Groups &nbsp;&nbsp;   <GroupIcon /> </h2> */}

        <Link to={`/rooms/${id}`}>
            
      <div className="sidebarChat" >
          <Avatar src={`https://avatars.dicebear.com/api/bottts/:a${name}.svg`} />
            <div className="sidebarChat__info" >
               <h2>{name}</h2>
               <p style={{marginLeft:"10px"}} >  {messages[0]?.message} </p>
           </div>
          
        </div>
        
        </Link>
     </>   
    ):(<div className="hide">
        <div onClick={createChat} 
        className="sidebarChat">
            <h2>Create New Room</h2>
        </div>
        </div>
    );
}

export default SidebarChat