import React, { useState, useEffect } from 'react';
import EmailTestimonial from './testimonials-cards/EmailTestimonial';
import SocialMediaTestimonial from './testimonials-cards/SocialMediaTestimonial';

const TestimonialSection = ({ testimonials }) => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(4);

  useEffect(() => {
    const updateVisibleTestimonials = () => {
      if (window.innerWidth < 1020) {
        setVisibleTestimonials(2);
      } else {
        setVisibleTestimonials(3);
      }

      if (window.innerWidth > 1400) {
        setVisibleTestimonials(4);
      }
    };

    updateVisibleTestimonials();
    window.addEventListener('resize', updateVisibleTestimonials);

    return () => {
      window.removeEventListener('resize', updateVisibleTestimonials);
    };
  }, []);

  return (
    <article className="mt-12 flex flex-wrap justify-center items-center gap-10 relative">
      {testimonials.slice(0, visibleTestimonials).map((testimonial, index) => {
        const isLastComment = index === visibleTestimonials - 1;

        if (testimonial.data.isShortMessage) {
          return <SocialMediaTestimonial key={index} testimonial={testimonial.data} lastComment={isLastComment} />;
        } else {
          return <EmailTestimonial key={index} testimonial={testimonial.data} opacity />;
        }
      })}

      <a href="/testimonials.html" className="gap-[0.5px] w-full max-w-[330px] self-center lg:p-0 lg:gap-0.5 mt-5 flex hover:scale-95 transition-all duration-200 absolute bottom-0 lg:right-0">
        <span className="flex font-medium xl:text-lg justify-center items-center bg-[#FFFFFF] rounded-md py-3 px-6 lg:py-4 text-blueBg border-[1px] border-blueBg w-full lg:w-max">
          View Testimonials
        </span>
        <div className="bg-[#FFFFFF] flex justify-center items-center rounded-r-sm rounded-l-md p-1 px-4 lg:px-6 border-[1px] border-blueBg">
          <div className="bg-blueBg rounded-sm p-1">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Im04LjAwNiAyMS4zMDhsLTEuMDY0LTEuMDY0TDE1LjE4NyAxMkw2Ljk0MiAzLjc1NmwxLjA2NC0xLjA2NEwxNy4zMTQgMTJ6Ii8+PC9zdmc+"
              className="object-contain w-6 h-6"
              alt="Arrow icon"
            />
          </div>
        </div>
      </a>
    </article>
  );
};

export default TestimonialSection;
