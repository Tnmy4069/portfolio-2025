import blogs from "../../data/blogs.json";
import ReactMarkdown from 'react-markdown';

export default function Page({ params }) {
  const { slug } = params; // params work fine here

  const blog = blogs.find(b => b.id === parseInt(slug));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10 mt-11">
      <h1 className="text-4xl mt-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-8 text-center">
        {blog.title}
      </h1>
      <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
        <p className="text-[#ADB7BE] text-sm mb-3">{blog.date}</p>
        <div className="mt-6  text-white">
            {blog.content}
      </div>
      </div>
    </div>
  );
}
