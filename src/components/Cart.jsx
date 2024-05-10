import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import { Link } from 'react-router-dom';
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className='justify-center items-center'>
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <h2 className="text-xl mt-6 font-medium">
            Your cart is empty, Add some items to the cart 🛒.
            <Link to="/home"><button className='ml-4 rounded-lg px-4 py-2 bg-green-500'>Add Item</button></Link>
          </h2>
        )}
        {cartItems.length > 0 && (
          <h1>You Have - ({cartItems.length} items) <button
          className="p-2 m-2 bg-red-500 hover:bg-red-400 duration-[.3s] text-white rounded-md font-medium"
          onClick={handleClearCart}
        >
          Clear Cart 🧹
        </button></h1>
        )}
      </div>
    </div>
    </div>
  );
};

export default Cart;
