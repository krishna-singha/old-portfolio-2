import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Template = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Outlet />
            <Footer />
            <div className="pointer"></div>
        </div>
    )
}

export default Template;