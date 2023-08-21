const Shimmer = () => {
    return (
      <div className='flex flex-wrap'>
        {Array(20).fill("").map((e,index)=><div key={index} className='w-64 h-64 bg-gray-300 m-3 p-2'></div>)}
      </div>
    )
  }
  
  export default Shimmer
  