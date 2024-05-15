import {BG_IMG} from "../utils/constants"
import Navbar from "./Navbar"
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ResMenu = () => {
  const dispatch = useDispatch();
    function addFoodItem(item) {
    dispatch(addItem(item));
  }
  return (
    <>
    <Navbar/>
      <div className="h-72 w-96 ml-52 pt-40">
      <img src={BG_IMG} alt="logo" className="rounded-lg w-full max-h-[175px] object-cover mb-1"/>
      <div className="p-2">     <h1 className="font-bold bg-clip-content truncate break-words text-lg">name</h1>
     <h2 className="flex-wrap bg-clip-content truncate font-semibold text-sm">cuisines</h2>
     <p className="font-semibold">Locality</p>
     <div className="flex">
     <p className="text-white mt-2 w-12 h-6 font-medium">
         <span className="pr-5 py-1 text-base bg-red-600 rounded-md">
           ⭐4
         </span>
       </p>
       <p className="pl-6 pt-2 font-semibold">| costForTwo</p>
       <button
                 onClick={() => addFoodItem()}
                 className="bg-green-700 h-10 p-2 px-3 text-white rounded-md ml-8 hover:bg-green-600"
               >
                 Add
               </button>
          </div>
      </div>
    </div></>
  )
}

export default ResMenu