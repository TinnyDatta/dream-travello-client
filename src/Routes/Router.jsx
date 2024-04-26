import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import MyList from "../Pages/MyList/MyList";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";


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
        },
        {
          path: '/allTouristsSpot',
          element: <AllTouristsSpot></AllTouristsSpot>
        },
        {
          path: '/addTouristsSpot',
          element: <PrivateRoute>
            <AddTouristsSpot></AddTouristsSpot>
          </PrivateRoute>
        },
        {
          path: '/myList',
          element: <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        }
      ]
    },
  ]);

  export default router;