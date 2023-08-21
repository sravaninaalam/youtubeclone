
import { timeDifference} from '../utils/helper'

const Searchcard = ({videos}) => {
    const {snippet}=videos
    const{title,publishedAt,thumbnails,channelTitle,description}=snippet
    const publishedDate=new Date(publishedAt)
    
  return (
    <>
            
            <div className='flex'>
                    <img src={thumbnails?.high?.url} className='m-3 p-3 h-[330px] w-[450px] rounded-lg' alt={title}/>
                    <div className='mt-5 p-3'>
                        <h1 className='font-semibold'>{title}</h1>
                       <h2 className='my-2'>{timeDifference(publishedDate)}</h2>
                       <h3 className='my-2 font-medium'>{channelTitle}</h3>
                       <h4 className='my-2'>{description}</h4>
                    </div>
            </div>
    </>
  )
}

export default Searchcard
