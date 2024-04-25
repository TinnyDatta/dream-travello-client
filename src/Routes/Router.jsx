import { createBrowserRouter } from "react-router-dom";


// import EstateDetails from "../pages/EstateDetails/EstateDetails";
// import Login from "../pages/Login/Login";
// import Register from "../pages/Register/Register";
// import ContactUs from "../pages/ContactUs/ContactUs";
// import PrivateRoute from "./PrivateRoute";
// import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/ErrorPage/Home/Home";
import MainLayout from "../Layout/MainLayout";


const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path : '/',
           element: <Home></Home>,
        }
      //   {
      //     path: '/detail/:id',
      //   element: <PrivateRoute>
      //     <EstateDetails></EstateDetails>
      //   </PrivateRoute>,
      //   },
      //   {
      //     path: '/login',
      //     element: <Login></Login>,
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