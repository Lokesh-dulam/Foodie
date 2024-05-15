import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";
import Navbar from "./Navbar"

const Cart=()=> {
  const cartItems = useSelector((store)=>store.cart.items);
  const dispatch = useDispatch();

  function emptyCart() {
    dispatch(clearCart());
  }

  return (
    <>
    <Navbar/>
      <div className=" flex pt-40">
        <h1 className="text-3xl font-semibold p-2">
          Cart ({cartItems.length})
        </h1>
        <button
          className="p-2 m-2 bg-green-600 text-white rounded-md"
          onClick={() => emptyCart()}
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {cartItems.map((index) => {
          return <FoodItem key={index}  />;
        })}
      </div>
      <h1 className="p-2 font-bold">Total - {cartItems.length*100}</h1>
    </>
  );
}

export default Cart 