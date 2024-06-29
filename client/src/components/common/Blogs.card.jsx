import { blank } from "../../assets/skills_images/export"
import styles from "../style"

const BlogsCard = () => {
    return (
        <div className={`blogs-card bg-boxBg w-[25rem] rounded-md p-4`}>
            <div className="relative">
                <img src={blank} alt="" className="rounded-md" />
                <div className="flex justify-between absolute bottom-1 right-1 bg-[#00000084] py-1 px-3 rounded-md">
                    <p className="text-[0.8rem] text-secondary">10 Jun 2024</p>
                    {/* <p className="text-[0.8rem]">Author</p> */}
                </div>
            </div>
            <div className="mt-6">
                <h3 className="text-center text-[1.2rem] text-secondary font-semibold mb-2">Mern Stack Development</h3>
                <p className={`text-[0.9rem] text-center ${styles.paragraph}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia totam non magni natus, deleniti quisquam iusto alias odio quidem facere debitis repudiandae mollitia ad et eum eius expedita nemo dolor.</p>
            </div>
            <div className="flex justify-center mt-4">
                <button className="text-[1.1rem] bg-[#ffffff2f] text-white hover:bg-secondary hover:text-black py-1 px-4 rounded-md">Read more</button>
            </div>
            {/* <div className="blogs-card__img">
                <img src={blog.img} alt={blog.title} />
            </div>
            <div className="blogs-card__content">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <div className="blogs-card__content__footer">
                    <p>{blog.date}</p>
                    <p>{blog.author}</p>
                </div>
            </div> */}
        </div>
    );
}

export default BlogsCard;