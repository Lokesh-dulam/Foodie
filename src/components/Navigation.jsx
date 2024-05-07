import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import AboutUs from "./AboutUs";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
const Navigation = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/aboutus",
      element:<AboutUs/>,
    },
    {
      path:"/contactus",
      element:<ContactUs/>,
    },
    {
      path:"/cart",
      element:<Cart/>
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Navigation;