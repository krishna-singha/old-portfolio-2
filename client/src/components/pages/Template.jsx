import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import StarsCanvas from "../common/StarBackground";

const Template = () => {
    return (
        <div className="overflow-x-hidden">
            {/* <StarsCanvas /> */}
            <Navbar />
            <Outlet />
            <Footer />
            <div className="pointer"></div>
        </div>
    )
}

export default Template;