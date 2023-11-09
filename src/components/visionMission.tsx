"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { CiPlay1 } from 'react-icons/ci';
import ModalVideo from "react-modal-video";
import { Parallax } from 'react-parallax';
export default function VisionMission() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section id="visiMisi" className="relative z-10 content-center bg-neutral-300">
      
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={"bgNews.jpg"}
      strength={-200}
    >
      <div className="container">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="hidden w-full mb-4 lg:mb-0 lg:flex lg:self-center relative">
              <div className="p-3 bg-white border-8 border-primary-500 rounded-lg">
              <Image className="rounded-lg w-full h-full" src="/hero.jpg" alt="feature image 2" width={528} height={352}/>

              </div>
              <button 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28"
                onClick={() => setOpen(true)}
              >
                <CiPlay1 className="h-full w-full fill-primary-500 transition hover:scale-110 hover:fill-primary-300"/>
              </button>
            </div>

            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Visi Misi Perusahaan
              </h2>
              <p className="mb-2 font-light lg:text-xl text-justify">Menjadi Perusahaan Terbaik di Indonesia dalam bidang
                Penyediaan Air
                Bersih bagi Generasi kita di Masa Mendatang</p>
              <ul role="list" className="space-y-2 border-gray-200 my-2 dark:border-gray-700">
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-4 h-4 mt-2 text-primary-500 dark:text-primary-400" fill="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.297 14.74L.434 24v-5.263L16.8 12.11l6.497 2.631zm.27-5.371L.433 0v5.263l23.132 9.368V9.37z" />
                  </svg>
                  <span
                    className="text-base text-justify lg:text-lg font-medium leading-tight text-gray-900 dark:text-white">Menyediakan
                    Air Bersih dengan Kualitas dan Kuantitas Terbaik sesuai dengan Kebutuhan serta Menjaga
                    Kelestariannya</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-4 h-5 mt-2 text-primary-500 dark:text-primary-400" fill="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.297 14.74L.434 24v-5.263L16.8 12.11l6.497 2.631zm.27-5.371L.433 0v5.263l23.132 9.368V9.37z" />
                  </svg>
                  <span
                    className="text-base text-justify lg:text-lg font-medium leading-tight text-gray-900 dark:text-white">Menjaga
                    dan Meningkatkan Hubungan Baik dengan Mitra guna Meningkatkan Potensi Bisnis Perusahaan</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-4 h-5 mt-2 text-primary-500 dark:text-primary-400" fill="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.297 14.74L.434 24v-5.263L16.8 12.11l6.497 2.631zm.27-5.371L.433 0v5.263l23.132 9.368V9.37z" />
                  </svg>
                  <span
                    className="text-base text-justify lg:text-lg font-medium leading-tight text-gray-900 dark:text-white">Menciptakan
                    Lingkungan Kerja yang Produktif sehingga dapat Meningkatkan Kompetensi Pegawai menjadi Profesional
                    yang Berintegritas tinggi dan penuh Tanggung Jawab</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </Parallax>



      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="A2Uccg2OMtc"
        onClose={() => setOpen(false)}
      />

    </section>
  )
}
