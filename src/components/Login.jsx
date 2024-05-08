import {createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useState, useRef, useEffect } from "react";
import { checkValidData } from "../utils/validate";
import { updateProfile } from "firebase/auth";
import { BG_IMG } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errormsg, setErrorMsg] = useState(null);
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMsg(msg);
    if (msg) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          updateProfile(auth.user, {})
            .then(() => {navigate("/body")})
            .catch((error) => {
              setErrorMsg(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errormsg = error.message;
          setErrorMsg(errorCode + "-" + errormsg);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {navigate("/body")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errormsg = error.message;
          setErrorMsg(errorCode + "-" + errormsg);
        });
    }
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
        );navigate("/body")
      } 
    });
    return () => unsubscribe();
  }, []);

const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div className="h-screen w-screen flex items-center justify-end">
      <div className="w-full h-full absolute left-0 top-0 ">
        <img
          className="w-full h-full object-cover object-center"
          src={BG_IMG}
          alt="bgimage"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mr-40 w-3/12 absolute p-12 bg-transparent shadow-2xl shadow-rose-950 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold m-3 text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-lime-500 text-black rounded-lg placeholder-black"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-4 my-4 w-full bg-lime-500 text-black rounded-lg placeholder-black"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-lime-500 text-black rounded-lg placeholder-black"
        />
        <p className="text-red-500 font-bold">{errormsg}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg text-black font-semibold"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 text-center">{isSignInForm}</p>
        <p
          className="text-center cursor-pointer m-2 p-2"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Food App ❔ Sign Up"
            : "Already A User,  Sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;
