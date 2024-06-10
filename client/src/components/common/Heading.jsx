const Heading = (props) => {
    return (
        <div className="flex justify-center py-4">
            <div className=" flex flex-col items-center">
                <h2 className="text-secondary text-[1.1rem] md:text-[1.3rem] px-4">{props.title}</h2>
                <hr className="border-secondary w-full border-[1px] borderB" />
            </div>
        </div>
    )
}

export default Heading;