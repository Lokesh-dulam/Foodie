const Shimmer = () => {
  return (
    <div>
    {/* <div className="h-20 w-full bg-slate-200 shadow-lg"></div> */}
      <div className="w-80 bg-slate-200 rounded-lg shadow-lg h-10">
    </div>
      <div className="grid grid-cols-5 px-12 gap-5 mt-14">
        {[0,0,0,0,0,0,0,0,0].map((e,index)=><div key={index} className="h-60 w-52 rounded-lg bg-slate-200 shadow-xl m-4"></div>)}
 </div>
 </div>
  )
}
export default Shimmer