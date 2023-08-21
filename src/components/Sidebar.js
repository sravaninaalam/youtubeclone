import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Home,WalletCards,Unlink, BookCopy ,History,Download,ThumbsUp } from 'lucide-react'
import { Music, Trophy , Gamepad2 ,Newspaper, Clapperboard, Radio, LeafyGreen} from 'lucide-react';
const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.sidebar.isMenuOpen)

   return(
    <>
    {isMenuOpen &&
        <div className='shadow-lg m-2 p-2 '>
            <ul className='m-2 p-2 font-normal'>
              <Link to='/'><li className='py-2 flex'><Home className='mr-2'/>Home</li></Link>  
                <li className='py-2 flex'><Unlink className='mr-2'/>shorts</li>
                <li className='py-2 flex'><WalletCards className='mr-2'/>Subscriptions</li>
            </ul>
            <ul className='m-2 p-2 font-normal'>
                <li className='py-2 flex'><BookCopy className='mr-2'/>Library</li>
                <li className='py-2 flex'><History className='mr-2'/>History</li>
                <li className='py-2 flex'><Download className='mr-2'/>Downloads</li>
                <li className='py-2 flex'><ThumbsUp className='mr-2'/>Liked Videos</li>
            </ul>
            <ul className='m-2 p-2 font-normal'>
                <h1 className='font-bold'>Explore</h1>
                <li className='py-2 flex'><LeafyGreen className='mr-2'/>Trending</li>
                <li className='py-2 flex'><Radio className='mr-2'/>live</li>
                <li className='py-2 flex'><Gamepad2 className='mr-2'/>Gaming</li>
                <li className='py-2 flex'><Trophy className='mr-2'/>Sports</li>
                <li className='py-2 flex'><Music className='mr-2'/>Music</li>
                <li className='py-2 flex'><Newspaper className='mr-2'/>News</li>
                <li className='py-2 flex'><Clapperboard className='mr-2'/>Movies</li>
            </ul>
        </div>
}
    </>
  )
}

export default Sidebar
