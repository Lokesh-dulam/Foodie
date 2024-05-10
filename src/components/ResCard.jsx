/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Card = (props,{items}) => {
    const dispatch = useDispatch();
  
    const handleAddItem = (item) => {
      dispatch(addItem(item));}
    const {ResData}=props
    const{cloudinaryImageId,name,cuisines,costForTwo,locality,avgRating}=ResData?.info   
  return (
 <div className="rounded-lg bg-slate-100 shadow-xl cursor-pointer max-h-[450px]">
        <img src={CDN_URL+cloudinaryImageId} alt="logo" className="rounded-lg w-full max-h-[175px] object-cover mb-1"/>
        <div className="p-2">
        <h1 className="font-bold bg-clip-content truncate break-words text-lg">{name}</h1>
        <h2 className="flex-wrap bg-clip-content truncate font-semibold text-sm">{cuisines.join(", ")}</h2>
        <p className="font-semibold">{locality}</p>
        <div className="flex">
        <p className="text-white mt-2 w-12 h-6 font-medium">
          {avgRating < 4.3 ? (
            <span className="pr-5 py-1 text-base bg-red-600 rounded-md">
              ⭐{avgRating}
            </span>
          ) : (
            <span className="pr-5 py-1 text-base bg-green-600 rounded-md">
              ⭐{avgRating}
            </span>
          )}
          </p>
          <p className="pl-6 pt-2 font-semibold">| {costForTwo}</p>
          <button 
          onClick={()=>handleAddItem(items)}
          className="ml-5 px-4 py-2 bg-black text-white rounded-lg">Add + </button>
          </div>
      </div>
        </div>
  )
}
export default Card