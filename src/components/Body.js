
import { Outlet } from "react-router-dom";


const Body = () =>{
   
    return(
        <div className="body-wrapper h-100dvh">
           <Outlet/>
        </div>
    )
}

export default Body;