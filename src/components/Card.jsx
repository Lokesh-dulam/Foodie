/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { CDN_URL } from "../utils/constants"

const Card = (props) => {
    const {ResData}=props
    const{cloudinaryImageId,name,cuisines,costForTwo,locality,avgRating}=ResData?.info   
  return (
 <div className="rounded-lg bg-slate-200 shadow-xl cursor-pointer hover:border border-black min-h-[40vh]">
        <img src={CDN_URL+cloudinaryImageId} alt="logo" className="rounded-lg w-full h-[200px] object-cover mb-1"/>
        <div className="p-2">
        <h1 className="font-semibold">{name}</h1>
        <h2 className="font-semibold text-sm">{cuisines.join(", ")}</h2>
        <p>{costForTwo}</p>
        <p>{locality}</p>
        <p>{avgRating} - Rating</p>
      </div>
        </div>
  )
}
export default Card