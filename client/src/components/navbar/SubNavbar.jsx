import { useState } from "react";
import Education from "../Education";
import Skills from "../Skills";

const SubNavbar = () => {

    const [widget, setWidget] = useState("Education");

    const toggleSubNav = (ele) => {
        setWidget(ele);
    }


    return (
        <>
            <div className="flex justify-center">
                <div className="bg-boxBg flex gap-8 py-3 px-8 rounded-xl text-[1.1rem] md:text-[1.3rem]">
                    <span
                        className={`cursor-pointer hover:text-secondary 
                        ${widget === "Education" && "text-secondary"}`}
                        onClick={() =>
                            toggleSubNav('Education')}>
                        Education
                    </span>
                    <span
                        className={`cursor-pointer hover:text-secondary 
                        ${widget === "Skills" && "text-secondary"}`}
                        onClick={() =>
                            toggleSubNav('Skills')}>
                        Tech Stack
                    </span>
                </div>
            </div>
            {widget === "Education" ?
                <Education />
                : <Skills />
            }
        </>
    )
}

export default SubNavbar;