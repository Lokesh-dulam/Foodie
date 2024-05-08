/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { CDN_URL } from "../utils/constants"
const ResMenuCard = (props) => {
    const {ResMenuData}=props
    const{cloudinaryImageId,name,costForTwo}=ResMenuData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info 
  return (
      <div className="w-48 justify-between flex rounded-lg bg-slate-200 shadow-xl cursor-pointer hover:border border-black">
        <div className="p-2">
        <h1>{name}</h1>
        <p>{costForTwo}</p>
        </div>
        <div>
        <img className="h-full w-28" src={CDN_URL+cloudinaryImageId} alt="image"/></div>
    </div>
  )
}
export default ResMenuCard
