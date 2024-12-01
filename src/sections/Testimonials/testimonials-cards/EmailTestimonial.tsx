import React from 'react';
import { z } from 'zod';
import { TestimonialCardSchema } from '../../../d';
import './StylesTestimonials.css';

type TestimonialCard = z.infer<typeof TestimonialCardSchema>;

interface Props {
  testimonial: TestimonialCard;
  lastComment?: boolean;
}

const EmailTestimonial: React.FC<Props> = ({ testimonial, lastComment = false }) => {
  return (
    <article className="relative max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col w-full lg:flex-row">
      <div className="flex gap-4 p-6 w-full lg:w-4/12">
        <div className="flex gap-4 h-max items-end">
          <div className="w-6 h-6 flex items-center justify-center">
            <img src="/public/assets/testimonials/email.svg" alt="Email icon" />
          </div>

          <div className="flex flex-col mt-1 gap-2">
            <p className="text-md text-[#7C8997] font-normal">From:</p>
            <span className="text-lg font-semibold text-blueBg xl:text-2xl">{testimonial.name}</span>
          </div>
        </div>
      </div>

      <div className="border-t-[1px] lg:border-t-0 lg:border-l-[1px] border-[#0023484D] w-full lg:w-8/12 relative">
        <div className="p-6 flex flex-col gap-3 overflow-hidden relative">
          {testimonial.subject && (
            <div className="flex items-center gap-2">
              <div className="bg-[#606773] rounded-md py-1.5 px-2 text-[#FFFFFF]">
                <span className="font-medium">Subject:</span>
              </div>
              <h5 className="font-semibold text-lg text-[#606773]">{testimonial.subject}</h5>
            </div>
          )}
          <p className={`text-[#606773] text-base ${lastComment ? 'fade-mask-email' : ''}`}>
            {testimonial.message.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < testimonial.message.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </article>
  );
};

export default EmailTestimonial;
