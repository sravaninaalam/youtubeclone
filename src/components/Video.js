import { useSelector } from "react-redux"
import { timeDifference,countViews } from "../utils/helper"

const Video = ({videos}) => {
    const{snippet}=videos
    const{publishedAt,channelTitle,thumbnails,title}=snippet
    const viewCount=videos?.statistics?.viewCount
    const published=new Date(publishedAt)

    const toggle=useSelector(store=>store.sidebar.isMenuOpen)
  return (
   <>
        <div className={toggle ?'w-[360px] shadow-sm' :'w-[400px] shadow-sm pl-5 m-2'}>
            <img src={thumbnails?.medium?.url} alt={title}/>
            <h3 className='font-bold'>{title}</h3>
            <h3>{channelTitle}</h3>
            <h4>{countViews(viewCount)}-views   {timeDifference(published)}</h4>
        </div>
   </>
  )
}

export default Video
