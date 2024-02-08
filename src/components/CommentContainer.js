import { useEffect, useState } from "react"
import Comment from "./Comment"
import { COMMENTS_API } from "../utils/constants"
import Realcomments from './Realcomments'
import { useSearchParams } from "react-router-dom"

const commentsData=[
    {
     name:"sravani",
     text:"dummy comment for now",
     replies:[
       {
         name:"sravani",
         text:"dummy comment for now"
        },
        {
         name:"sravani",
         text:"dummy comment for now",
         replies:[
           {
             name:"sravani",
             text:"dummy comment for now"
            },
            {
             name:"sravani",
             text:"dummy comment for now",
             replies:[
               {
                 name:"sravani",
                 text:"dummy comment for now"
                },
                {
                 name:"sravani",
                 text:"dummy comment for now"
                }
             ]
            }
         ]
        }
     ]
    },
     {
     name:"sravani",
     text:"dummy comment for now"
    },
    {
     name:"sravani",
     text:"dummy comment for now",
     replies:[
       {
         name:"sravani",
         text:"dummy comment for now"
        },
        {
         name:"sravani",
         text:"dummy comment for now",
         replies:[
           {
             name:"sravani",
             text:"dummy comment for now"
            },
            {
             name:"sravani",
             text:"dummy comment for now"
            }
         ]
        }
        
     ]
    }
   
   ]

  



const CommentList=({comments})=>{
    
  return comments.map((comment,i)=><Comment key={i} data={comment} replies={comment.replies}/>)
}



const CommentContainer = () => {
  const[comments,setComments]=useState([])
  const [searchparams]=useSearchParams()
  const videoId=searchparams.get("v")
  useEffect(()=>{
   getCommentsData()
  },[])
  async function getCommentsData(){
      const data=await fetch(COMMENTS_API+videoId)
      const json=await data.json()
      setComments(json?.items)
  }
 
  if(!comments) return <CommentList comments={commentsData}/>
  return (
   <>
      <div>
         <h1 className='font-bold'>Comments:</h1>
         {comments.map((cmnt)=> <Realcomments key={cmnt.id} commentInfo={cmnt}/>)}
        
      </div>
   </>
  )
}

export default CommentContainer
