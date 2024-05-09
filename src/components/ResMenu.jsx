<<<<<<< HEAD
import { useState } from "react"
import { useEffect } from "react"
import ResCard from "./ResCard"
// import { useParams } from "react-router-dom" 
import { MAIN_API } from "../utils/constants"
import Navbar from "./Navbar"
const ResMenu = () => {
  const[Menu,setMenu]=useState([])
  // const{resId}=useParams()
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

export default ResMenu
=======
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
>>>>>>> afe00d45c1ba7cd19072b36ddcc7825b2dbf315b
