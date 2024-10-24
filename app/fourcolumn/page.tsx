"use client";
import Image from "next/image";
import Testimonials from "../components/Testimonials";
import Username from "../public/image/user-1.jpg";
import user3 from "../public/image/standard_post_img02.jpg";
import user4 from "../public/image/standard_post_img03.jpg";
import user5 from "../public/image/standard_post_img05.jpg";
import user6 from "../public/image/standard_post_img06.jpg";
import {CalendarDays,User,Tag} from "lucide-react";
import Subbaner from "@/app/components/Subbaner";




export default function FourColumn() {
  return (
    <div>
      <div className="container mx-auto lg:px-20 ">
      <Subbaner/>
      </div>
      <section className="  mx-auto service-section px-4 md:px-40 ">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6  ">
          {/* Card 1 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48">
              <Image
                src={Username}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-primary hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48">
              <Image
                src={user3}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-primary hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48">
              <Image
                src={user3}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-primary hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  relative">
            <div className="relative h-48">
              <Image
                src={user4}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />

              <audio
                controls
                className="absolute bottom-0 left-0 right-0 z-10  p-0 outline-none rounded"
              >
                <source src="/path-to-your-audio-file.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By: Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-primary hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="  mx-auto service-section px-4 md:px-40 pb-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6  ">
          {/* Card 1 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48 flex flex-col items-center justify-center bg-black">
              <h1 className="text-white text-center text-5xl">Désolé</h1>
              <p className="text-white text-center">
                Cette vidéo n’existe pas.
              </p>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-primary hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/dA8Smj5tZOQ?si=XY06spdEK9nfvskc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-primary hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48">
              <Image
                src={user5}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-primary hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48">
              <Image
                src={user6}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-primary hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Testimonials/>
    </div>
  );
}
