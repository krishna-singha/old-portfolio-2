import { skillsConstrain } from "./constrains";

const Skills = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-[1280px] mx-auto flex flex-wrap gap-6 justify-center">
                {skillsConstrain.map((skill, index) => {
                    return (
                        <div key={index} className="bg-boxBg p-4 rounded-[2.5rem] w-[7rem] flex flex-col gap-4 items-center hover:translate-y-[-0.5rem] cursor-pointer">
                            <img src={skill.link} alt="" className="w-[90%]" />
                            <span className="text-center">{skill.title}</span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills;