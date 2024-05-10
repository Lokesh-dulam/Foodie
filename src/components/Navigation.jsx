import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Body from "./Body"
import ResMenu from "./ResMenu";
import Cart from "./Cart";
const Navigation = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path:"/home",
      element:<Body/>,
    },
        {
          path:"/contactus",
          element:<ContactUs/>,
        },
        {
          path: "/restaurants/:resId",
          element: <ResMenu />,
        },
        {
          path: "/cart",
          element: <Cart />,
        }, 

  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Navigation;
