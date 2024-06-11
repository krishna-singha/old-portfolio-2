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
                        <div key={index} className=" flex gap-4 rounded-md">
                            <div className={`max-w-[25rem] bg-boxBg hover:bg-[#d8d8d818] p-4 ss:p-6 rounded-md flex flex-col justify-between ${!mobileVersion && "pr-16"}`}>
                                {mobileVersion && (
                                    <div className="mb-4">
                                        <img key={index} src={project.img[0]} alt="" className="w-full" />
                                    </div>
                                )}
                                <div className="">
                                    <h2 className={`${styles.heading2} text-secondary text-center mb-4`}>{project.heading}</h2>
                                    <p className={`${styles.paragraph} ${mobileVersion ? "text-center" : "mr-8"}`}>{project.details}</p>
                                </div>
                                <div className="flex justify-center gap-6 mt-6">
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