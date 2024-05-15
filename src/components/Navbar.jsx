import { Link } from "react-router-dom"
import { LOGO_URL } from "../utils/constants"
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email} = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
          })
        );
      } 
      else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className="w-full fixed bg-fuchsia-200 flex justify-between -mt-2">
        <Link to="/home"><img className="h-20 w-20 p-2 pl-3"
        src={LOGO_URL}
        alt="logo"/></Link>
        <ul className="flex items-center mr-1">
          <Link to="/home"><li className="p-2 font-semibold mr-4 hover:underline hover:decoration-2 hover:text-purple-500">Home</li></Link>
          <Link to="/contactus"><li className="p-2 font-semibold mr-4 hover:underline hover:decoration-2 hover:text-purple-500">Contact Us</li></Link>
          <Link to="/cart"><li className="p-2 font-semibold mr-4 hover:underline hover:decoration-2 hover:text-purple-500">Cart - ({cartItems.length} items)</li></Link>
          <Link to="/"><button 
          onClick={handleSignOut}
          className="p-2 mr-4 font-semibold text-white rounded-lg px-4 py-2 bg-purple-500 hover:text-black">Logout</button></Link>
        </ul>
</div>
      </div>
)
}

export default Navbar