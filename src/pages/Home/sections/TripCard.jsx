import { motion } from "framer-motion";



export default function TripCard({ title, description, time, img, price }) {
    return (
      <motion.div className="bg-white rounded-lg shadow-lg flex justify-between min-h-[45svh]"
        initial = "hidden"
        whileInView="visible"
        viewport={{amount: 0.5, once: true}}
        transition={{duration: 0.5}}
        variants={{
            hidden: {opacity: 0, scale: 0.9, y: 10},
            visible: {opacity: 1, scale: 1, y: 0}
        }}
      >
        <div className="flex flex-col justify-center p-5 basis-1/2 gap-6">
          <h1 className="text-terceary font-bold text-3xl">{title}</h1>
          <p className="text-gray-600 text-sm lg:text-base">{description}</p>
          <div className="text-primary flex gap-2 items-center">
            <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M11 17a2.5 2.5 0 0 0 2 0" />  <path d="M12 3C7.336 3 4.604 5.331 4.138 8.595a11.816 11.816 0 0 0 1.998 8.592 10.777 10.777 0 003.199 3.064h0c1.666.999 3.664.999 5.33 0h0a10.777 10.777 0 0 0 3.199 -3.064 11.89 11.89 0 001.998-8.592C19.396 5.33 16.664 3 12 3z" />  <line x1="8" y1="11" x2="10" y2="13" />  <line x1="16" y1="11" x2="14" y2="13" /></svg>
            <p>{time}</p>
          </div>
        </div>
        <div className="basis-1/2 relative">
          <img src={img} alt={title} className="object-cover h-full rounded-r-lg"/>
          <div className="absolute top-4 right-4 rounded-3xl bg-white px-6 py-1">
            <p className="text-primary font-bold text-2xl">{price}</p>
          </div>
        </div>
      </motion.div>
    );
  }