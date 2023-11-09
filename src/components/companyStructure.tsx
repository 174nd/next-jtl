import React from 'react'

export default function CompanyStructure() {
  return (
    
  <section id="direksiKomisaris" className="py-24 text-center relative">
  <div className="container">
    <div className="text-center">
      <h2 className="mb-12 section-heading wow fadeInDown" data-wow-delay="0.3s">Direksi & Komisaris</h2>
    </div>
    <div className="flex flex-wrap justify-center">
      <div className="w-full grid lg:grid-cols-11 lg:gap-4">
        
        <div className="flex justify-center py-3 w-full mb-10 text-center transition-all duration-200  rounded-lg md:flex-row md:text-left bg-neutral-50 shadow hover:bg-white ease col-span-12 lg:col-span-3 lg:row-span-3 lg:row-start-1 lg:col-start-5">
          <div className="flex flex-col mx-4">
            <img className="object-cover w-full h-fw-full rounded-full rounded-tr-none mb-5 bg-gray-300 md:mb-0"
            src="/UdienYulianto.png" alt=""/>
            <h3 className="mt-3 text-xl text-center font-semibold text-gray-800 truncate">Udien Yulianto</h3>
            <p className="mt-2 text-sm font-base text-center text-gray-600">Komisaris Utama</p>
          </div>
        </div>
        
        <div className="flex justify-center py-3 w-full mb-10 text-center transition-all duration-200  rounded-lg md:flex-row md:text-left bg-neutral-50 shadow hover:bg-white ease col-span-12 lg:col-span-3 lg:row-span-3 lg:row-start-2 lg:col-start-8">
          <div className="flex flex-col mx-4">
            <img className="object-cover w-full h-fw-full rounded-full rounded-tr-none mb-5 bg-gray-300 md:mb-0"
            src="/Picture11.jpg"
            alt=""/>
            <h3 className="mt-3 text-xl text-center font-semibold text-gray-800 truncate">Indriani Widiastuti</h3>
            <p className="mt-2 text-sm font-base text-center text-gray-600">Komisaris</p>
          </div>
        </div>
        
        <div className="flex justify-center py-3 w-full mb-10 text-center transition-all duration-200  rounded-lg md:flex-row md:text-left bg-neutral-50 shadow hover:bg-white ease col-span-12 lg:col-span-3 lg:row-span-3 lg:row-start-4 lg:col-start-5">
          <div className="flex flex-col mx-4">
            <img className="object-cover w-full h-fw-full rounded-full rounded-tr-none mb-5 bg-gray-300 md:mb-0"
            src="/Picture22.jpg"
            alt=""/>
            <h3 className="mt-3 text-xl text-center font-semibold text-gray-800 truncate">Nandang Munandar</h3>
            <p className="mt-2 text-sm font-base text-center text-gray-600">Direktur Utama</p>
          </div>
        </div>
        
        <div className="flex justify-center py-3 w-full mb-10 text-center transition-all duration-200  rounded-lg md:flex-row md:text-left bg-neutral-50 shadow hover:bg-white ease col-span-12 lg:col-span-3 lg:row-span-3 lg:row-start-7 lg:col-start-3">
          <div className="flex flex-col mx-4">
            <img className="object-cover w-full h-fw-full rounded-full rounded-tr-none mb-5 bg-gray-300 md:mb-0"
            src="/Picture22.jpg"
            alt=""/>
            <h3 className="mt-3 text-xl text-center font-semibold text-gray-800 truncate">Nandang Munandar</h3>
              <p className="mt-2 text-sm font-base text-center text-gray-600">Direktur Operasi dan Pengembangan</p>
          </div>
        </div>
        
        <div className="flex justify-center py-3 w-full mb-10 text-center transition-all duration-200  rounded-lg md:flex-row md:text-left bg-neutral-50 shadow hover:bg-white ease col-span-12 lg:col-span-3 lg:row-span-3 lg:row-start-7 lg:col-start-7">
          <div className="flex flex-col mx-4">
            <img className="object-cover w-full h-fw-full rounded-full rounded-tr-none mb-5 bg-gray-300 md:mb-0"
            src="/Picture22.jpg"
            alt=""/>
            <h3 className="mt-3 text-xl text-center font-semibold text-gray-800 truncate">Nandang Munandar</h3>
              <p className="mt-2 text-sm font-base text-center text-gray-600">Direktur Keuangan, SDM dan Manajemen Risiko</p>
          </div>
        </div>

      </div>
    </div>
  </div>
  <img src="/bgNews.jpg" alt="background" className="w-full h-full -z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>

</section>
  )
}
