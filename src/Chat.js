import React , { useState , useEffect } from 'react'
import { useParams } from 'react-router';
import './Chat.css'
import { Avatar , IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import ReactScrollableFeed from 'react-scrollable-feed';
import SendIcon from '@material-ui/icons/Send';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';
function Chat() {
    const [input , setInput] = useState("");
    const { roomId} = useParams ();
    const [roomName , setRoomName] = useState("");
    const [messages , setMessages] = useState ([]);
    const [{user}  ] = useStateValue();
      useEffect (() => {
         if(roomId) {
           db.collection('rooms').doc(roomId).onSnapshot(snapshot =>
             setRoomName(snapshot.data().name));
                db.collection('rooms').doc(roomId).collection("messages").orderBy
                ('timestamp' , 'asc').onSnapshot(snapshot=> (
                    setMessages(snapshot.docs.map(doc=> doc.data()))
                )
                )
         }
      }, [roomId]
      )
    const sendMessage = (e)=>{
        e.preventDefault();
        console.log('You Typed>>>', input);
        
        

            db.collection('rooms').doc(roomId).collection
            ('messages').add({
                message : input,
                name : user.displayName,
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            })

        setInput("");
    }

   

    return(
        <>

        <div className="chat">
            <div className="chat__header" >
                <Avatar src={`https://avatars.dicebear.com/api/bottts/:a${roomName}.svg`} />
                
                <div className="chat__headerInfo" >
                    <h3> {roomName}</h3>
                    <p> Last Active {" "} 
                        {new Date(
                    messages[messages.length -1 ]?.timestamp?.toDate()).toLocaleString({timezone: 'India/New_Delhi'})}
                    </p>
                </div>
               <div className="chat__headerRight" >
                 

                
                       <Link to="/rooms"><IconButton><CloseIcon  style={{color:"white"}} alt="close" /></IconButton></Link>
                      
                   
               </div>
                </div>
                <ReactScrollableFeed>
                <div className="chat__body"  >
              
                 
                                         {messages.map(message=>(
                     
                    <p className={`chat__message ${ message.name=== user.displayName &&'chat__reciever' }`} ><Avatar   className="user__chat__avatar__reciever "src={`https://joeschmoe.io/api/v1/abcdef${message.name}`} /> <span className="chat__name" > 
                    
                     {message.name }     </span>   {message.message}  <Avatar   className="user__chat__avatar__sender "src={`https://joeschmoe.io/api/v1/abcdef${message.name}`} /><br/>
                    <span className="chat__timestamp" >
                        {new Date(message.timestamp?.toDate() ).toLocaleString({timezone: 'India/New_Delhi'})}
                    </span>
                    

                    </p> 
                
                    
                  )) 
                    }
                                      
                    </div> 
                    </ReactScrollableFeed>   
                    
             <div className="chat__footer" >
               
                 <form  >
                     <input value={input} onChange={e => setInput(e.target.value) } type="text/images" placeholder="Type a message . . ." />
                     <button onClick={sendMessage} type="submit" className="sendbutton" ><SendIcon/></button>                    
                 </form>
                 
                 
             </div>
                
        </div>
        <div>
     
    </div>
  
        </>
    )
                    }
                
           
export default Chat;
    