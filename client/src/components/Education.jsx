import styles from "./style";

const Education = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-[1280px] mx-auto">
                <div className="pl-6 md:px-12 border-l-[1px] border-dimWhite w-fit mx-auto flex flex-col gap-6">
                    <div className="content relative bg-boxBg p-6 rounded-xl max-w-[800px] mx-auto">
                        <div className="flex gap-2 items-center">
                            <i className="fa-regular fa-calendar-check text-secondary"></i>
                            <p className="text-secondary">2023 - 2027</p>
                        </div>
                        <h3 className={`${styles.heading3} my-3 text-dimWhite`}>Bachelor's Degree</h3>
                        <p className={`${styles.paragraph}`}>Hello! Currently, I am a second-year undergraduate student at the <span className="text-secondary">Indian Institute of Technology Kharagpur</span>, West Bengal, pursuing a B.Tech. in <span className="text-secondary">Computer Science and Engineering</span>.</p>
                    </div>
                    <div className="content relative bg-boxBg p-6 rounded-xl max-w-[800px] mx-auto">
                        <div className="flex gap-2 items-center">
                            <i className="fa-regular fa-calendar-check text-secondary"></i>
                            <p className="text-secondary">2020 - 2022</p>
                        </div>
                        <h3 className={`${styles.heading3} my-3 text-dimWhite`}>Higher Secondary</h3>
                        <p className={`${styles.paragraph}`}>I pursued my higher secondary education at <span className="text-secondary">Jawahar Navodaya Vidyalaya (JNV), Bankura</span>, West Bengal, a CBSE-affiliated, Central Government-funded school. I successfully completed <span className="text-secondary">11th to 12th</span> grades in the Physics, Chemistry, and Mathematics (PCM) stream.</p>
                    </div>
                    <div className="content relative bg-boxBg p-6 rounded-xl max-w-[800px] mx-auto">
                        <div className="flex gap-2 items-center ">
                            <i className="fa-regular fa-calendar-check text-secondary"></i>
                            <p className="text-secondary">2015 - 2020</p>
                        </div>
                        <h3 className={`${styles.heading3} my-3 text-dimWhite`}>Upper Primary</h3>
                        <p className={`${styles.paragraph}`}>I pursued my upper primary education at <span className="text-secondary">Jawahar Navodaya Vidalaya (JNV), Uttar Dinajpur</span>, West Bengal, a CBSE-affiliated Central Government-funded school. I successfully completed the <span className="text-secondary">6th to 10th</span> grades.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;