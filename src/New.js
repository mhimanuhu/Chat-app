import React from 'react'
import './New.css'
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp';
import BubbleChartIcon from '@material-ui/icons/BubbleChart'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import {  Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function New() {


    return (
        <>
        <div style={{position:"absolute" }}>
           <Link to="/" > <KeyboardBackspaceSharpIcon  style={{ paddingTop:"20px" , paddingLeft:"20px" }} /> </Link>
        </div>
        <div className="New__container" >
            <div className="Updates" > 
            <img src="https://image.freepik.com/free-vector/people-using-appointment-business-application_179970-928.jpg" className="newimg" alt="what's new" width="100%" height="50%" />
           <h1>What's New</h1>
           <div className="Update__Point" >
               <p> <BubbleChartIcon style={{color:"blue"}} />Whole New Interface</p>
           </div>
           <div className="Update__Point" >
               <p> <BubbleChartIcon style={{color:"blue"}} /> Check profile using this icon available on rooms page <AssignmentIndIcon /> </p>
           </div>
           <div className="Update__Point" >
               <p> <BubbleChartIcon style={{color:"blue"}} /> Interactive Avatars added , You can change them by changing name of your Google Account</p>
           </div>
           <div className="Update__Point" >
               <p> <BubbleChartIcon style={{color:"blue"}} />Now Available in Mobiles </p>
           </div>
           <div className="Update__Point" >
               <p> <BubbleChartIcon style={{color:"blue"}} /> Few Bugs fixed </p>
           </div>

           <div>
           <Link to="/" className="Back" style={{ display:"flex" ,  justifyContent:"center" }} >  <Button  >    <KeyboardBackspaceSharpIcon/> Back </Button> </Link>
           </div>
           </div>
          
        </div>
        </>
    )
}

export default New
