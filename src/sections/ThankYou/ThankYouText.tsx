import { useEffect, useState } from 'react';

const ThankYouText = () => {
  const [userName, setUserName] = useState('');
  const [surname, setSurname] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUserName(params.get('firstName') || '');
    setSurname(params.get('lastName') || '');
  }, []);

  return (
    <p className="text-[17px]/[26px] lg:text-[16px]/[23px] lg:px-28 px-6 text-[#001730]">
      Dear{' '}
      <span className="font-bold">
        {userName} {surname}
      </span>
      , <br />
      We’ve received your request and will contact you soon to confirm the details. Get ready for a seamless journey to explore Dubai’s finest properties!
    </p>
  );
};

export default ThankYouText;
