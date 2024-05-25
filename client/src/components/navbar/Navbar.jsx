import { NavLink } from "react-router-dom";

import { navConstrain } from "../constrains";

const Navbar = () => {
    return (
        <header className="z-[999] sticky top-0 left-0 bg-primary">
            <nav className="flex justify-between items-center max-w-[1280px] mx-auto py-3">
                <div className="w-[6rem]">
                    <NavLink to={"/"} >
                        <h1 className="first-letter:text-secondary text-white text-3xl font-[600]">Krishna</h1>
                    </NavLink>
                </div>
                <div className="flex gap-8">
                    {navConstrain.map((route, index) => {
                        return (

                            <NavLink to={route.path}
                                key={index}
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
            </nav>
        </header>
    );
}

export default Navbar;