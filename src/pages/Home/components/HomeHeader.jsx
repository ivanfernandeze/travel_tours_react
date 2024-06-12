import { motion } from "framer-motion";
import ImgPrincipal from "../../../assets/principal2.jpg";



export default function HomeHeader() {
  return (
    <header className="relative w-full h-screen">
      <img
        className="absolute w-full h-full object-cover"
        src={ImgPrincipal}
        alt=""
      />
      <motion.div className="absolute bottom-1/3 pl-8 sm:bottom-1/3 w-full text-white px-14 sm:pl-12 md:pl-16"
        initial = "hidden"
        whileInView="visible"  
        viewport={{ once: true, amount: 0.5 }}
        transition={{duration: 0.5}}
        variants={{
            hidden: {opacity: 0, y: 80},
            visible: {opacity:1, y: 0}
        }}
      >
        <div className="font-bold ">
          <h1 className="text-5xl md:text-6xl lg:text-8xl">BAKU CITY TOUR</h1>
          <p className="md:mt-6 lg:mt-8 text-xl md:text-2xl lg:text-3xl">
            Take any tour, get a night Baku tour for{" "}
            <span className="text-yellow-500">FREE!</span>
          </p>
        </div>
        <div className="mt-6">
          <button className="bg-primary font-bold px-4 py-2 md:px-4 md:py-3 rounded-xl hover:bg-orange-500 transition duration-300">
            BOOK NOW
          </button>
        </div>
      </motion.div>
    </header>
  );
}
