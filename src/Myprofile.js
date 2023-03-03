import React from 'react'
import './Myprofile.css'
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import {Button } from '@material-ui/core';
function Myprofile() {
    const [{user} , dispatch] = useStateValue();
    return (
       <>
       <div className='Profile_Page'>
               
                     {/*{user?.photoURL}  /> */}

                
            {/* {user.displayName}
                
                 }
            {/* {user.email}
                
                {user.uid}
            > */}
           
        <h1>My Profile</h1>
       <div className="Profile_Card_Container">
            <div className='ProfileCard'>
                <img src={user?.photoURL} alt="UserImage" title="User Image" width={150} height={150} />
                <div className='title'><strong>Name :</strong>&nbsp;{user.displayName} </div>

                <div className='title'><strong>Email :</strong>&nbsp;{user.email}</div>

                <div className='title'><strong>User Id :</strong>&nbsp;{user.uid}</div>
            </div>
            <div className="backtorooms">
           <Link to="/rooms" ><Button>Back To Group</Button></Link>
       </div>
       </div>
       </div>
       </>
    )
}

export default Myprofile
