import Body from "./components/Body"

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Watchpage from "./components/Watchpage"
import Maincontainer from "./components/Maincontainer"
// import Searchpage from "./components/Searchpage"
import { lazy, Suspense } from "react"
import Shortspage from "./components/Shortspage"


const Searchpage=lazy(()=>import('./components/Searchpage'))
const appRouter=createBrowserRouter([
   {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/watch',
        element:<Watchpage/>
      },
      {
        path:'/',
        element:<Maincontainer/>
      },
      {
        path:'search',
        element:<Suspense><Searchpage/></Suspense>
      },
      {
        path:'shorts',
        element:<Shortspage/>
      }
    ]
   },
   
])


function App(){

  return(
    <>
        <div>
         
           <RouterProvider router={appRouter}/>
        </div>
    </>
    )
}
export default App