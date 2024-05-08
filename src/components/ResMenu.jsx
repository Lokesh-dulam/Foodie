import { useEffect, useState } from "react"
import ResMenuCard from "./ResMenuCard"
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils/constants"
const ResMenu = () => {
    const[Menu,setMenu]=useState(null)
    const {resId}=useParams()
    // console.log(resId)
    const fetchData=async ()=>{
        const data=await fetch(MENU_API+resId)
        const json=await data.json()
        console.log(json.data)
        setMenu(json.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className="grid grid-cols-3 px-12 gap-5 pt-5">
        {Menu.map((e)=>(<ResMenuCard key={e.data.id} ResMenuData={e}/>))}
    </div>
  )
}

export default ResMenu
