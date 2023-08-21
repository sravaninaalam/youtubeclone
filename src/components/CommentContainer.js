import Comment from "./Comment"

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
  return (
   <>
      <div>
         <h1 className='font-bold'>Comments:</h1>
         <CommentList comments={commentsData}/>
      </div>
   </>
  )
}

export default CommentContainer
