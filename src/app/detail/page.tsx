import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Hero from '@/components/hero';

export default function Detail() {
  return (
    
    <section className="section pt-0">
    <div className="container">
      <article>
        <div className="row justify-center">
          <div className="lg:col-10">
              <Image
                src={'/hero.jpg'}
                height="700"
                width="1120"
                alt={"123"}
                priority={true}
                className="fade w-full rounded-lg opacity-0"
              />
          </div>
          <div className="lg:col-8">
            <div className="mt-6 flex items-center">
              <div className="overflow-hidden rounded-full border-2 border-white shadow-[0_0_0_2px] shadow-primary">
              <Image
                src={'/hero.jpg'}
                height="50"
                width="50"
                alt={"123"}
              />
              </div>
              <div className="pl-5">
                <p className="font-medium text-dark">sss</p>
                <p>
                04 Apr 2022 - 02 Mins read
                </p>
              </div>
            </div>
            <div className="content mt-16 mb-16 text-left">
              ....
            </div>
          </div>
        </div>
      </article>

    </div>
  </section>
  )
}
