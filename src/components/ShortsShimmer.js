const ShortsShimmer = () => {
    return (
      <div className="w-2/12 mx-auto  my-5 ">
       
  {Array(20).fill("").map((index)=><div key={index} className='w-64 h-80 bg-gray-200 m-3 p-2'></div>)}
    </div>
    );
  }
  
  export default ShortsShimmer;