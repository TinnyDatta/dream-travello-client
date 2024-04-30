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
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import Update from "../Pages/Update/Update";
import CountriesSection from "../components/CountriesSection/CountriesSection";
import SpecificCountry from "../Pages/SpecificCountry/SpecificCountry";



const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path : '/',
           element: <Home></Home> ,
           loader: () => fetch('https://dream-travello-server.vercel.app/addTouristsSpots'),
           
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
          element: <AllTouristsSpot></AllTouristsSpot>,
          loader: () => fetch('https://dream-travello-server.vercel.app/addTouristsSpots'),
          
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
        },
        {
          path: '/viewDetails/:id',
          element : <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        },
        {
          path: '/countries',
          element: <CountriesSection></CountriesSection>
        },
        {
          path: '/update/:id',
          element: <PrivateRoute>
            <Update></Update>
          </PrivateRoute>,
          loader: ({params}) => fetch(`https://dream-travello-server.vercel.app/addTouristsSpots/${params.id}`)
        },
        {
          path: '/specificCountry',
          element: <SpecificCountry></SpecificCountry>
        }
      ]
    },
  ]);

  export default router;