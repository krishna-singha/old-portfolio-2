import { useState, useEffect } from "react";
import Heading from "../common/Heading";
import { projectsConstrain } from "../constrains/index";
import styles from "../style"

const Projects = () => {

    const [mobileVersion, setMobileVersion] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 620) {
                setMobileVersion(false);
            } else {
                setMobileVersion(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <section className="min-h-[100vh] pt-16 pb-8">
            <div className="max-w-[1280px] mx-auto px-4">
                <Heading title="Projects" />

                <div className="w-full flex flex-wrap gap-6 justify-center mt-8 project">

                    {projectsConstrain.map((project, index) => (
                        <div key={index} className={`flex gap-4 rounded-md h-full`}>
                            <div className={`relative max-w-[25rem] bg-boxBg hover:bg-[#d8d8d818] p-3 ss:p-6 rounded-md flex flex-col justify-between ${!mobileVersion && "pr-16"}`}>
                                {mobileVersion && (
                                    <div className="mb-4">
                                        <img key={index} src={project.img[0]} alt="" className="w-full" />
                                    </div>
                                )}
                                <div className="">
                                    <h2 className={`${styles.heading2} text-secondary mb-4`}>{project.heading}</h2>
                                    <p className={`${styles.paragraph} ${mobileVersion ? "" : "mr-8"}`}>{project.details}</p>
                                </div>
                                <div className={`my-4 flex flex-wrap gap-2 ${mobileVersion ? "" : "mr-8"}`}>
                                    {project.tech.map((tech, ind) => (
                                        <span key={ind} className="bg-[#01d2934a] text-white text-[0.8rem] py-1 px-2 rounded-2xl">{tech}</span>
                                    ))}
                                    {project.status === 'Completed' ?
                                        <span className="bg-[#815af6] text-white text-[0.8rem] py-1 px-2 rounded-2xl">{project.status}</span>
                                        : <span className="bg-[#f65ac7] text-black text-[0.8rem] py-1 px-2 rounded-2xl">{project.status}</span>
                                    }
                                    {project.type === 'Personal' ?
                                        <span className="bg-[#f6a15a] text-black text-[0.8rem] py-1 px-2 rounded-2xl">{project.type}</span>
                                        : project.type === 'Freelance' ? <span className="bg-[#24b341] text-white text-[0.8rem] py-1 px-2 rounded-2xl">{project.type}</span>
                                            : <span className="bg-[#0ef0ed] text-black text-[0.8rem] py-1 px-2 rounded-2xl">{project.type}</span>
                                    }
                                </div>
                                <div className="flex gap-6 mt-3">
                                    {project.website === "" ? "" :
                                        <a href={project.website} target="_blank" className="bg-[#ffffff2f] hover:bg-secondary text-white hover:text-black text-base py-2 px-4 rounded-md">Website</a>
                                    }
                                    {project.github === "" ? "" :
                                        <a href={project.github} target="_blank" className="bg-[#ffffff2f] hover:bg-secondary text-white hover:text-black text-base py-2 px-4 rounded-md">GitHub</a>
                                    }
                                </div>
                            </div>
                            {!mobileVersion && (
                                <div className="w-[10rem] translate-x-[-2rem] tilt-img">
                                    {project.img.map((img, ind) => (
                                        <img key={ind} src={img} alt="" className="w-full" />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;