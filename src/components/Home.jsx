import Card from "./Card";
import Shimmer from "../utils/Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
<<<<<<< HEAD
import { MAIN_API } from "../utils/constants";
=======
>>>>>>> afe00d45c1ba7cd19072b36ddcc7825b2dbf315b
const Home = () => {
  const [text, setText] = useState("");
  const [Res, setRes] = useState([]);

  // async function postData(url = "https://www.swiggy.com/dapi/restaurants/list/update", data = {}) {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     // mode: "cors", 
  //     cache: "no-cache", 
  //     credentials: "same-origin",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     redirect: "follow", // manual, *follow, error
  //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify(data), // body data type must match "Content-Type" header
  //   });
  //   return response.json(); // parses JSON response into native JavaScript objects
  // }
  
  // postData("https://www.swiggy.com/dapi/restaurants/list/update", { answer: 42 }).then((data) => {
  //   console.log(data); // JSON data parsed by `data.json()` call
  // });
  const fetchData = async () => {
    const data = await fetch(MAIN_API);
    const json = await data.json();
<<<<<<< HEAD
=======
    // console.log(json.data)
>>>>>>> afe00d45c1ba7cd19072b36ddcc7825b2dbf315b
    setRes(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
    // postData();
  }, []);
  return (
    <>
      {Res.length === 0 ? (
        <Shimmer />
      ) : 
        <div>
  <div>
          <div className="m-2 pt-24">
            <input
              className="ml-10 border border-pink-300 rounded-lg w-96 px-2 py-1"
              type="search"
              value={text}
              placeholder="Search Yummy........"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                const sortRes = Res.filter((e) => e.info.name.toLowerCase().includes(text.toLowerCase()));
                setRes(sortRes);
              }}
              className="hover:border hover:border-transparent border border-pink-300 rounded-lg hover:bg-fuchsia-300 px-4 py-2 ml-2 font-semibold bg-transparent"
            >
              Submit
            </button>
          </div>
<<<<<<< HEAD
          <div className="grid grid-cols-5 px-12 gap-5 py-5">
            {Res.map((e)=><Link key={e.info.id} to={"/restaurants/" + e?.info.id}><Card ResData={e}/></Link>)}
=======
          <div className="grid grid-cols-5 px-12 gap-5 pt-5">
            {Res.map((e)=><Link key={e.info.id} to="/resturants/:resId"><Card ResData={e}/></Link>)}
>>>>>>> afe00d45c1ba7cd19072b36ddcc7825b2dbf315b
          </div>
        </div>
          </div>}
          </>)
}
<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> afe00d45c1ba7cd19072b36ddcc7825b2dbf315b
