import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <>
    <Header/>
    <div className='flex'>
      <Sidebar/>
       <Outlet/>
    </div>
    </>
  )
}

export default Body
