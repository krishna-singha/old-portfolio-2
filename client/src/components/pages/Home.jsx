import { useState, useEffect } from "react";
import About from "../About";
import { StylishBtn } from "../common/export"
import SubNavbar from "../navbar/SubNavbar";
import Terminal from "../Terminal";

const Home = () => {

    const [title, setTitle] = useState('');
    const names = ["WEB DEVELOPER...", "PROGRAMMER...", "WEB DESIGNER...", "STUDENT AT IIT KGP..."];

    useEffect(() => {
        let i = 0;
        let mainIndex = 0;
        let index = 0;

        const typing = () => {
            let name = names[i];
            if (index <= name.length + 5) {
                let new_title = name.slice(0, mainIndex);
                setTitle(new_title);
                mainIndex++;
                index++;
            } else {
                let new_title = name.slice(0, mainIndex);
                setTitle(new_title);
                mainIndex--;
            }
            if (mainIndex === 0) {
                index = 0;
                i++;
            }
            if (i === names.length) {
                i = 0;
            }
            setTimeout(typing, 60);
        };

        typing();

        return () => clearTimeout(typing);
    }, []);

    return (
        <>
            <section className="min-h-screen px-4 py-8 flex items-center">
                <div className="max-w-[1280px] w-full mx-auto">
                    <div className=" flex justify-between items-center">
                        <div>
                            <p className="text-secondary text-[1.2rem]"> HELLO, MY NAME IS</p>
                            <hr className="w-[3rem] border-secondary mt-2" />

                            <div className="my-8">
                                <p className="text-[2.6rem]">Krishna Singha</p>
                                {/* <span className="text-[1.1rem]">Web Developer</span> */}
                                <span className="text-[1.1rem]">-- {title}|</span>
                            </div>
                            <StylishBtn text="Explore more" />
                        </div>
                        <div className="flex gap-6 items-center">
                            <div className="flex flex-col items-center gap-6 text-3xl">
                                <i className="fa-brands fa-linkedin-in cursor-pointer hover:text-secondary"></i>
                                <i className="fa-brands fa-github cursor-pointer hover:text-secondary"></i>
                                <i className="fa-brands fa-discord cursor-pointer hover:text-secondary"></i>
                                <i className="fa-brands fa-facebook cursor-pointer hover:text-secondary"></i>
                                <i className="fa-brands fa-instagram cursor-pointer hover:text-secondary"></i>
                                <i className="fa-brands fa-x-twitter cursor-pointer hover:text-secondary"></i>
                            </div>
                            <div className="relative w-[25rem] h-[25rem] rounded-full flex justify-center items-center">
                                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg animate-tilt z-[2]">

                                </div>
                                <div className=" w-[96%] h-[96%] bg-dimWhite rounded-full z-[3]">

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="pointer"></div>
                </div>
            </section>
            <About />
            <section className="min-h-[80vh] py-6">
                <SubNavbar />
            </section>
            <Terminal />
        </>
    )
}

export default Home;