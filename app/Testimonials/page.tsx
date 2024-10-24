"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star,Quote } from "lucide-react";
import carosel1 from "../public/image/testimonial-image1.png";
import carosel2 from "../public/image/testimonial-image2.png";

interface Testimonial {
  name: string;
  image: string | any; // Chấp nhận đối tượng StaticImageData từ ảnh import
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Kevin Andrew",
    image: carosel1, // Sử dụng ảnh đã import
    quote:
   "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus .",
    rating: 5,
  },
  {
    name: "Alina James",
    image: carosel2,
    quote:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus .",
    rating: 5,
  },
  {
    name: "John Doe",
    image: carosel1,
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus .",
    rating: 5,
  },
  {
    name: "Jane Smith",
    image: carosel2,
    quote:
     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus .",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    image: carosel1,
    quote:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus .",
    rating: 5,
  },
  {
    name: "Emily Brown",
    image: carosel2,
    quote:
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus .",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  return (
    <div className="text-gray-100 p-8 rounded-lg">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[currentIndex, (currentIndex + 1) % testimonials.length].map(
              (index) => (
                <div key={index} className="relative">
                 <div className="bg-[#222224] p-6 rounded-lg h-full flex flex-col justify-between border-r-4 border-yellow-500">
  <div className="flex items-center mb-4">
    <Image
      src={testimonials[index].image}
      alt={testimonials[index].name}
      className="w-24 h-24 rounded-full mr-4 object-cover mb-10 ml-4"
      width={64}
      height={64}
    />
    <div className="border bg-yellow-400 rounded-full p-1 outline-none absolute  top-[120px] left-[73px]">
    <Quote className="text-white"/>
    </div>
    
    {/* Đường kẻ thẳng */}
    <div className="border-l border-gray-600 h-44 mx-4"></div>
    <div>
      <p className="text-sm text-gray-300">{testimonials[index].quote}</p>
      <div className="flex mt-2">
        {[...Array(testimonials[index].rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="mt-1">
    <p className="font-semibold text-white">{testimonials[index].name}</p>
    <p className="text-sm text-gray-400">Happy Customer</p>
  </div>
    </div>
  </div>
  
</div>

                </div>
              )
            )}
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center items-center mt-8">
  <div className="flex">
    {[0, 2, 4].map((index) => (
      <button
        key={index}
        className={`w-6 h-6 rounded-full mx-1 transition-transform duration-300 ${
          index === currentIndex ? "bg-yellow-400 scale-225" : "bg-white"
        }`}
        onClick={() => setCurrentIndex(index)}
      />
    ))}
  </div>
</div>

      </div>
    </div>
  );
}
