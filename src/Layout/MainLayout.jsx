

import { Outlet } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Navbar/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* <ToastContainer/> */}
        </div>
    );
};

export default MainLayout;