import React, { useEffect, useState } from 'react';
import { useField, useFormikContext } from 'formik';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { getCookie, setCookie } from '../../../public/scripts/cookies';
import { ring } from 'ldrs';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

interface FormProps {
  includeMessageField?: boolean;
}

export const InputField = ({ label, ...props }) => {
  // @ts-expect-error props are not necesary
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-1 text-start">
      <label className="text-sm text-white" htmlFor={props.id || props.name}>
        {label}*
      </label>
      <input
        className={`w-full py-4 px-2 text-white outline-none rounded-md bg-[#F8FBFF33] border-[1px] border-[#FFFFFF44] ${meta.error && meta.touched ? 'input-error' : ''}`}
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? <span className="text-red-500 text-xs font-principal-light">{meta.error}</span> : null}
    </div>
  );
};

export const TextAreaField = ({ label, ...props }) => {
  // @ts-expect-error props are not necesary
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-1 text-start">
      <label className="text-sm text-white" htmlFor={props.id || props.name}>
        {label}*
      </label>
      <textarea
        className={`w-full py-4 px-2 text-white outline-none rounded-md bg-[#F8FBFF33] border-[1px] border-[#FFFFFF44] ${meta.error && meta.touched ? 'input-error' : ''}`}
        {...field}
        {...props}
        rows={3}
      />

      {meta.touched && meta.error ? <span className="text-red-500 text-xs font-principal-light">{meta.error}</span> : null}
    </div>
  );
};

export const PhoneField = ({ label, ...props }) => {
  const [country, setCountry] = useState('us');
  const { setFieldValue, values } = useFormikContext();
  // @ts-expect-error props are not necesary
  const [field, meta] = useField(props);

  useEffect(() => {
    const getCountryUser = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setCountry(data.country.toLowerCase());
      } catch (error) {
        console.error('Error fetching country:', error);
      }
    };
    getCountryUser();
  }, []);

  const handlePhoneChange = value => {
    setFieldValue(props.name, value);
  };

  return (
    <div className="flex flex-col gap-1 text-start">
      <label className="text-sm text-white" htmlFor={props.id || props.name}>
        {label}*
      </label>
      <PhoneInput
        country={country}
        value={values[props.name] || ''}
        placeholder="Enter your phone number"
        onChange={handlePhoneChange}
        inputClass={`w-full py-4 px-2 text-white outline-none rounded-md bg-[#F8FBFF33] border-[1px] border-[#FFFFFF44] ${meta.touched && meta.error ? 'input-error' : ''}`}
      />
      {meta.touched && meta.error ? <span className="text-red-500 text-xs font-principal-light">{meta.error}</span> : null}
    </div>
  );
};

