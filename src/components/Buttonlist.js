function Buttonslist(){
    const btn_list=["All","Gaming","Live","Newtoyou","Music","Cricket","Mix","Songs","Cooking"]
  
    return(
        <>
        <div className="flex">
            {btn_list.map((btn,index)=><button key={index} className="py-2 px-5 bg-slate-200 m-2 rounded-lg">{btn}</button>)}
        </div>
        </>
    )
}

export default Buttonslist