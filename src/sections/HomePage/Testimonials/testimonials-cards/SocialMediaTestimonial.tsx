import React from 'react';
import { z } from 'zod';
import { TestimonialCardSchema } from '../../../../d';
import './StylesTestimonials.css';

type TestimonialCard = z.infer<typeof TestimonialCardSchema>;

interface Props {
  testimonial: TestimonialCard;
  lastComment?: boolean;
}

const ShortTestimonial: React.FC<Props> = ({ testimonial, lastComment = false }) => {
  return (
    <article className="relative max-w-md p-6 bg-gray-50 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="mb-4 flex gap-4 items-end">
        <div className="w-6 h-6 flex items-center justify-center">
          {testimonial.socialMedia === 'messenger' && (
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJJY29uaWZ5SWQxOTM4MmVhNjRjZmNhZTg0ODEiIGN4PSIxOS4yNDclIiBjeT0iOTkuNDY1JSIgcj0iMTA4Ljk2JSIgZng9IjE5LjI0NyUiIGZ5PSI5OS40NjUlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDlGIi8+PHN0b3Agb2Zmc2V0PSI2MC45NzUlIiBzdG9wLWNvbG9yPSIjQTAzM0ZGIi8+PHN0b3Agb2Zmc2V0PSI5My40ODIlIiBzdG9wLWNvbG9yPSIjRkY1MjgwIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkY3MDYxIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0idXJsKCNJY29uaWZ5SWQxOTM4MmVhNjRjZmNhZTg0ODEpIiBkPSJNMTI4IDBDNTUuODk0IDAgMCA1Mi44MTggMCAxMjQuMTZjMCAzNy4zMTcgMTUuMjkzIDY5LjU2MiA0MC4yIDkxLjgzNWMyLjA5IDEuODcxIDMuMzUyIDQuNDkzIDMuNDM4IDcuMjk4bC42OTcgMjIuNzdjLjIyMyA3LjI2MiA3LjcyNCAxMS45ODggMTQuMzcgOS4wNTRMODQuMTExIDI0My45YTEwLjIyIDEwLjIyIDAgMCAxIDYuODM3LS41MDFjMTEuNjc1IDMuMjEgMjQuMSA0LjkyIDM3LjA1MiA0LjkyYzcyLjEwNiAwIDEyOC01Mi44MTggMTI4LTEyNC4xNlMyMDAuMTA2IDAgMTI4IDAiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJtNTEuMTM3IDE2MC40N2wzNy42LTU5LjY1M2M1Ljk4LTkuNDkgMTguNzg4LTExLjg1MyAyNy43NjItNS4xMjNsMjkuOTA1IDIyLjQzYTcuNjggNy42OCAwIDAgMCA5LjI1Mi0uMDI3bDQwLjM4OC0zMC42NTJjNS4zOS00LjA5MSAxMi40MjggMi4zNiA4LjgyIDguMDg1bC0zNy42IDU5LjY1NGMtNS45ODEgOS40ODktMTguNzkgMTEuODUyLTI3Ljc2MyA1LjEyMmwtMjkuOTA2LTIyLjQzYTcuNjggNy42OCAwIDAgMC05LjI1LjAyN2wtNDAuMzkgMzAuNjUyYy01LjM5IDQuMDktMTIuNDI3LTIuMzYtOC44MTgtOC4wODUiLz48L3N2Zz4="
              alt="Facebook Messenger icon"
            />
          )}

          {testimonial.socialMedia === 'chat' && <img src="/public/assets/testimonials/chat.svg" alt="Chat icon" />}
        </div>

        <div className="flex flex-col mt-1 gap-2">
          <p className="text-md text-[#7C8997] font-normal">From:</p>
          <span className="text-lg font-semibold text-blueBg xl:text-2xl">{testimonial.name}</span>
        </div>
      </div>
      <div className="rounded-2xl p-6 leading-relaxed border border-[#03264D33] pr-20 relative">
        <div className={`relative max-w-md p-4 bg-[#E9ECF1] rounded-2xl ${lastComment ? 'fade-mask-media' : ''}`}>
          <p className="text-[#606773] font-medium xl:font-normal">"{testimonial.message}"</p>
          <div className="absolute -bottom-3 left-0 w-6 h-6 bg-[#E9ECF1] rotate-[35deg]" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
        </div>
      </div>
    </article>
  );
};

export default ShortTestimonial;
