import React from 'react'
import './Welcome.css'
import ChatIcon from '@material-ui/icons/Chat';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
function Welcome() {
  const [{user} , dispatch] = useStateValue();
    return (
        <div className="Welcome" >
           <div className="User__Welcome">
         <div>   <img src="https://image.freepik.com/free-vector/group-therapy-illustration_74855-5516.jpg" width="100%" height="100%" alt="welcome"/>
            <h1>Hello&nbsp;{user.displayName}, Welcome to Aapsi Baate</h1>
            <br/>
             <p> Open a Group and start messaging <ChatIcon style={{color:"blue"}} /> </p>
             <br/>
             <p> This is primary project , Your messages are public But Email-Id and UserImage are private</p>
             </div>
             <div className="Continue__Links" >
             <Link to="/rooms" class="Continue__Text"  > <Button className="Continue__Buttons">My Groups</Button></Link>
             <Link to="/New" class="Continue__Text"  > <div className="blue">What's New Here ? </div></Link>
             </div>
             
           </div>
        </div>
    )
}

export default Welcome
