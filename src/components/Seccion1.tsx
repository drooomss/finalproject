import React from 'react'

const Seccion1 = () => {
  return (
    <div className="w-full h-[1900px] mt-10 flex flex-col relative 2xl:w-full 2xl:h-full">

      {/* Sección Encuentra lo que estás Buscando */}
      <div className="w-auto h-auto mx-auto mt-6 font-bold text-4xl text-center 2xl:mx-auto" id="h1">
        <h1>ENCUENTRA LO QUE ESTAS <span className="text-green-500">BUSCANDO</span></h1>
      </div>
      <div className="outline mx-auto w-[350px] mt-10 opacity-60 2xl:hidden"></div>
      <div className="2xl:flex 2xl:flex-col-2 2xl:h-[800px] ">
        {/* Sección Bolsos al por Mayor */}
        <div className="mx-auto w-[350px] h-[350px] mt-10 2xl:mt-24  ">
          <img className="w-full h-full" src="/img/puma.png" alt="" />
          <div className="mx-auto 2xl:mt-20">
            <h1 className="text-center font-bold text-3xl text-black">BOLSOS AL X MAYOR</h1>
          </div>
          <div className="mx-auto mt-3 2xl:mt-3">
            <p className="text-center text-xl">
              Explora la fusión perfecta de moda y funcionalidad con nuestros bolsos
            </p>
          </div>
          <div className="w-[100px] h-[100px] mx-auto mt-5 2xl:mt-10">
            <a href="#">
              <button
                className="bg-black text-center text-white rounded-full w-[130px] h-[70px] -ml-4 font-bold hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
                COMPRAR
              </button>
            </a>
          </div>
        </div>

        {/* Sección Ropa al por Mayor */}
        <div className="mx-auto w-[350px] h-[450px] mt-48 2xl:mt-3">
          <img className="w-full h-full" src="/img/fila.png" alt="" />
          <div className="mx-auto 2xl:mt-[63px]">
            <h1 className="text-center font-bold text-3xl text-black">ROPA AL X MAYOR</h1>
          </div>
          <div className="mx-auto mt-5 2xl:mt-3">
            <p className="text-center text-xl">
              Explora las distintas cantidades de ropa que tenemos para ofrecer
            </p>
          </div>
          <div className="w-[100px] h-[100px] mx-auto mt-5 2xl:mt-10">
            <a href="#">
              <button
                className="bg-black text-center text-white rounded-full w-[130px] h-[70px] -ml-4 font-bold hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
                COMPRAR
              </button>
            </a>
          </div>
        </div>

        {/* Sección Calzado al por Mayor */}
        <div className="mx-auto w-[350px] h-[250px] mt-48 2xl:mt-40 2">
          <img className="w-full h-full mt-3" src="/img/zapatilla.png" alt="" />
          <div className="mx-auto 2xl:mt-[100px]">
            <h1 className="text-center font-bold text-3xl text-black">CALZADO AL X MAYOR</h1>
          </div>
          <div className="mx-auto mt-3 2xl:mt-3">
            <p className="text-center text-xl">
              Explora las distintas cantidades de calzado que tenemos para ofrecer
            </p>
          </div>
          <div className="w-[100px] h-[100px] mx-auto 2xl:mt-10">
            <a href="#">
              <button
                className="bg-black text-center text-white rounded-full w-[130px] h-[70px] -ml-4 font-bold hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
                COMPRAR
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seccion1
