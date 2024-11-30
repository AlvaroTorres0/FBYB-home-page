import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import './SwiperStyles.css';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';

export const LocationsProps = {
  loop: true,
  modules: [Autoplay, Mousewheel, Pagination, Navigation],
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  pagination: true,
  spaceBetween: 25,
  slidesPerView: 1.9,

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};

const locations = [
  {
    id: 1,
    name: 'DOWNTOWN DUBAI',
    image: '/public/assets/locations/1.png',
  },
  {
    id: 2,
    name: 'DUBAI MARINA',
    image: '/public/assets/locations/2.png',
  },
  {
    id: 3,
    name: 'BUSINESS BAY',
    image: '/public/assets/locations/3.png',
  },
  {
    id: 4,
    name: 'MEYDAN',
    image: '/public/assets/locations/4.png',
  },
  {
    id: 5,
    name: 'ARABIAN RANCHES',
    image: '/public/assets/locations/5.png',
  },
  {
    id: 6,
    name: 'PALM JUMEIRAH',
    image: '/public/assets/locations/6.png',
  },
  {
    id: 7,
    name: 'JUMEIRAH VILLAGE CIRCLE (JVC)',
    image: '/public/assets/locations/7.png',
  },
  {
    id: 8,
    name: 'BLUEWATERS ISLAND',
    image: '/public/assets/locations/8.png',
  },
];

interface Location {
  id: number;
  name: string;
  image: string;
}

const LocationCard: React.FC<Location> = ({ id, name, image }) => {
  return (
    <article className="flex flex-col gap-2 max-w-[340px] sm:max-w-[400px] mb-10" key={id}>
      <img src={image} alt={`Image ${name}`} className="w-full h-full rounded-md" />
      <div className="w-full border-2 border-[#C2A86A] rounded-sm py-3 text-center">
        <h5>{name}</h5>
      </div>
    </article>
  );
};

export const TopLocationsCarousel: React.FC = () => {
  return (
    <div className="max-w-[320px] sm:min-w-full">
      <Swiper {...LocationsProps}>
        {locations.map(location => (
          <SwiperSlide key={location.id}>
            <LocationCard {...location} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
