import { useState, useEffect } from "react";
import { socialConstrain } from "../constrains";
import About from "../About";
import { StylishBtn } from "../common/export"
import SubNavbar from "../navbar/SubNavbar";
import Terminal from "../Terminal";
import { krishna } from "../../assets/img/export";

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
            <section className="px-4 py-20 flex items-center">
                <div className="max-w-[1280px] w-full mx-auto mt-36">
                    <div className="w-full flex flex-col justify-between items-center gap-10 sm:gap-0 sm:px-10 sm:flex-row">
                        <div>
                            <p className="text-secondary text-base md:text-[1.2rem]"> HELLO! 👋 MY NAME IS</p>
                            <hr className="w-[3rem] border-secondary mt-2" />

                            <div className="my-8">
                                <p className="text-[2.2rem] md:text-[2.6rem]">Krishna Singha</p>
                                {/* <span className="text-[1.1rem]">Web Developer</span> */}
                                <span className="text-base md:text-[1.1rem]">-- I'm a {title}|</span>
                            </div>
                            <StylishBtn text="Explore more" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            
                            <div className="relative max-w-[18rem] max-h-[18rem] md:max-w-[25rem] md:max-h-[25rem] rounded-full flex justify-center items-center md:order-2">
                                <div className="absolute transitiona-all duration-1000 opacity-40 -inset-px bg-gradient-to-r animate-pulse from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg animate-tilt z-[2]">

                                </div>
                                <div className="w-[100%] h-[100%] rounded-full z-[3]">
                                    <img src={krishna} alt="" className="rounded-full" />
                                </div>
                            </div>
                            <div className="flex md:flex-col md:order-1 items-center gap-[1.3rem] md:gap-6 text-3xl mt-4 md:mt-0">
                                {socialConstrain.map((social, index) => {
                                    return (
                                        <a key={index} href={social.link} target="_blank">
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
    )
}

export default Home;