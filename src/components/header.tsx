import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className="bg-transparent absolute t-0 l-0 w-full flex items-center z-10">
    <div className="container">
      <div className="flex intems-center justify-between ">
        <div className="px-4">
          <a href="#home" className="font-bold text-lg text-primary-500 py-4 flex items-center">
            <Image src="/logo.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap bg-gradient-to-r from-primary-600  to-primary-300 inline-block text-transparent bg-clip-text">Jasa Tirta Luhur</span>
          </a>
        </div>

        <div className="flex items-center px-4">
          <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
          </button>

          <nav id="nav-menu"
            className="hidden absolute py-4 bg-white shadow-lg rounded-lg max-w-[200px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none transition duration-300 ease-in-out">
            <ul className="block lg:flex">
              <li className="group">
                <a href="#home"
                  className="text-base textneutral-900 py-2 mx-8 flex group-hover:text-primary-500">Beranda</a>
              </li>
              <li className="group">
                <a href="#about" className="text-base textneutral-900 py-2 mx-8 flex group-hover:text-primary-500">Tentang
                  Saya</a>
              </li>
              <li className="group">
                <a href="#portofolio"
                  className="text-base textneutral-900 py-2 mx-8 flex group-hover:text-primary-500">Portofolio</a>
              </li>
              <li className="group">
                <a href="#blog" className="text-base textneutral-900 py-2 mx-8 flex group-hover:text-primary-500">Blog</a>
              </li>
              <li className="group">
                <a href="#contact"
                  className="text-base textneutral-900 py-2 mx-8 flex group-hover:text-primary-500">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}
