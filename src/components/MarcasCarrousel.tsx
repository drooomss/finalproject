"use client"

import React from 'react'
import Image from 'next/image'


const MarcasCarrousel = () => {
  return (
    <div className="p-1 2xl:hidd" id="Marcas">
      <p className="text-xl font-semibold ml-5 mt-7">Stock de Marcas</p>
      <div className="w-full h-[300px] flex flex-none overflow-x-auto overscroll-x-contain">
        <div className="w-56 h-56 shadow-2xl m-10 rounded-xl flex flex-none">
          <img className="w-auto h-auto p-4" src="/img/ropa logos slide/adidas logo.jfif" alt="" />
        </div>

        <div className="w-56 h-56 shadow-2xl m-10 rounded-xl flex flex-none">
          <img className="w-auto h-auto p-4" src="/img/ropa logos slide/fila logo.jpg" alt="" />
        </div>

        <div className="w-56 h-56 shadow-2xl m-10 rounded-xl flex flex-none">
          <img className="w-auto h-auto p-4" src="/img/ropa logos slide/nike logo.png" alt="" />
        </div>

        <div className="w-56 h-56 shadow-2xl m-10 rounded-xl flex flex-none">
          <img className="w-auto h-auto p-4" src="/img/ropa logos slide/puma logo.jpg" alt="" />
        </div>

        <div className="w-56 h-56 shadow-2xl m-10 rounded-xl flex flex-none">
          <img className="w-auto h-auto p-4" src="/img/ropa logos slide/northfacelogo.png" alt="" />
        </div>

        <div className="w-56 h-56 shadow-2xl m-10 rounded-xl flex flex-none">
          <img className="w-auto h-auto p-4" src="/img/ropa logos slide/caterpillar logo.png" alt="" />
        </div>

        <div className="w-56 h-56 shadow-2xl m-10 rounded-xl flex flex-none">
          <img className="w-auto h-auto p-4" src="/img/zara.png" alt="" />
        </div>

        <div className="w-56 h-56 shadow-2xl m-10 rounded-xl flex flex-none">
          <img className="w-auto h-auto p-4" src="/img/hym.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default MarcasCarrousel
