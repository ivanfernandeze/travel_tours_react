import { motion } from "framer-motion";




export default function PackagesCard({lugar, tiempo, img}){
    return (
      <motion.div className="bg-cover bg-no-repeat h-[70svh] rounded-lg flex flex-col justify-between " style={{backgroundImage: `url(${img})`}}
        initial = "hidden"
        whileInView="visible"  
        viewport={{ once: true, amount: 0.5 }}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, scale: 0.9},
          visible: {opacity:1, scale: 1}
        }}
      >
        <div className="p-10 text-white">
          <h1 className= "font-bold text-2xl">{lugar}</h1>
          <p className="">{tiempo}</p>
        </div>
        <div className="flex justify-end">
          <button className="bg-white p-5 rounded-tl-[50px]">
            <svg class="h-8 w-8 text-primary font-bold"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="5" y1="12" x2="19" y2="12" />  <polyline points="12 5 19 12 12 19" /></svg>
          </button>
        </div>
      </motion.div>
    );
  }