import React, { useEffect } from 'react';

const ThankYouCounter = () => {
  const [counter, setCounter] = React.useState(10);
  function redirect() {
    window.location.href = '/';
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
    if (counter === 0) {
      redirect();
    }
    return () => clearTimeout(timer);
  }, [counter]);

  return <p className="text-sm md:text-base lg:text-lg font-light font-Fira">You will be redirected to the home page in {counter} seconds.</p>;
};

export default ThankYouCounter;
