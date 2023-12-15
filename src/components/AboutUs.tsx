import React from 'react'

const AboutUs = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row">
      {/* Contenedor de Imagen en la Columna 1 */}
      <div className="w-full md:w-[50%] p-12 pb-1">
        <img className="rounded-3xl w-full h-full" src="/img/pexels-rfstudio-3812039.jpg" alt="" />
      </div>
      {/* Contenedor de Texto en la Columna 2 */}
      <div className="w-full md:w-[50%] flex flex-col">

        {/* h1 en la Fila 2 */}
        <div className="w-auto h-auto text-black font-bold text-5xl p-12 mt-10" id="h1">
          <h1>SOBRE <br /> NOSOTROS</h1>
        </div>
        {/* p en la Fila 3 */}
        <div className="w-full h-auto p-12 pt-1 2xl:w-[500px]" id="parrafo">
          <p className="text-start text-lg pt-3">Bienvenido a Five Star, tu destino de moda exclusiva.
            En Five Star, no solo vendemos productos, creamos experiencias. <br />
            Nos enorgullece ser tu socio de confianza para las últimas tendencias en calzado,
            ropa, bolsos y carteras. <br /> Nos especializamos en ventas al por mayor,
            ofreciendo una colección cuidadosamente seleccionada que combina estilo,
            comodidad y calidad.
            <br />

            <br />
            Gracias por elegir Five Star, donde la moda se encuentra con la excelencia. Tu estilo, tu elección, tu
            experiencia: Five Star.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
