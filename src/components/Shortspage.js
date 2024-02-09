import ShortsShimmer from './ShortsShimmer'
import useShortsApi from '../customhooks/useShortsApi'

const Shortspage = () => {
    
   
   const shorts=useShortsApi()
 if(shorts.length===0)return <ShortsShimmer/>
  return (
   <>
        <div className='w-2/12 mx-auto  my-5 '>
           {shorts.map(s=><div key={s?.id?.videoId} className='my-5'>
             <iframe 
              width="290" height="490" title='YouTube video player'
              src={"https://www.youtube.com/embed/"+s?.id?.videoId}></iframe> 
           </div>)}
            
        </div>
   </>
  )
}

export default Shortspage
