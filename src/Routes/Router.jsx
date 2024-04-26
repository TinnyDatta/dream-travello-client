import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path : '/',
           element: <Home></Home> ,
        },
        {
           path: '/login',
           element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      //   {
      //     path: '/detail/:id',
      //   element: <PrivateRoute>
      //     <EstateDetails></EstateDetails>
      //   </PrivateRoute>,
      //   },
      //   {
      //     path: '/register',
      //     element: <Register></Register>,
      //   },
      //   {
      //     path: '/update',
      //     element: <PrivateRoute>
      //       <UpdateProfile></UpdateProfile>
      //     </PrivateRoute>
      //   },
      //  {
      //   path: '/contact',
      //   element: <PrivateRoute>
      //     <ContactUs></ContactUs>
      //   </PrivateRoute>
      //  }
      ]
    },
  ]);

  export default router;