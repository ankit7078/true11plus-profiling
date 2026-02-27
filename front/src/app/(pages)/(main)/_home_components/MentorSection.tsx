"use client";
import Heading from "@/ui/heading/Heading";
import { motion } from "framer-motion";
import Image from "next/image";
import { BiAward, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { LuStar } from "react-icons/lu";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const mentors = [
  {
    name: "Mr. Himanshu Goel",
    role: "SAT Expert",
    image: "/img/mentors/himanshu-goel.webp",
    rating: "4.9",
  },
  {
    name: "Mr. Gautam",
    role: "Global education counsellor with 25+ years of experience",
    image: "/img/mentors/gautam.webp",
    rating: "4.9",
  },
  {
    name: "Mr. Vibhutesh Kumar Singh",
    role: "Lecturer, SETU Ireland",
    image: "/img/mentors/vibhutesh-kumar-singh.webp",
    rating: "4.8",
  },
  {
    name: "Mr. Vinamra Bansal",
    role: "NUS singapore ",
    image: "/img/mentors/vinamra-bansal.webp",
    rating: "4.9",
  },
  {
    name: "Mr. Samaksh Goel",
    role: "Academic Counseler",
    image: "/img/mentors/samaksh-goel.webp",
    rating: "4.8",
  },
];

export default function MentorSection() {
  return (
    <section className="relative bg-linear-to-b from-(--tertiary-bg) to-(--primary-bg) overflow-hidden">
      <div className="sm:px-8 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <Heading
            badgeText="World-Class Guidance"
            badgeIcon={BiAward}
            titleNormal="Learn from the"
            titleHighlight="Best Minds"
          />

          <div className="hidden md:flex gap-3 mb-2">
            <button
              className="swiper-button-prev-custom-mentor group cursor-pointer w-12 h-12 rounded-full border border-(--border) flex items-center justify-center hover:bg-(--main) hover:border-(--main) transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <BiChevronLeft
                size={24}
                className="text-(--text-color) group-hover:text-(--white) transition-colors"
              />
            </button>

            <button
              className="swiper-button-next-custom-mentor group cursor-pointer w-12 h-12 rounded-full border border-(--border) flex items-center justify-center hover:bg-(--main) hover:border-(--main) transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <BiChevronRight
                size={24}
                className="text-(--text-color) group-hover:text-(--white) transition-colors"
              />
            </button>
          </div>
        </div>

        {/* Mentors Swiper Carousel */}
        <div className="mentor-swiper-container">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom-mentor",
              prevEl: ".swiper-button-prev-custom-mentor",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {mentors.map((mentor, index) => (
              <SwiperSlide key={index} className="h-auto">
                <MentorCard mentor={mentor} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function MentorCard({ mentor, index }: { mentor: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-5/5 overflow-hidden rounded-custom shadow-custom">
        <Image
          fill
          src={mentor.image}
          alt={mentor.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Rating Tag */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-(--primary-bg)/90 backdrop-blur-md text-(--text-color) rounded-full text-xs font-bold shadow-custom">
          <LuStar size={12} className="text-(--warning) fill-(--warning)" />
          {mentor.rating}
        </div>
      </div>

      {/* Basic Info */}
      <div className="mt-6 text-center md:text-left">
        <h3 className="text-xl font-bold text-(--text-color) group-hover:text-(--main) transition-colors line-clamp-1">
          {mentor.name}
        </h3>
        <p className="text-(--gray)/60 font-medium text-xs mb-2 line-clamp-2 min-h-8">
          {mentor.role}
        </p>

        {/* <div className="mt-4 pt-4 border-t border-(--border) flex items-center justify-between text-xs font-bold tracking-wider text-(--text-subtle)">
          <span>Success Rate: 100%</span>
          <span className="text-(--main)">{mentor.students} Students</span>
        </div> */}
      </div>
    </motion.div>
  );
}
