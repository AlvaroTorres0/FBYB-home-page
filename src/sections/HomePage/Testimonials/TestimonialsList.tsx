import React, { useState, useEffect } from 'react';
import EmailTestimonial from './testimonials-cards/EmailTestimonial';
import SocialMediaTestimonial from './testimonials-cards/SocialMediaTestimonial';

const TestimonialSection = ({ testimonials, isIndexSection }) => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(4);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);

  function handleLoadMore() {
    setVisibleTestimonials(testimonials.length);
    setShowLoadMoreButton(false);
  }

  useEffect(() => {
    if (!isIndexSection) return;

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
    <article className="mt-12 flex flex-wrap justify-center items-center gap-10 relative h-max">
      {testimonials.slice(0, visibleTestimonials).map((testimonial, index) => {
        const isLastComment = index === visibleTestimonials - 1;

        if (testimonial.data.isShortMessage) {
          return <SocialMediaTestimonial key={index} testimonial={testimonial.data} lastComment={isLastComment && isIndexSection} />;
        } else {
          return <EmailTestimonial key={index} testimonial={testimonial.data} lastComment={isIndexSection} />;
        }
      })}

      {showLoadMoreButton && !isIndexSection && (
        <button onClick={handleLoadMore} className="py-3 border-[1px] border-blueBg text-blueBg rounded-md font-medium px-4 hover:scale-105 transition-all duration-200">
          Load More
        </button>
      )}

      {isIndexSection && (
        <a href="/testimonials.html" className="gap-[0.5px] w-full max-w-[330px] self-center lg:p-0 lg:gap-0.5 flex hover:scale-95 transition-all duration-200 absolute -bottom-12 lg:right-0 group">
          <span className="flex font-medium xl:text-lg justify-center items-center bg-[#FFFFFF] rounded-md py-3 px-6 lg:py-4 text-blueBg border-[1px] border-[#03264D4D] w-full lg:w-max text-[16px]/[17.92px] group-hover:bg-[#E8D6AD] group-hover:text-[#03264D] transition-all duration-200">
            View Testimonials
          </span>
          <div className="bg-[#FFFFFF] flex justify-center items-center rounded-r-sm rounded-l-md p-1 px-4 lg:px-6 border-[1px] border-[#03264D4D] group-hover:bg-[#E8D6AD] group-hover:text-[#03264D] transition-all duration-200">
            <div className="bg-blueBg rounded-sm p-1">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Im04LjAwNiAyMS4zMDhsLTEuMDY0LTEuMDY0TDE1LjE4NyAxMkw2Ljk0MiAzLjc1NmwxLjA2NC0xLjA2NEwxNy4zMTQgMTJ6Ii8+PC9zdmc+"
                className="object-contain w-6 h-6"
                alt="Arrow icon"
              />
            </div>
          </div>
        </a>
      )}
    </article>
  );
};

export default TestimonialSection;
