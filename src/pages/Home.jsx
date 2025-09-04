import React, { useState } from 'react'
import PremiumSlider, { premiumImages } from '../components/PremiumSlider';
import About from '../pages/Products';
import Products from '../pages/Products';
import  Contact  from '../pages/Contact';
import Reviews from "../pages/Reviews"
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
    <div>
      {/* Premium Fullscreen Slider */}
      <PremiumSlider activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      {/* Category Slider */}
      <section className='max-w-[1200px] mx-auto py-16' id='home'>
        <h2 className='text-center text-4xl font-bold mb-8'>Shop by{" "}
        <span className='bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent'>Category</span>
        </h2>
        <div className="flex flex-wrap  justify-center gap-6 px-4">
          {
            premiumImages.map((cat, i) => (
              <div key={cat.title}
              className='w-[200px] h-[200px] rounded-full bg-gray-200 flex justify-center items0center shadow-md cursor-pointer hover:scale-105 transition overflow-hidden'
              onClick={() => setActiveIndex(i)}>
                <img 
                src={cat.src} 
                alt={cat.title}
                className='w-full h-full object-cover' />
              </div>
            ))
          }
        </div>
      </section>
    </div>
    <About/>
    <Products/>
    <Reviews/>
    <Contact/>
   </>
  )
}

export default Home
