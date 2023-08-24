import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import Livechat from './Livechat'
import Relatedsuggestions from './Relatedsuggestions'
import { ChevronDownCircle } from 'lucide-react';
import { useEffect,useState } from 'react';
import Videodetails from './Videodetails';
import { useDispatch,useSelector } from 'react-redux';
import { closeMenu } from '../utils/redux/sidebarSlice';
const Watchpage = () => {
  const [searchparams]=useSearchParams()
  const[acordionClick,setAcordionClick]=useState(false)
  const videoId=searchparams.get("v")
  const dispatch=useDispatch()

  const toggle=useSelector(store=>store.sidebar.isMenuOpen)
 
  useEffect(()=>{
        dispatch(closeMenu())
  },[videoId])
  return (
    <>
  <div className={toggle ? 'flex':'flex pl-14 m-2'}>
      <div className={toggle? 'p-2 m-2 w-[650px]' :'p-2 m-2 w-[750px]'}>
          <iframe className={toggle?'w-[650px]':'w-[750px]'}  height="400" src={"https://www.youtube.com/embed/"+videoId}  
          title="YouTube video player"allowFullScreen>
          </iframe>
          <Videodetails videoId={videoId}/>
         <CommentContainer/>
      </div>


           <div className='m-3'>
              <div>
                     <div className='border border-x-black border-t-black mx-2 p-2 bg-slate-100 rounded-lg'>
                        <h2 className='font-bold py-1 ml-2 flex justify-between w-96'
                                    onClick={()=>setAcordionClick(!acordionClick)}>LiveChat
                                    <ChevronDownCircle  />
                           </h2>
                       </div>
                       
                       {acordionClick && 
                                 <div className=' h-[350px] mx-2 p-2 bg-slate-100 rounded-lg'>
                                    <Livechat/>
                                   </div>
                        }
            
                </div>
                <div className='m-3 p-3'>
                    <Relatedsuggestions/>
                </div>
               
          </div>
  </div>
    </>
  )
}

export default Watchpage
