import Card from "./Card";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
import Shimmer from "../utils/Shimmer";
import { useEffect, useState } from "react";
const Home = () => {
  const [text, setText] = useState("");
  const [Res, setRes] = useState([]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data)
    setRes(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
<<<<<<< HEAD
    <>
      {Res.length === 0 ? (
        <Shimmer />
      ) : (
        <div>
          {/* <Navbar /> */}
=======
    <>{Res.length===0?<Shimmer/>:
  <div>
          <Navbar />
>>>>>>> 3aa6f5646bcb8717cb85ebbab66b5dc316fe12f7
          <div className="m-2 pt-24">
            <input
              className="ml-10 border border-black-400 rounded-lg w-96 px-2 py-1"
              type="search"
              value={text}
              placeholder="Search items"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                const sortRes = Res.filter((e) => e.info.name.toLowerCase().includes(text.toLowerCase()));
                setRes(sortRes);
              }}
              className="hover:border hover:border-transparent border border-gray-400 rounded-lg hover:bg-fuchsia-300 px-4 py-2 ml-2 font-semibold bg-transparent"
            >
              Submit
            </button>
          </div>
          <div className="grid grid-cols-5 px-12 gap-5 pt-5">
            {Res.map((e)=><Card key={e.info.id} ResData={e}/>)}
          </div>
<<<<<<< HEAD
          {/* <Footer /> */}
        </div>
=======
          <Footer/>
          </div>}
          </>
>>>>>>> 3aa6f5646bcb8717cb85ebbab66b5dc316fe12f7
      )}
export default Home;
