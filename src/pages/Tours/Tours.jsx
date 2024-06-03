import { motion } from "framer-motion";


const tours = [
  {
    id: 1,
    title: "Alone with nature",
    price: 100,
    image: "src/assets/tours/alone.jpg",
  },
  {
    id: 2,
    title: "Jeep ride",
    price: 200,
    image: "src/assets/tours/todoterreno.jpg"
  },
  {
    id: 3,
    title: "Hiking tour",
    price: 150,
    image: "src/assets/tours/senderismo.jpg"
  },
  {
    id: 4,
    title: "Corners of the island",
    price: 250,
    image: "src/assets/tours/oceano.jpg"
  }    
]


export default function Tours() {
  return (
    <main className="p-8 mt-24">
      <section>
        <h1 className="text-4xl text-slate-900 font-semibold my-6">Choose your tour</h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 content-around gap-5">
            {tours.map(tour => (
            <TourCard key={tour.id} {...tour} />
            ))}
        </div>
        <div className="text-center mt-10">
          <button className="text-white bg-primary px-16 py-3 rounded-3xl border hover:bg-white hover:text-slate-900 hover:border-slate-900 transition">See All</button>
        </div>
      </section>
      <section className="my-20 bg-cover bg-no-repeat h-[80svh] rounded-3xl flex items-end" style={{backgroundImage: `url(src/assets/tours/playa.jpg)`}}>
        <div className="text-white p-10 basis-[70%] lg:basis-[30%]">
          <h1 className="text-5xl font-semibold">Enjoy your travel</h1>
          <p className="mt-6">Discover the most unique and vibrant experiences the Azores have to offer</p>
        </div>
      </section>

      <section>
        <div className="relative">
          <input type="text" className=" bg-gray-200 py-4 px-4 w-full rounded-3xl hover:outline-none focus:outline-none" placeholder="Enviar mensaje" />
          <button className="bg-primary text-white px-20 py-4 absolute top-0 right-0 rounded-3xl border hover:bg-white hover:text-slate-900 hover:border-slate-900 transition">Send</button>
        </div>
      </section>
    </main>
  );
}

function TourCard({title, price, image}){
    return (
      <motion.div className="h-[50svh] rounded-xl border-2 relative"
        initial="hidden"
        whileInView="visible"  
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        }}
      >
        <div className="absolute top-2 right-2 py-1 px-5 rounded-3xl backdrop-blur-lg">
          <p className="text-white inline-flex gap-1">
            5.0
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4">
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
            </svg>
          </p>
        </div>
        <img src={image} alt="" className="h-[80%] object-cover rounded-lg w-full"/>
        <div className="flex justify-between items-center p-4">
          <div className="text-slate-900">
            <p className="font-semibold">{title}</p>  
            <p> <span className="font-bold">${price}</span> /<span className="text-xs">person</span> </p>
          </div>
          <button className="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 hover:translate-x-1 transition">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </motion.div>        
    )
}