import { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { socialConstrain } from "../constrains";
import About from "../About";
import { StylishBtn } from "../common/export";
import SubNavbar from "../navbar/SubNavbar";
import Terminal from "../Terminal";
import { krishna } from "../../assets/skills_images/export";

const Home = () => {

    const names = useMemo(() => ["WEB DEVELOPER...", "PROGRAMMER...", "WEB DESIGNER...", "STUDENT AT IIT KGP..."], []);
    const [title, setTitle] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (index < names.length) {
            if (!isDeleting && subIndex < names[index].length) {
                setTimeout(() => {
                    setTitle(names[index].substring(0, subIndex + 1));
                    setSubIndex(subIndex + 1);
                }, 100);
            } else if (isDeleting && subIndex > 0) {
                setTimeout(() => {
                    setTitle(names[index].substring(0, subIndex - 1));
                    setSubIndex(subIndex - 1);
                }, 50);
            } else if (!isDeleting && subIndex === names[index].length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && subIndex === 0) {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % names.length);
            }
        }
    }, [index, subIndex, isDeleting, names]);

    return (
        <>
            <section className="px-4 py-20 flex items-center">
                <div className="max-w-[1280px] w-full mx-auto mt-12 sm:mt-36">
                    <div className="w-full flex flex-col justify-between items-center gap-16 sm:gap-0 sm:px-10 sm:flex-row">

                        <div>
                            <div className="mb-4">
                                <StylishBtn text="HELLO! 👋" />
                            </div>
                            <p className="text-secondary text-base md:text-[1.2rem]">MY NAME IS</p>
                            <hr className="w-[3rem] border-secondary mt-2" />

                            <div className="my-6">
                                <p className="text-[2.2rem] md:text-[2.6rem]">Krishna Singha</p>
                                <span className="text-base md:text-[1.1rem]">I&apos;m a {title}|</span>
                            </div>
                            <div>
                                <p className="text-[1.1rem]">I am available for <span className="text-secondary">freelancing</span> <br />Let&apos;s build your website together</p>
                                <div className="mt-6">
                                    <NavLink to={"/build"} className="bg-[#ffffff2f] text-white px-4 py-2 rounded-md text-[1.1rem] hover:bg-secondary hover:text-black">Click here!</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 items-center">

                            <div className="relative max-w-[18rem] max-h-[18rem] md:max-w-[25rem] md:max-h-[25rem] rounded-full flex justify-center items-center md:order-2">
                                <div className="absolute transition-all duration-1000 opacity-40 -inset-px bg-gradient-to-r animate-pulse from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg animate-tilt z-[2]"></div>
                                <div className="w-[100%] h-[100%] rounded-full z-[3]">
                                    <img src={krishna} alt="" className="rounded-full" />
                                </div>
                            </div>
                            <div className="flex md:flex-col md:order-1 items-center gap-[1.3rem] md:gap-6 text-3xl mt-4 md:mt-0">
                                {socialConstrain.map((social, index) => {
                                    return (
                                        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                                            <i className={`fa-brands ${social.icon} cursor-pointer hover:text-secondary hover:scale-[1.1]`}></i>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <About />
            <section className="min-h-[80vh] py-6">
                <SubNavbar />
            </section>
            <Terminal />
        </>
    );
};

export default Home;
