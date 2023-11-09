"use client";
import React, { useState } from 'react'
import AccordionItem from './accordionItems';

export default function BusinessMap() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    if(open === index){
      return setOpen(null);
    }

    setOpen(index);
  }

  const accData = [
    {title: "AMDK Jatiluhur", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis libero possimus accusantium architecto! Sit esse excepturi dolores animi similique, a nesciunt accusantium harum beatae saepe natus architecto incidunt maiores corrupti."},
    {title: "SPAM Biki & Curug (O&M)", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis libero possimus accusantium architecto! Sit esse excepturi dolores animi similique, a nesciunt accusantium harum beatae saepe natus architecto incidunt maiores corrupti."},
    {title: "SPAM Marunda", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis libero possimus accusantium architecto! Sit esse excepturi dolores animi similique, a nesciunt accusantium harum beatae saepe natus architecto incidunt maiores corrupti."},
  ];

  return (
    












    
  <section id="petaBisnis" className="content-center bg-neutral-200">
    <div className="container">












      
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex lg:self-start" src="/hero.jpg"
            alt="feature image 2"/>

          <div className="text-gray-900 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-900">Peta Bisnis</h2>
            <p className="mb-8 text-gray-900 font-light lg:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Modi
              necessitatibus maiores aliquid hic quos deleniti!</p>
            <div className="max-w-screen-md mx-auto">
              <div className="grid divide-y divide-gray-900 max-w-xl mx-auto mt-8">

              {accData.map((d,k) => (
                <AccordionItem
                  key={k}
                  open={k === open}
                  title={d.title}
                  description={d.description}
                  toggle={() => toggle(k)}
                />
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
