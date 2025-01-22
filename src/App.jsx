
import Login from "./components/login"
import Logout from "./components/Logout"
import { useState } from "react";
function App() {
 const[isLoggedIn,setLoggedIn] = useState(true);
 
// if else case

//  if(isLoggedIn){
//   return (
//     <Logout/>
//    )
//   }
//   else{
//     return( 
//        <Login/>
//     )
//   }

if (!isLoggedIn){
  return(
    <Login/>
  )
}


  return (
    //  tarnary opreter
    // <div>
    // {/* {isLoggedIn? <Logout/> : <Login/>} */}
    //  <h1>my name is monika chahar in mca student</h1>
    // </div>

    //  logical opreter
    <div>
      <h1>my name is monika chahar in mca student</h1>
      <div>
        {isLoggedIn && <Logout/>}
      </div>
    </div>

  );
}

export default App
