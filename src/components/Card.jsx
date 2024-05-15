/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { CDN_URL } from "../utils/constants"

const Card = (props) => {
    const {ResData}=props
    const{cloudinaryImageId,name,cuisines,costForTwo,locality,avgRating}=ResData?.info   
  return (
 <div className="hover:scale-90 rounded-lg bg-slate-100 shadow-xl cursor-pointer max-h-[450px]">
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
          </div>
      </div>
        </div>
  )
}

export default Card