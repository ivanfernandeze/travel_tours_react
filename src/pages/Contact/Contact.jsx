import EncabezadoContac from "./Components/Encabezado";

export default function Contact() {
  return (
    <>
      <EncabezadoContac />
      <div className="text-white p-4 pt-10 sm:pt-10 md:pt-10 lg:pt-10 ">
        <section className="container mx-auto pb-4">
          <div className="text-center mb-10 py-10 border-dashed border-2 border-slate-300 border-r-0 border-l-0">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-4">
              Ponerse en contacto
            </h1>
            <p className="text-md  text-slate-600">
              Para conectarse con nuestro club de hockey profesional, visite nuestro sitio web para obtener detalles de contacto o comuníquese por correo electrónico o por teléfono.
            </p>
          </div>
          <div className="lg:flex">
            <div className="grid grid-cols-1 gap-4 lg:w-1/3 border-2 border-inherit p-8 rounded-lg">
              <div className="bg-slate-200 p-4 rounded-lg">
                <div>
                  <img src="/src/assets/Group 1171275317.png" alt="" />
                </div>
                <div className="my-4 text-black">
                  <p>Numero de telefono:</p>
                  <p className="text-xl font-bold text-slate-900">999999999</p>
                </div>
              </div>
              <div className="bg-slate-200 p-4 rounded-lg">
                <div>
                  <img src="/src/assets/Group 1171275318.png" alt="" />
                </div>
                <div className="my-4 text-black">
                  <p>Correo electrónico:</p>
                  <p className="text-xl font-bold text-slate-900">hockeys@support.com</p>
                </div>
              </div>
              <div className="bg-slate-200 p-4 rounded-lg">
                <div>
                  <img src="/src/assets/Group 1171275321.png" alt="" />
                </div>
                <div className="my-4 text-black">
                  <p>Ubicación:</p>
                  <p className="text-xl font-bold text-slate-900">152/1 Mohakhali Wireless Gate</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 p-8">
              <form className="lg:grid grid-cols-2 gap-6 text-bl">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-xl font-bold text-slate-900">
                      Su nombre
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Introduce tu nombre completo"
                    className="input input-bordered w-full bg-slate-100 h-10 px-4 rounded-xl mt-2"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-xl font-bold text-slate-900">
                      Tu correo electrónico
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Introduce tu correo electrónico"
                    className="input input-bordered w-full bg-slate-100 h-10 px-4 rounded-xl mt-2"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-xl font-bold text-slate-900">Sujeto</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Ingresa tu tema"
                    className="input input-bordered w-full bg-slate-100 h-10 px-4 rounded-xl mt-2"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-xl font-bold text-slate-900">Número de Teléfono</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Introduce tu número de teléfono"
                    className="input input-bordered w-full bg-slate-100 h-10 px-4 rounded-xl mt-2"
                  />
                </label>
                <label className="form-control w-full col-span-2">
                  <div className="label pb-2">
                    <span className="label-text text-xl font-bold text-slate-900">
                      Mensaje
                    </span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-48 w-full bg-slate-100 rounded-xl p-4 py-2"
                    placeholder="Escribe tu mensaje"
                  ></textarea>
                </label>
                <div className="col-span-2 flex justify-center">
                  <button className="btn border-none bg-[#FF4240] text-white mt-4 w-1/2 p-2 rounded-xl hover:bg-red-600">
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section >
      </div>
    </>
  );
}