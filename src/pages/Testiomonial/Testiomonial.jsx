import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
export default function Testimonial() {
  const features = [
    {
      title: "Epic Adventures!",
      description: "Discover epic adventures with us! 🌍✨",
    },
    {
      title: "Top Picks",
      description: "Discover unforgettable journeys. 🌟",
    },
    {
      title: "Trendy, Tailored, Affordable",
      description: "Your Next-Level Adventure Starts Here! 🚀🗺️",
    },
  ];

  const images = [
    "/src/assets/Testimonios/epic1.jpg",
    "/src/assets/Testimonios/epic2.jpg",
    "/src/assets/Testimonios/epic3.jpg",
    "/src/assets/Testimonios/epic4.jpg",
  ];

  const stats = [
    { value: "321++", label: "Holiday package" },
    { value: "18+", label: "Premium airlines" },
    { value: "37K", label: "Happy customers" },
    { value: "100", label: "Luxury hotels" },
  ];

  const testimonials = [
    {
      name: "Cheryl Vania",
      role: "Traveller",
      text: "Transforming dreams into reality—FunJourney crafts seamless adventures, turning every journey into unforgettable memories. #TravelJoy #ExploreWithEase",
      image: "/src/assets/testimonios/test1.jpg",
    },
    {
      name: "John Doe",
      role: "Explorer",
      text: "An amazing experience from start to finish. FunJourney truly knows how to create memorable trips. #AdventureTime #TravelMore",
      image: "/src/assets/testimonios/test2.jpg",
    },
    {
      name: "Jane Smith",
      role: "Adventurer",
      text: "I can't recommend FunJourney enough! Their attention to detail is unmatched. #BestTrips #SeeTheWorld",
      image: "/src/assets/testimonios/test.jpg",
    },
    {
      name: "Alice Brown",
      role: "Globetrotter",
      text: "FunJourney made my travel dreams come true! Every detail was perfect. #Wanderlust #TravelGoals",
      image: "/src/assets/testimonios/test4.jpg",
    },
  ];

  return (
    <>
      <section className="bg-bg-color">
        <motion.div className="bg-bg-color from-purple-50 to-purple-100 py-12 pt-40 mb-10"
          initial = "hidden"
          whileInView="visible"
          viewport={{amount: 0.5, once: true}}
          transition={{duration: 0.5}}
          variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
          }}
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              Why must choose us?
            </h2>
          </div>
          <div className="mx-auto grid grid-cols-4 text-center px-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 flex flex-col justify-center gap-4 border-x-2"
              >
                <p className="text-2xl md:text-3xl font-bold text-red-500">
                  {stat.value}
                </p>
                <p className="text-xs md:text-base text-gray-500 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="bg-bg-color from-purple-50 to-purple-100 px-2 mb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div className="space-y-6"
                initial = "hidden"
                whileInView="visible"
                viewport={{amount: 0.5, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0}
                }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className=" h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">
                        •
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
                <Link
                  to="/explore"
                  className="text-white bg-primary px-16 py-3 rounded-3xl border hover:bg-white hover:text-slate-900 hover:border-slate-900 transition inline-block mt-8"
                >
                  Let's Go
                </Link>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <motion.div
                  initial="hidden"
                  whileInView="visible"  
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1}}
                  variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 }
                  }}
                  >
                    <img
                    key={index}
                    className="w-full h-40 object-cover rounded-lg"
                    src={image}
                    alt={`Epic Adventure ${index + 1}`}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto my-8 px-2 text-white">
          <h1 className="text-slate-800 text-3xl font-bold my-10">
            TESTIMONIAL
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white hover:bg-slate-100 transition rounded-xl shadow-md overflow-hidden cursor-pointer"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-64 w-full object-cover md:w-48 p-4 rounded-3xl"
                      src={testimonial.image}
                      alt={`Testimonial from ${testimonial.name}`}
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                      Testimonial
                    </div>
                    <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
                      Everyone loves it!
                    </h1>
                    <p className="mt-2 text-gray-500">{testimonial.text}</p>
                    <div className="flex items-center mt-4">
                      <div className="text-sm font-medium text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="ml-2 text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.174c.967 0 1.371 1.24.588 1.81l-3.393 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.539 1.118l-3.393-2.462a1 1 0 00-1.175 0l-3.393 2.462c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.05 9.4c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.974z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
