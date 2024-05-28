import styles from "../style";

const Error = () => {
    return (
        <section className="px-4 min-h-screen flex justify-center items-center">
            <div className="max-w-[1280px] mx-auto">
                <h1 className={`${styles.heading2} text-secondary`}>404 page not found!</h1>
            </div>
        </section>
    );
}

export default Error;