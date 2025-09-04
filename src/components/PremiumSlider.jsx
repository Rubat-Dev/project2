import React, { useEffect } from 'react'
import slide_1 from "../assets/slide_1.jpg";
import slide_2 from "../assets/slide_2.jpeg";
import slide_3 from "../assets/slide_3.jpeg";
import slide_4 from "../assets/slide_4.jpg";
import slide_5 from "../assets/slide_5.jpeg";
const premiumImages = [
    {src: slide_1, title: "Elegent Dresses"},
    {src: slide_2, title: "Luxury Shoes"},
    {src: slide_3, title: "Designer Purses"},
    {src: slide_4, title: "Exclusive Perfumes"},
    {src: slide_5, title: "Premium Watches"},
]
const PremiumSlider = ({activeIndex, setActiveIndex}) => {
    useEffect(() => {
      const interval = setInterval(
        () => setActiveIndex((prev) => (prev + 1) % premiumImages.length),
        4000);
        return () => clearInterval(interval);
    }, [setActiveIndex])
    
  return (
    <section className='relative w-full h-screen overflow-hidden'>
      {
        premiumImages.map((img, i) => (
            <div key={i}
            className={`absolute inset-0 transition-opacity duration-100 ${i === activeIndex?"opacity-100":"opacity-0"}`}>
                <img 
                src={img.src} 
                alt={img.title} 
                className='w-full h-full object-cover'/>
                {/* overlay */}
                <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
                    <h2 className='text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center'>{img.title}</h2>
                </div>
            </div>
        ))
      }
    </section>
  )
}

export {premiumImages};
export default PremiumSlider;

