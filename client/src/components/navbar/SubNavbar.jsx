import { useState } from "react";

const SubNavbar = () => {

    // const [widget, setWidget] = useState(false)

    return (
        <div className="flex justify-center">
            <div className="bg-boxBg flex gap-8 py-3 px-8 rounded-xl text-[1.3rem]">
                <span className="cursor-pointer">Education</span>
                <span className="cursor-pointer">Skills</span>
            </div>
        </div>
    )
}

export default SubNavbar;