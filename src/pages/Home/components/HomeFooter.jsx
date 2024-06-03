export default function HomeFooter() {
  return (
    <section>
      <div className="relative w-auto h-96 ">
        <img
          className="absolute w-full h-full object-cover"
          src="/src/assets/nepal.jpg"
          alt=""
        />
        <div className="absolute pl-8 pt-20 text-white  px-14 sm:pl-12 md:pl-16 sm:w-9/12 w-11/12 md:w-7/12 lg:w-5/12 xl:w-4/12 ">
          <div className="font-bold">
            <h3 className="text-2xl md:text-3xl lg:text-5xl">NEWSLETTER</h3>
            <p className="md:mt-3 lg:mt-5 text-sm w-90">
              Suscríbete a nuestro newsletter para recibir las últimas noticias
              y promociones
            </p>
          </div>
          <div className="mt-6 flex relative">
            <label className="form-control w-full h-10 text-black">
              <input
                type="text"
                placeholder="Introduce tu nombre"
                className="input w-auto bg-slate-100 h-full px-4 rounded-full mt-2 relative z-10 outline-none"
              />
            </label>
            <button className="bg-primary px-4 rounded-full hover:bg-orange-500 absolute top-2 left-44 w-40 h-full z-20 transition">
              Suscribete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
