import React from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'



const Inicio = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">

  {/* Texto a la izquierda */}
  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4">
    <div className="text-center">
      <h1 className="text-green-500 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-8 md:mt-12 lg:mt-16">
        ROPA Y CALZADO <br /> AL POR MAYOR
      </h1>
    </div>
    <div className="text-black text-center mt-4">
      <p className="font-semibold text-lg md:text-2xl lg:text-3xl">
        Ofrecemos una amplia selección de ropa <br /> y calzado de alta calidad a precios <br /> irresistibles.
      </p>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center justify-center">
            <Link href="/products" className={buttonVariants()}>
              Encuentra Tendencias
            </Link>
            <Button variant="ghost">
              Calidad Comprobada &rarr;
            </Button>
          </div>
  </div>

  {/* Video a la derecha con bordes redondeados */}
  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 overflow-hidden rounded-2xl ">
    <div className="bg-black opacity h-auto">
      <video className="w-full h-full rounded-md" src="/img/Diseño sin título.mp4" controls autoPlay loop muted></video>
    </div>
  </div>
</div>
  )
}

export default Inicio
