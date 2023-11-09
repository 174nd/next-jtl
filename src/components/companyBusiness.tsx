import Image from 'next/image'
import React from 'react'

export default function CompanyBusiness() {
  return (
    
  <section id="companyBusiness" className="content-center bg-neutral-900">
  <div className="container">
    <div className="max-w-screen-xl px-4 py-4 mx-auto space-y-12 lg:space-y-20 lg:py-4 lg:px-6">
      <div className="items-center gap-8 lg:grid lg:grid-cols-12 xl:gap-16">
        <div className="mb-4 lg:col-span-6 lg:mb-0">
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Company Business</h2>
          <p className="mb-2 font-light lg:text-sm text-justify text-neutral-50">Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Similique nobis rerum repudiandae neque nisi, natus, corrupti libero, architecto odio
            quam eos excepturi quasi velit unde fugiat temporibus qui sequi necessitatibus?</p>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="h-48 w-full bg-white rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          "></div>
          <div className="justify-center flex flex-wrap relative">
            <div className="my-4 w-full lg:w-6/12 px-4">
              <div className="bg-sky-500 shadow-lg rounded-lg text-center p-4">
                <Image alt="..." className="shadow-md w-full mx-auto p-2 bg-white" src="/Picture1.jpg" width={681} height={496}/>
                <p className="text-sm text-white mt-4">Provide Clean Water</p>
              </div>
              <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-4 mt-8">
                <Image alt="..." className="shadow-md w-full mx-auto p-2 bg-white" src="/Picture2.jpg" width={681} height={496}/>
                <p className="text-sm text-white mt-4">Operational & Maintenance WTP and Distribustion Network</p>
              </div>
            </div>
            <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
              <div className="bg-orange-500 shadow-lg rounded-lg text-center p-4">
                <Image alt="..." className="shadow-md w-full mx-auto p-2 bg-white" src="/Picture3.jpg" width={681} height={496}/>
                <p className="text-sm text-white mt-4">Bottled Drinking Water “JATILUHUR”</p>
              </div>
              <div className="bg-red-600 shadow-lg rounded-lg text-center p-4 mt-8">
                <Image alt="..." className="shadow-md w-full mx-auto p-2 bg-white" src="/Picture4.png" width={681} height={496}/>
                <p className="text-sm text-white mt-4">Construction Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
