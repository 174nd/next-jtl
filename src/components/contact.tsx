import React from 'react'

export default function Contact() {
  return (
    
  <section id="contactUs" className="content-center relative bg-neutral-900">
  <div className="container py-8">

    <h2 className="mb-4 text-3xl font-extrabold tracking-tigh dark:text-white w-full text-center">Contact Us</h2>
    <p className="mb-4 font-light lg:text-sm text-white w-4/6 text-center mx-auto">Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Vitae perferendis deleniti tenetur, deserunt itaque veniam provident quod ipsa. Rerum repellat
      fugiat, vero minus facere ex recusandae porro exercitationem? Voluptatum, tenetur.</p>

    <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-10 lg:py-8 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <div className="w-full">
          <div className="wow fadeInUp rounded-lg bg-white py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]">
            <div className="mb-6">
              <h4 className="block text-xs text-dark">Email Address</h4>
              <p><a href="#">support@startup.com</a></p>
            </div>
            <div className="mb-6">
              <h4 className="block text-xs text-dark">Office Location</h4>
              <p>Jl. Insinyur H. Juanda No.124 D, RT.002/RW.007, Margahayu, Kec. Bekasi Tim., Kota Bks, Jawa Barat 17113</p>
            </div>
            <div className="mb-6">
              <h4 className="block text-xs text-dark">Phone Number</h4>
              <p><a href="#">+009 8754 3433 223</a></p>
            </div>
            <div className="mb-6">
              <h4 className="block text-xs text-dark">Skype Email</h4>
              <p><a href="#">admin@jtl.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-8">
        <div className="w-full h-full">
          <object className="w-full h-full rounded-lg border-0"
            data="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.533406645787!2d107.0084875!3d-6.2461521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f2a626d2cbf%3A0x8f16843cd49b9aee!2sPT%20Jasa%20Tirta%20Luhur!5e0!3m2!1sid!2sid!4v1692878059642!5m2!1sid!2sid"></object>

        </div>
      </div>
    </div>
  </div>
</section>
  )
}
