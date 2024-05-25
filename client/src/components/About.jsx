import { Heading } from "./common/export"
import { aboutIcons } from "../assets/img/export"
import styles from "./style";
import { NavLink } from "react-router-dom";
import resume from "../assets/pdf/resume.pdf"

const About = () => {
    return (
        <section className="pb-8">
            <div className="max-w-[1280px] mx-auto">
                <Heading title="About Me" />

                <div className="flex justify-between items-center gap-8 w-full mt-8">
                    <div className="max-w-[30rem]">
                        <img src={aboutIcons} alt="" className="opacity-70" />
                    </div>
                    <div className="max-w-[40rem] bg-boxBg p-8 rounded-xl">
                        <h4 className={`${styles.heading2} text-dimWhite mb-4`}>LET'S <br /> INTRODUCE ABOUT <br /> MYSELF</h4>
                        <h4 className="hidden">LET'S INTRODUCE ABOUT <br /> MYSELF</h4>
                        <p className={`${styles.paragraph} first-letter:text-secondary`}>Hello! I'm <span>Krishna Singha</span>, a passionate full-stack web developer dedicated to
                            crafting seamless and visually compelling digital experiences. Proficient in both the
                            front-end and back-end. I love to build websites and enjoy turning ideas into web sites, and
                            I have also worked on some cool web projects, which you can checkout in the projects
                            section.</p>
                            <div className="mt-6">
                                <a href={resume} className="bg-[#ffffff2f] text-white px-4 py-2 rounded-md text-[1.1rem] hover:bg-secondary hover:text-black">My Resume</a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;