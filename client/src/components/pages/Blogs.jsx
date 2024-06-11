import { Heading ,BlogsCard } from "../common/export";

const Blogs = () => {
    return (
        <section className="min-h-screen pt-16 pb-6 px-4">
            <Heading title="Blogs" />
            <div className="max-w-[1280px] mx-auto flex justify-center flex-wrap gap-4 mt-6">
                <BlogsCard />
                <BlogsCard />
                <BlogsCard />
                <BlogsCard />
                <BlogsCard />
            </div>
        </section>
    )
}

export default Blogs;