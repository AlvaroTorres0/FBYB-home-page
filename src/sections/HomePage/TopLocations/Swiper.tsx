import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Autoplay } from 'swiper/modules';
import './SwiperStyles.css';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const LocationsProps = {
  modules: [Autoplay, Navigation],
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  spaceBetween: 25,
  slidesPerView: 1.9,
  navigation: true,
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 6,
    },
    1248: {
      slidesPerView: 5.8,
      spaceBetween: 20,
    },
  },
};

const locations = [
  {
    id: 1,
    name: 'DOWNTOWN DUBAI',
    image: '/public/assets/locations/1.webp',
  },
  {
    id: 2,
    name: 'DUBAI MARINA',
    image: '/public/assets/locations/2.webp',
  },
  {
    id: 3,
    name: 'BUSINESS BAY',
    image: '/public/assets/locations/3.webp',
  },
  {
    id: 4,
    name: 'MEYDAN',
    image: '/public/assets/locations/4.webp',
  },
  {
    id: 5,
    name: 'ARABIAN RANCHES',
    image: '/public/assets/locations/5.webp',
  },
  {
    id: 6,
    name: 'PALM JUMEIRAH',
    image: '/public/assets/locations/6.webp',
  },
  {
    id: 7,
    name: 'JUMEIRAH VILLAGE CIRCLE (JVC)',
    image: '/public/assets/locations/7.webp',
  },
  {
    id: 8,
    name: 'BLUEWATERS ISLAND',
    image: '/public/assets/locations/8.webp',
  },
];

interface Location {
  id: number;
  name: string;
  image: string;
}

const LocationCard: React.FC<Location> = ({ id, name, image }) => {
  return (
    <article className="flex flex-col gap-2 max-w-[380px] w-full sm:max-w-[280px] lg:max-w-[170px] xl:max-w-[190px] mb-10" key={id}>
      <img src={image} alt={`Image ${name}`} className="w-full h-full rounded-md max-h-[330px] object-contain" />
      <div className="w-full border-2 border-[#C2A86A] rounded-sm py-3 text-center">
        <h5 className="text-xs lg:text-[14px]/[19.04px] font-light">{name}</h5>
      </div>
    </article>
  );
};

export const TopLocationsCarousel: React.FC = () => {
  return (
    <div className="custom-swiper-container w-full mx-auto">
      <div className=" w-full flex flex-row gap-3 justify-end pb-16 pr-8">
        <button className="custom-prev">
          <img src="/public/assets/locations/prev-btn.webp" alt="Previous" className="w-[56px] h-[56px]" />
        </button>
        <button className="custom-next">
          <img src="/public/assets/locations/next-btn.webp" alt="Next" className="w-[56px] h-[56px]" />
        </button>
      </div>

      <Swiper
        {...LocationsProps}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        centeredSlides={true}
        className="overflow-x-hidden w-full"
      >
        {locations.map(location => (
          <SwiperSlide key={location.id}>
            <LocationCard {...location} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
