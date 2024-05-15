import React from "react";
import { BG_IMG} from "../utils/constants";

const FoodItem = () => {
  return (
    <div className="w-56 p-4 m-3 h-68 border border-gray-100 bg-gray rounded-md hover:shadow-lg bg-gray-50 ">
        <img
          className="rounded-md drop-shadow-sm"
          src={BG_IMG}
        />
        <h2 className=" text-md font-semibold py-1">name</h2>
        <h2>₹ 100</h2>
      </div>
  )
}

export default FoodItem