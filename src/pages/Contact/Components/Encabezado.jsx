import { motion } from "framer-motion"


export default function EncabezadoContac() {
    return (
        <>
            <div className="relative w-full h-screen">
                <img className="absolute w-full h-full object-cover" src="/src/assets/contact_us.jpg" alt="" />
                <motion.div className="z-10 mt-[300px] absolute px-14"
                  initial = "hidden"
                  whileInView="visible"  
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{duration: 0.5}}
                  variants={{
                      hidden: {opacity: 0, y: 80},
                      visible: {opacity:1, y: 0}
                  }}
                >
                    <p className="text-5xl font-bold text-white">CONTACT US</p>
                    <p className="text-2xl mt-4 text-black font-semibold">Explore the best places with us</p>
                    <button class="text-white bg-primary px-6 py-2 rounded-xl mt-5 hover:bg-orange-500 hover:border-slate-900 transition">Send NOW</button>
                </motion.div>
            </div>
        </>
    )
}