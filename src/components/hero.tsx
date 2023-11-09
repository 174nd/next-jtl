import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="overflow-auto content-center bg-neutral-50 relative">
      <div className="container">
        <div className="grid h-screen relative max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="my-auto place-self-center lg:col-span-5">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl bg-gradient-to-r from-primary-600  to-primary-300 inline-block text-transparent bg-clip-text">Jasa Tirta Luhur</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis temporibus rerum quas eveniet sit
              doloremque ea.</p>
          </div>
        </div>
      </div>

      
      <div className="invisible lg:visible w-[71%] absolute top-0 right-0 m-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-200" viewBox="0 0 973 609">
          <path d="M231.35 279.642C198.546 174.269 122.003 74.132 70.367 45.594L0 0h974v607.917c-30.374 3.039-47.586 0-91.123-13.172-43.536-13.171-228.313-49.646-357.403-64.338-129.09-14.691-253.118-119.05-294.124-250.765Z" />
        </svg>
      </div>  
      
      <div className="invisible lg:visible w-[70.5%] absolute top-0 right-0 m-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-300" viewBox="0 0 973 609">
          <path d="M231.35 279.642C198.546 174.269 122.003 74.132 70.367 45.594L0 0h974v607.917c-30.374 3.039-47.586 0-91.123-13.172-43.536-13.171-228.313-49.646-357.403-64.338-129.09-14.691-253.118-119.05-294.124-250.765Z" />
        </svg>
      </div>  
      
      <div className="invisible lg:visible w-[70%] absolute top-0 right-0 m-auto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 973 609">
          <defs>   
            <clipPath id="path">
              <path fill="#6686E5" d="M231.35 279.642C198.546 174.269 122.003 74.132 70.367 45.594L0 0h974v607.917c-30.374 3.039-47.586 0-91.123-13.172-43.536-13.171-228.313-49.646-357.403-64.338-129.09-14.691-253.118-119.05-294.124-250.765Z" />
            </clipPath>
          </defs> 
          <image href=" /hero.jpg" clip-path="url(#path)" className="w-[100%] bottom-"></image>
        </svg>
      </div>
    </section>
  )
}
