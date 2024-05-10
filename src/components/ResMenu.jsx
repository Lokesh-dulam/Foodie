<<<<<<< HEAD

=======
>>>>>>> 0873af3829555816bf2078bbb4ee56dbca4d0e29
import { useState } from "react"
import { useEffect } from "react"
import ResCard from "./ResCard"
import { MAIN_API } from "../utils/constants"
import Navbar from "./Navbar"
const ResMenu = () => {
  const[Menu,setMenu]=useState([])
const fetchData=async()=>{
  const data=await fetch(MAIN_API)
  const json=await data.json()
  console.log(json.data) 
  setMenu(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}
useEffect(()=>{
  fetchData()
},[])
  return (
    <div>
      <Navbar/>
      <div className="grid grid-cols-4 gap-2 px-8 py-28">
      {Menu.map((e)=><ResCard key={e?.info?.id} ResData={e}/>)}
    </div></div>
  )
}

<<<<<<< HEAD
export default ResMenu
=======
export default ResMenu
>>>>>>> 0873af3829555816bf2078bbb4ee56dbca4d0e29
