import { FooterIcon } from "flowbite-react";
import PackagesCard from "../sections/PackagesCard";
import TripCard from "../sections/TripCard";
import {  BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

const tripsCards = [
  {
    title: "SHEKI DAY TRIP",
    description: "This is a truly unique journey deep into azerbaijan, where passing through it picturesque forest, enchanting mountains and historic landmarks. This is a truly unique journey deep into azerbaijan enchanting mountains and historic landmarks.",
    time: "8:00 AM - 8:00 PM",
    img: "src/assets/beach.jpg",
    price: "50 DOL"
  },
  {
    title: "SHEKI DAY TRIP",
    description: "This is a truly unique journey deep into azerbaijan This is a truly unique journey deep into azerbaijan, where passing through it picturesque forest, enchanting mountains and historic landmarks. enchanting mountains and historic landmarks.",
    time: "8:00 AM - 8:00 PM",
    img: "src/assets/lighthouse2.jpg",
    price: "50 DOL"
  },
]

const packageCards = [
  {
    lugar: "SHEKI",
    tiempo: "4 regions in 2 days",
    img: "src/assets/church.jpg"
  },
  {
    lugar: "SHEKI",
    tiempo: "4 regions in 2 days",
    img: "src/assets/saint.jpg"
  },
  {
    lugar: "SHEKI",
    tiempo: "4 regions in 2 days",
    img: "src/assets/lighthouse.jpg"
  }
]


export default function HomeBody() {
    return (
      <>
        <main className="bg-bg-color p-8 z-50">

          {/* TRIPS */}
          <section>
            <div className="sm:flex justify-between items-end">
              {/* TILE AND DESCRIPTION */}
              <motion.div className="relative"
                initial = "hidden"
                whileInView="visible"
                viewport={{amount: 0.5, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                }}
              >
                <img src="src/assets/avion.png" alt="" className="absolute -top-4 -right-[30px] lg:-right-1/2 h-[100px]"/> 
                <h1 className="text-5xl font-bold text-primary mb-5">DAY TRIPS</h1>
                <p className="text-gray-600 w-[80%]">Be able dozens of sights of Azerbaijan in less than 24 hours</p>
              </motion.div>
              {/* BUTTONS */}
              <div className="flex gap-2">
                <button className="opacity-50">
                  <svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 8 8 12 12 16" />  <line x1="16" y1="12" x2="8" y2="12" /></svg>
                </button>
                <button>
                  <svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 16 16 12 12 8" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                </button>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 ">
              {
                tripsCards.map((trip, index) => (
                  <TripCard key={index} {...trip} />
                ))
              }
            </div>
          </section>
          {/* PACKAGES */}
          <section className="mt-[200px]">
            <motion.div className="flex flex-col items-center relative"
              initial = "hidden"
              whileInView="visible"
              viewport={{amount: 0.5, once: true}}
              transition={{duration: 0.5}}
              variants={{
                  hidden: {opacity: 0, x: -50},
                  visible: {opacity: 1, x: 0}
              }}
            >
              <img src="src/assets/flecha.png" alt="" className="absolute -top-[130%] left-[20%] h-[180px]"/> 
              <h1 className="text-5xl font-bold text-primary mb-5">PACKAGES</h1>
              <p className="text-gray-600 w-[50%] text-center">Enjoy the nature and history of Azerbaijan at an easy pace</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 justify-center gap-4">
              {
                packageCards.map((pack, index) => (
                  <PackagesCard key={index} {...pack} />
                ))
              }
            </div>

          </section>

          {/* ABOUT US */}
          <section className="flex flex-col lg:flex-row my-40 py-10 items-center gap-10 lg:gap-4 ">
              <div className="basis-1/2 flex justify-center relative">
                <img src="src/assets/camera.png" alt="" className="absolute -top-[120px] h-[50%] left-0"/>
                <img src="src/assets/flecha.png" alt="" className="absolute -bottom-20 h-[150px] left-0 hidden lg:block"/>
                <img src="src/assets/viajes.jpg" alt="viajes locos" className="w-[65%] -rotate-6"/>
              </div>

              <div className="text-gray-600 basis-1/2 text-md">
                <p className="">
                  Azerbaijan Tour is the company to give yout the most outrageous and unforgettabable
                  journey in Azerbaijan! With about 5 years experience and professional team, we are 
                  here for you all 4 seasons. Friendly guides, exciting trails and breathtaking
                  landscapes will make yout dream holiday come true!
                </p>
                <p className="mt-4">Let's get started</p>
                <div className="grid gap-4 mt-6 justify-center grid-cols-3">
                  <div className=" rounded-lg bg-white px-6 py-5 flex flex-col justify-center items-center gap-6">
                    <svg class="h-10 w-10 text-primary"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p>Affordable Prices</p>
                  </div>
                  <div className=" rounded-lg bg-white px-6 py-5 flex flex-col justify-center items-center gap-6">
                    <svg class="h-10 w-10 text-primary"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p>Comfortable Conditions</p>
                  </div>
                  <div className=" rounded-lg bg-white px-6 py-5 flex flex-col justify-center items-center gap-6">
                    <svg class="h-10 w-10 text-primary"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p>Exciting trips</p>
                  </div>
                </div>
              </div>
          </section>

        
        </main>
        {/* ABOUT US */}
        <section className=" p-6 bg-cover bg-no-repeat" style={{backgroundImage: 'url(src/assets/bosque.jpg)'}}>
          <div className="flex justify-center gap-28 items-center h-full text-white flex-wrap">
            <div className="flex items-center flex-col gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
              </svg>
              <h1 className="text-3xl font-bold">4+</h1>
              <p className="text-2xl">YEARS IN TOURISM</p>
            </div>
            <div className="flex items-center flex-col gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clip-rule="evenodd" />
              </svg>
              <h1 className="text-3xl font-bold">6+</h1>
              <p className="text-2xl">DIRECTIONS</p>
            </div>
            <div className="flex items-center flex-col gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clip-rule="evenodd" />
              </svg>
              <h1 className="text-3xl font-bold">15000+</h1>
              <p className="text-2xl">HAPPY TOURISTS</p>
            </div>
            <div className="flex items-center flex-col gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
              </svg>
              <h1 className="text-3xl font-bold">90%</h1>
              <p className="text-2xl">CUSTOMER LOYALTY</p>
            </div>
          </div>
        </section>
        {/* CONTACT US */}
        <section className=" my-[100px] p-8">
          <h1 className="text-5xl font-bold text-primary mb-[80px]">CONTACT US</h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 md:mx-[100px]">
            <iframe className="object-cover w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.966411165376!2d-79.03681404072573!3d-8.116651753470242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d3105165a17%3A0x72ed6e4d37a280e3!2sPuerta%203%20de%20la%20UNT!5e0!3m2!1ses-419!2spe!4v1717350479112!5m2!1ses-419!2spe" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="p-16 text-gray-600">
              <div className="flex flex-col gap-6">

                <p className="inline-flex gap-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 text-slate-700">
                    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                  </svg>
                  Your adrees here ave, Baku, Azerbaijan
                </p>
                <p className="inline-flex gap-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 text-slate-700">
                    <path fill-rule="evenodd" d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z" clip-rule="evenodd" />
                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                  </svg>
                  +944 00 000 00 00
                </p>
                <p className="inline-flex gap-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 text-slate-700">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  kevinabril093@gmail.com
                </p>
              </div>
              <div className="mt-12">
                <p>Our social media</p>
                <p className="inline-flex gap-4 mt-4">
                  <p className="hover:cursor-pointer" ><svg className="w-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Facebook"><path d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h6v-5.5H6V8h2V6a3 3 0 0 1 3-3h2v2.5h-1c-.552 0-1-.052-1 .5v2h2.5l-1 2.5H11V16h3c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z" fill="#004155" class=" svgShape"></path></svg></p>
                  <p className="hover:cursor-pointer"><svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Github"><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z" fill="#004155" class="color000000 svgShape"></path></svg></p>
                  <p className="hover:cursor-pointer"><svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Instagram"><path d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z" fill="#004155" class="color000000 svgShape"></path><path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z" fill="#004155" class="color000000 svgShape"></path><circle cx="12.3" cy="3.7" r=".533" fill="#004155" class="color000000 svgShape"></circle></svg></p>
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}


