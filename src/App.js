import React  from "react";
import './App.css';
import Login from "./Login";
import Chat from './Chat';
import New from "./New";
import Welcome from "./Welcome";
import { BrowserRouter as Router , Switch , Route} from "react-router-dom"
import { useStateValue } from "./StateProvider";
import Sidebar from './Sidebar';
import Myprofile from "./Myprofile";

function App() {
  const [ {user} ] = useStateValue();
  return (
  <>
     <h2 className="Mobile__Alert" >Not Compatiable on Your Device</h2>
       <p className="Mobile__Alert" > #Only Available in Laptop and computer</p>
    <div className="App">
      {!user ? (
        <Login/>
      ) : (

     <div className="app__body">

 
       <Router>
      
       
         <Switch>
        
           <Route exact path="/rooms/:roomId" >  
           <Chat />
           </Route>
           <Route exact path="/rooms" >
             <Sidebar/>
           </Route>
            
      <Route exact path={`/User/${user.uid}/Profile`} > <Myprofile/> </Route>
      <Route exact path="/" > 
      <Welcome/> 
       </Route>

      <Route exact path="/New">
         <New/> 
         </Route>
     
             
         </Switch>
       </Router>
     
     </div>
     
      )
    }
    </div>
  </>
  );
}

export default App;
