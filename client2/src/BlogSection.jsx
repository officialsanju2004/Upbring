import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const blogs = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200",
    title: "Top 5 most Beautiful place in the world",
    author: "Admin",
    date: "2 Days Ago",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200",
    title: "Top 10 best appreciating condos in Las Vegas",
    author: "Admin",
    date: "2 Days Ago",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200",
    title: "Luxury Homes That Changed The Market",
    author: "Admin",
    date: "2 Days Ago",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200",
    title: "Top Real Estate Investment Opportunities",
    author: "Admin",
    date: "2 Days Ago",
  },
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-[#f8f8f8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[#6C63FF] uppercase tracking-wider mb-4 text-lg">
          BLOG ARTICLES
        </p>

        <h2 className="text-4xl md:text-6xl font-serif font-semibold text-[#120b2d] mb-16">
          The Most Recent Articles
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={35}
          slidesPerView={2.3}
          loop={true}
          grabCursor={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2.3,
            },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="relative pb-20">
                <div className="overflow-hidden rounded-[24px]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[500px] object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-[18px] shadow-lg p-6 w-[85%]">
                  <div className="flex justify-between mb-4">
                    <span className="text-[#6C63FF]">
                      By {blog.author}
                    </span>

                    <span className="text-gray-500">
                      {blog.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium leading-snug text-[#1b1b1b]">
                    {blog.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-16">
          <button className="relative px-10 py-4 border border-[#6C63FF] rounded-xl text-[#6C63FF] bg-white text-xl">
            Read More Blogs

            <span className="absolute top-1 left-1 w-full h-full border-r-4 border-b-4 border-orange-400 rounded-xl -z-10" />
          </button>
        </div>
      </div>
    </section>
  );
}
