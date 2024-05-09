import Card from "./Card";
import Shimmer from "../utils/Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { MAIN_API } from "../utils/constants";
const Home = () => {
  const [text, setText] = useState("");
  const [Res, setRes] = useState([]);
  const fetchData = async () => {
    const data = await fetch(MAIN_API);
    const json = await data.json();
    setRes(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
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
          <div className="grid grid-cols-5 px-12 gap-5 py-5">
            {Res.map((e)=><Link key={e.info.id} to={"/restaurants/" + e?.info.id}><Card ResData={e}/></Link>)}
          </div>
        </div>
          </div>}
          </>)
}
export default Home;
