import React , {useState , useEffect} from 'react'
import './Sidebar.css'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import SidebarChat from './SidebarChat';
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp';
import {Avatar , IconButton} from "@material-ui/core"
import { Link } from 'react-router-dom';

import db from './firebase';
import {useStateValue} from "./StateProvider"
function Sidebar(){

     const [rooms , setRooms]= useState ([]);
     const [{user} ] = useStateValue();
    useEffect(()=>{
      db.collection("rooms").onSnapshot( snapshot=> (
          setRooms(snapshot.docs.map(doc=>
            ({
                id: doc.id,
                data : doc.data(),
            }))
            )
      ))
      
         
     },[]);
    return(
        <div className="sidebar" >
         <div className="sidebar__header">
      <div className="Name__heading" >   <Link to="/" > <KeyboardBackspaceSharpIcon  style={{color:"white" , marginRight:"5px" }} /> </Link> <Avatar src={`https://joeschmoe.io/api/v1/abcdef${user.displayName}`}  /> <h2>{user.displayName}</h2> </div>   
         <div className="sidebar__headerRight" >
            
            <Link to={`/User/${user.uid}/Profile`}className="Iconhov" >
              My Profile
            <AssignmentIndIcon  style={{color:"white"}}/>
            </Link>
         </div>
         </div>

        {/* <div className="sidebar__search">
             <div className="sidebar__searchContainer">
             < SearchOutlined/>
           <input placeholder="Search Users" type="text" />
             </div> 
         </div>
    */}
         
         <div className="sidebar__chats">
           <h2 style={{textAlign:"center" , margin:"10px 0px 10px 0px" , color:"darkblue"}} >My Groups</h2>
          
           <IconButton><SidebarChat addNewChat /></IconButton> 
            {rooms.map(room=>(
                <SidebarChat key={room.id} id={room.id}
                name={room.data.name} />
            ))}
          
            
         </div>
         
        </div>
        
    )
}
export default Sidebar