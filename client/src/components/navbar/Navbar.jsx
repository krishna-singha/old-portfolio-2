import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { navConstrain } from "../constrains";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const closeMenu = () => {
        setShowMenu(false);
    }

    return (
        <header className="z-[999] w-screen fixed top-0 left-0 bg-primary ">
            <nav className="flex justify-between items-center max-w-[1280px] mx-auto py-3 px-4 relative">
                <div className="w-[6rem]">
                    <NavLink to={"/"} onClick={() => closeMenu()} >
                        <h1 className="first-letter:text-secondary text-white text-2xl ss:text-3xl font-[400]">Krishna</h1>
                    </NavLink>
                </div>
                <div className={`flex flex-col items-center min-h-[70vh] ss:min-h-fit py-8 ss:py-0 absolute top-14 right-0 w-full bg-boxBg ss:flex ss:flex-row ss:justify-end ss:relative ss:top-0 ss:bg-transparent gap-8 ${showMenu ? "" : "hidden"}`}>
                    {navConstrain.map((route, index) => {
                        return (

                            <NavLink to={route.path}
                                key={index}
                                onClick={() => closeMenu()}
                                className={({ isActive }) =>
                                    `text-xl font-kanit font-[300] hover:text-secondary
                                    ${isActive ?
                                        "text-secondary"
                                        : ""}`
                                }>
                                {route.title}
                            </NavLink>
                        )
                    })}

                </div>
                <div className="ss:hidden">
                    <i onClick={() => toggleMenu()} className={`fa-solid ${showMenu ? "fa-xmark text-3xl" : "fa-bars text-2xl"}`}></i>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;