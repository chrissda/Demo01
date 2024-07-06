import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { Transition } from "@headlessui/react";

const CarouselN = () => {

  // imagenes para Slide
  const slides = [
    "https://cdn.videocardz.com/1/2017/05/ASUS-X299-onboard-M2-shield.jpg",
    "https://dlcdnrog.asus.com/rog/media/171077235070.webp",
    "https://dlcdnrog.asus.com/rog/media/1662554060763.webp",
    "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/geforce-rtx-4080-4070-ti-4070-super-gpu/nvidia-geforce-rtx-4070-ti-super.jpg",
    "https://dlcdnrog.asus.com/rog/media/1584049084712.webp",
    "https://images5.alphacoders.com/116/1162236.jpg",
    
  ];

  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);

  const aSlide = () => {
    setShow(false);
    setTimeout(() => {
      setIndex((index + 1) % slides.length);
      setShow(true);
    }, 300)
  }

  const pSlide = () => {
    setShow(false);
    setTimeout(() => {
      setIndex((index - 1 + slides.length) % slides.length);
      setShow(true);
    }, 300)
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Transition show={show}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="relative w-full h-auto">
          <img 
            src={slides[index]} alt="" className="w-full h-full object-cover"
          />
        </div>
      </Transition>
      
      {/* botones circulo de react icons */}
      <button 
        onClick={pSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 font-bold p-4 text-3xl"
      >
        <BsFillArrowLeftCircleFill /></button>
      <button 
        onClick={aSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 font-bold p-4 text-3xl"  
      >
        <BsFillArrowRightCircleFill /></button>
      
      
    </div>
  );

};


export default CarouselN;
