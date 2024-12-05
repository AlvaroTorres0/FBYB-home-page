import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import './Swiper-Styles.css';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

export const expertsSwiperConfig = {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: true,
};

const experts = [
  {
    id: 'Jane Smith',
    name: 'Jane Smith',
    title: 'Senior Investment Advisor',
    image: '/public/assets/experts/1.png',
    description:
      'With over 10 years of experience in Dubai real estate, Jane specializes in investment planning and property acquisition, helping clients navigate the market with ease and confidence.',
  },
  {
    id: 'Anish Singh',
    name: 'Anish Singh',
    title: 'Senior Investment Advisor',
    image: '/public/assets/experts/2.png',
    description:
      'With over 10 years of experience in Dubai real estate, Jane specializes in investment planning and property acquisition, helping clients navigate the market with ease and confidence.',
  },
  {
    id: 'Ahmed Abdullah',
    name: 'Ahmed Abdullah',
    title: 'Senior Investment Advisor',
    image: '/public/assets/experts/3.png',
    description:
      'With over 10 years of experience in Dubai real estate, Jane specializes in investment planning and property acquisition, helping clients navigate the market with ease and confidence.',
  },
];

interface expert {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
}

const ExpertCard: React.FC<expert> = ({ id, name, title, image, description }) => {
  return (
    <article className="flex flex-col gap-4 max-w-[480px] p-6 w-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]" key={id}>
      <img src={image} alt={`Image ${name}`} className="w-full h-full rounded-[4px] object-contain" />
      <h5 className="text-[22px]/[26.4px] text-blueBg font-normal">{name}</h5>

      <h6 className="text-[#7C8997] font-medium text-[13px]/[17.68px] border-[1px] border-[#7C8997] py-1 px-2">{title}</h6>

      <p className="text-[#606773] font-light text-[14px]/[19.04px]">{description}</p>
    </article>
  );
};

export const ExpertsCarousel: React.FC = () => {
  return (
    <div className="custom-swiper-container w-full relative">
      <div className="w-full flex flex-row gap-3 justify-end pb-6 pr-8 lg:absolute lg:bottom-0 lg:left-0 lg:w-max lg:z-40 mb-12 lg:mb-10">
        <button className="custom-prev">
          <img src="/public/assets/locations/prev-btn.png" alt="Previous" className="w-[72px] h-[72px]" />
        </button>
        <button className="custom-next">
          <img src="/public/assets/locations/next-btn.png" alt="Next" className="w-[72px] h-[72px]" />
        </button>
      </div>

      <Swiper
        {...expertsSwiperConfig}
        slidesPerView={1}
        centeredSlides={true}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        className="w-full max-w-[440px]"
      >
        {experts.map(location => (
          <SwiperSlide key={location.id} className="p-8 w-full flex justify-center">
            <ExpertCard {...location} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