export const GenericFormComponent = ({ includeMessageField = false }: FormProps) => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzbHWLAai-gYTEehKqLWQ_CDoNdY5WfZq69f2b9rh5AL-oFWtZynx1KKgQUtVmVvCDi/exec';
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    ring.register();
  }, []);

  async function handleSubmit(data: any) {
    setIsSubmitting(true);
    try {
      setTimeout(() => {
        toast.success('Form data sent successfully');
      }, 1000);

      setTimeout(() => {
        window.location.href = `/thank-you.html?firstName=${encodeURIComponent(data.firstName)}&lastName=${encodeURIComponent(data.lastName)}`;
      }, 2000);
    } catch (error) {
      console.error('Error sending the form data:', error);
      toast.error('An error occurred while sending the form.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    ...(includeMessageField && { message: '' }),
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'The name must have at least 3 characters').required('You must enter a name'),
    email: Yup.string().min(5, 'The email address must have at least 5 characters').email('Invalid email address').required('You must enter an email address'),
    phone: Yup.string().required('You must enter a phone number'),
    ...(includeMessageField && {
      message: Yup.string().min(10, 'The message must have at least 10 characters').required('You must enter a message'),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await handleSubmit(values);
        } catch (error) {
          console.error('Error during form submission:', error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <Form className="flex flex-col gap-4">
        <InputField label="Name" name="name" type="text" placeholder="Enter your name" />
        <InputField label="Email" name="email" type="email" placeholder="Enter your email" />
        <PhoneField label="Phone" name="phone" type="tel" />
        {includeMessageField && <TextAreaField label="Comments" name="message" placeholder="Enter your message" />}

        <div className="flex flex-col-reverse gap-4 mt-8 lg:flex-row lg:gap-6">
          <p className="text-[#A7B3C7] font-light text-xs text-center px-6 lg:text-start lg:w-6/12">
            Your details are safe with us. We respect your privacy and use your information solely to assist you with your inquiry.
          </p>
          <button type="submit" className="bg-yellow text-blueBg text-lg font-medium py-3 rounded-md lg:w-6/12 hover:scale-95 transition-all duration-200">
            {isSubmitting ? <l-ring size="30" stroke="2" bg-opacity="0" speed="2" color="#002348"></l-ring> : 'Book My Free Call'}
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export const CountDown = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [spots, setSpots] = useState(Math.floor(Math.random() * 16) + 1);

  useEffect(() => {
    ring.register();
  }, []);

  useEffect(() => {
    const initializeCountdown = () => {
      const cookie = getCookie('countdown_FBYB_MiniPage');
      const storedStartDate = localStorage.getItem('countdownStart');
      let startDate;

      if (!cookie || !storedStartDate) {
        startDate = new Date();
        localStorage.setItem('countdownStart', startDate.toISOString());
        setCookie('countdown_FBYB_MiniPage', 'true', 15);
      } else {
        startDate = new Date(storedStartDate);
      }

      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 15);

      const updateCountdown = () => {
        const now = new Date();
        // @ts-expect-error endDate is a Date object
        const timeDiff = endDate - now;

        if (timeDiff > 0) {
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
          const seconds = Math.floor((timeDiff / 1000) % 60);

          setTimeLeft({ days, hours, minutes, seconds });
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          return;
        }

        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      };

      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);

      return () => clearInterval(interval);
    };

    initializeCountdown();
  }, []);

  return (
    <article className="w-full flex justify-between text-white">
      <article className="flex gap-6">
        <div className="bg-[#F8FBFF33] border-[1px] border-[#FFFFFF44] rounded-md p-3 flex flex-col justify-center items-center">
          <h4 className="text-xs">DAYS</h4>
          {isLoading ? <l-ring size="30" stroke="2" bg-opacity="0" speed="2" color="white"></l-ring> : <span className="font-semibold text-2xl">{timeLeft.days}</span>}
        </div>

        <div className="bg-[#F8FBFF33] border-[1px] border-[#FFFFFF44] rounded-md p-3 flex flex-col justify-center items-center">
          <h4 className="text-xs">LIMITED OFFER</h4>
          {isLoading ? (
            <l-ring size="30" stroke="2" bg-opacity="0" speed="2" color="white"></l-ring>
          ) : (
            <span className="font-semibold text-2xl">
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          )}
        </div>
      </article>

      <div className="bg-[#F8FBFF33] border-[1px] border-[#FFFFFF44] rounded-md p-3 flex flex-col justify-center items-center">
        <h4 className="text-xs">SPOTS</h4>
        {spots && <span className="font-semibold text-2xl">{spots}</span>}
      </div>
    </article>
  );
};

export const ContactButtons = () => {
  return (
    <div className="w-full flex justify-center items-center gap-4">
      <a href="https://wa.me/971561315862" target="_blank" className="bg-[#59708A] w-max p-1 rounded-md hover:scale-105 transition-all duration-200">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMwMDIzNDgiIGQ9Ik0xMi4wNCAyYy01LjQ2IDAtOS45MSA0LjQ1LTkuOTEgOS45MWMwIDEuNzUuNDYgMy40NSAxLjMyIDQuOTVMMi4wNSAyMmw1LjI1LTEuMzhjMS40NS43OSAzLjA4IDEuMjEgNC43NCAxLjIxYzUuNDYgMCA5LjkxLTQuNDUgOS45MS05LjkxYzAtMi42NS0xLjAzLTUuMTQtMi45LTcuMDFBOS44MiA5LjgyIDAgMCAwIDEyLjA0IDJtLjAxIDEuNjdjMi4yIDAgNC4yNi44NiA1LjgyIDIuNDJhOC4yMyA4LjIzIDAgMCAxIDIuNDEgNS44M2MwIDQuNTQtMy43IDguMjMtOC4yNCA4LjIzYy0xLjQ4IDAtMi45My0uMzktNC4xOS0xLjE1bC0uMy0uMTdsLTMuMTIuODJsLjgzLTMuMDRsLS4yLS4zMmE4LjIgOC4yIDAgMCAxLTEuMjYtNC4zOGMuMDEtNC41NCAzLjctOC4yNCA4LjI1LTguMjRNOC41MyA3LjMzYy0uMTYgMC0uNDMuMDYtLjY2LjMxYy0uMjIuMjUtLjg3Ljg2LS44NyAyLjA3YzAgMS4yMi44OSAyLjM5IDEgMi41NmMuMTQuMTcgMS43NiAyLjY3IDQuMjUgMy43M2MuNTkuMjcgMS4wNS40MiAxLjQxLjUzYy41OS4xOSAxLjEzLjE2IDEuNTYuMWMuNDgtLjA3IDEuNDYtLjYgMS42Ny0xLjE4cy4yMS0xLjA3LjE1LTEuMThjLS4wNy0uMS0uMjMtLjE2LS40OC0uMjdjLS4yNS0uMTQtMS40Ny0uNzQtMS42OS0uODJjLS4yMy0uMDgtLjM3LS4xMi0uNTYuMTJjLS4xNi4yNS0uNjQuODEtLjc4Ljk3Yy0uMTUuMTctLjI5LjE5LS41My4wN2MtLjI2LS4xMy0xLjA2LS4zOS0yLTEuMjNjLS43NC0uNjYtMS4yMy0xLjQ3LTEuMzgtMS43MmMtLjEyLS4yNC0uMDEtLjM5LjExLS41Yy4xMS0uMTEuMjctLjI5LjM3LS40NGMuMTMtLjE0LjE3LS4yNS4yNS0uNDFjLjA4LS4xNy4wNC0uMzEtLjAyLS40M2MtLjA2LS4xMS0uNTYtMS4zNS0uNzctMS44NGMtLjItLjQ4LS40LS40Mi0uNTYtLjQzYy0uMTQgMC0uMy0uMDEtLjQ3LS4wMSIvPjwvc3ZnPg=="
          alt="Whatsapp icon"
          className="w-6 h-6 lg:w-8 lg:h-8 object-contain"
        />
      </a>

      <button className="bg-[#59708A] w-max p-1 rounded-md hover:scale-105 transition-all duration-200">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMwMDIzNDgiIGQ9Ik02LjYyIDEwLjc5YzEuNDQgMi44MyAzLjc2IDUuMTUgNi41OSA2LjU5bDIuMi0yLjJjLjI4LS4yOC42Ny0uMzYgMS4wMi0uMjVjMS4xMi4zNyAyLjMyLjU3IDMuNTcuNTdhMSAxIDAgMCAxIDEgMVYyMGExIDEgMCAwIDEtMSAxQTE3IDE3IDAgMCAxIDMgNGExIDEgMCAwIDEgMS0xaDMuNWExIDEgMCAwIDEgMSAxYzAgMS4yNS4yIDIuNDUuNTcgMy41N2MuMTEuMzUuMDMuNzQtLjI1IDEuMDJ6Ii8+PC9zdmc+"
          alt="Phone icon"
          className="w-6 h-6 lg:w-8 lg:h-8 object-contain"
        />
      </button>

      <button className="bg-[#59708A] w-max p-1 rounded-md hover:scale-105 transition-all duration-200">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMjM0OCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PHJlY3Qgd2lkdGg9IjE4LjUiIGhlaWdodD0iMTUuNSIgeD0iMi43NSIgeT0iNC4yNSIgcng9IjMiLz48cGF0aCBkPSJtMi43NSA4bDguNDE1IDMuODY2YTIgMiAwIDAgMCAxLjY3IDBMMjEuMjUgOCIvPjwvZz48L3N2Zz4="
          alt="Mail icon"
          className="w-6 h-6 lg:w-8 lg:h-8 object-contain"
        />
      </button>
    </div>
  );
};
