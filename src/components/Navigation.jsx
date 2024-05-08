import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import AboutUs from "./AboutUs";
// import Home from "./Home";
import ContactUs from "./ContactUs";
import Body from "./Body"
const Navigation = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path:"/body",
      element:<Body/>,
    },
        // {
        //   path:"/home",
        //   element:<Home/>
        // },
        {
          path:"/aboutus",
          element:<AboutUs/>,
        },
        {
          path:"/contactus",
          element:<ContactUs/>,
        },

  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Navigation;