import React from "react";
import { Link } from "react-router";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Best Product",
    description:
      "Choosing the right product can be tough, but with real reviews and recommendations, it gets easier and smarter.",
    image:
      "https://i0.wp.com/www.shoutmeloud.com/wp-content/uploads/2020/09/Choose-the-Best-Affiliate-Products.jpg?resize=1024%2C576&ssl=1",
  },
  {
    id: 2,
    title: "Top 5 Alternatives for Popular Gadgets",
    description:
      "Discover the best alternatives suggested by our community that match your needs and budget.",
    image:
      "https://geekupdated.com/wp-content/uploads/2024/11/b12bc-best-smart-gadgets-buy-as-gifts.jpg",
  },
  {
    id: 3,
    title: "Tips for Smart Shopping Online",
    description:
      "Learn how to shop smartly online by understanding product features, reviews, and price comparisons.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWIMZUgJQ7w0JqFMRfpS_8HAgHSVMBMvB9xw&s",
  },
];

const BlogSection = () => {
  return (
    <section className="my-12 px-4 container mx-auto">
      <h2 className="text-4xl font-bold text-center text transparent  mb-12">
        📚 Our Latest Blogs
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="glass-card p-5 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={post.image}
              alt={post.title}
              className="rounded-lg w-full h-48 object-cover mb-4"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold text-black">{post.title}</h3>
            <p className="text-black mt-2 line-clamp-3">{post.description}</p>
           
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
