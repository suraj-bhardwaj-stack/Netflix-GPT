import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () =>{
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }
    ])
    return(
        <div className="body-wrapper h-100dvh">
             <RouterProvider router={appRouter} />
            {/* <Login/>
            <Browse/> */}
        </div>
    )
}

export default Body;