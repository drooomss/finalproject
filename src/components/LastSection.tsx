"use client"
import React from 'react'

const LastSection = () => {
  return (
    <div className="w-full h-auto relative flex flex-col items-center md:flex-row md:justify-around md:items-start md:p-16" id="footer">
      <div className="w-[200px] h-[200px] mt-12 mb-8 md:mb-0">
        <img className="w-full h-full object-cover" src="/img/footer.png" alt="" />
      </div>
      {/* texto footer */}
      <div className="w-[86%] h-auto md:w-[40%]">
        <h1 className="text-left text-3xl text-black font-bold mb-6">
          EMPRENDE TU CAMINO HACIA EL <span className="text-green-500">ÉXITO</span>
          <br />
          <br />
          DONDE LAS <span className="text-green-500">IDEAS</span> SE ENCUENTRAN CON EL IMPULSO Y
          <br />
          LOS <span className="text-green-500">SUEÑOS</span> SE CONVIERTEN EN <span className="text-green-500">LOGROS</span>.
          <br />
          <br />
          ¡INICIA, AHORA!
        </h1>
      </div>
      {/* Contacto */}
      <div className="w-[86%] h-auto md:w-[20%] md:outline mx-auto opacity-60"></div>
      <div className="w-[86%] h-[200px] md:w-[40%] md:pt-16">
        <h1 className="text-left font-bold text-2xl mb-6">
          Conecta con Nosotros
        </h1>
        <h2 className="text-lg font-semibold mb-4">
          <a className="hover:text-green-500" href="https://www.instagram.com/fivestarltda/">Instagram</a> <br />
          <a className="hover:text-green-500" href="https://web.facebook.com/profile.php?viewas=100000686899395&id=61553277945796">Facebook</a>
          <p className="mt-2">fivestarltda@hotmail.com</p>
        </h2>
      </div>
      {/* Ubicanos */}
      <div className="w-[86%] h-auto md:w-[40%] md:mb-8">
        <div className="my-8 text-2xl font-bold">Ubicanos</div>
        <div className="w-auto h-auto text-lg my-4">Sta. Cruz 2-24, Iquique Tarapacá, Chile</div>
        <div className="w-auto h-auto text-lg my-4">Add your location 123 Anywhere St., Any City, ST 12345</div>
        <div className="w-auto h-auto text-lg my-4">Add your location 123 Anywhere St., Any City, ST 12345</div>
      </div>
    </div>

  )
}

export default LastSection
