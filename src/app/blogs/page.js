import Link from "next/link";
import blogs from "../data/blogs.json";

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-8 text-center">
        Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-6 bg-[#181818] rounded-lg shadow-lg">
            <h2 className="text-2xl text-white font-bold mb-3">{blog.title}</h2>
            <p className="text-[#ADB7BE] text-sm mb-3">{blog.date}</p>
            <p className="text-[#ADB7BE] mb-4">{blog.excerpt}</p>
            <Link
              href={`/blogs/${blog.id}`}
              className="inline-block bg-gradient-to-br from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
