import { star } from "../../assets/skills_images/export";

const StylishBtn = ({ text }) => {
    return (
        <div className="w-fit flex items-center gap-2 border-[1px] bg-[#01d29316] border-secondary rounded-2xl px-3 py-1">
            <img src={star} alt="" />
            <p className=" text-secondary text-[0.8rem] md:text-base">{text}</p>
        </div>
    )
}

export default StylishBtn;