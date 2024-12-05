import React, { useState } from 'react';
import './NavbarMobileStyles.css';
import usePopUpModal from '../../stores/popUpStore';

const Header = ({ isLanding }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isNavbarMobileOpen, toggleNavbarMobile } = usePopUpModal();

  function handleClosePopUpModal() {
    const html = document.querySelector('html');
    isNavbarMobileOpen ? (html.style.overflowY = 'hidden') : (html.style.overflowY = 'auto');
    toggleNavbarMobile();
  }

  const toggleMenu = () => {
    handleClosePopUpModal();
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex flex-col items-center justify-center md:hidden fixed w-full max-w-full z-50 shadow-[0px_10px_50px_-30px_#00000024]">
      <nav className="flex w-full sm:px-10 z-40 relative justify-between h-[100px] px-8 bg-[#FFFFFF]">
        <div className="text-lg flex gap-4 items-center">
          <a className="flex items-center gap-2" href={isLanding ? '#home-section' : 'index.html'}>
            <img className="object-contain w-[110px]" src="/public/assets/navbar/logo.webp" alt="FBYB Logo" title="Fly Before You Build" />
          </a>
        </div>

        <div id="menu-icon-container" className="flex items-center justify-center">
          <div className="bg-[#00173033] p-3 rounded-sm" onClick={toggleMenu}>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMjM0OCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00IDEyaDE2TTQgNmgxNk00IDE4aDE2Ii8+PC9zdmc+"
              className={`w-7 h-7 object-contain ${menuOpen ? '' : ''}`}
              id="menu-icon"
              alt="Menu icon"
            />
            <img src="/public/assets/navbar/menu-icon.webp" className={`hidden object-contain w-5 ${menuOpen ? '' : 'hidden'}`} id="close-icon" alt="Close icon" />
          </div>
        </div>
      </nav>

      <div
        id="menu"
        className={`bg-menu-navbar ${menuOpen ? '' : '-translate-x-[768px]'} w-full h-screen shadow-md transition-all ease-in-out duration-200 flex flex-col gap-12 justify-center absolute z-10 top-0 right-0 left-0 md:hidden text-[#FFFFFF] px-8`}
      >
        <div className="pb-6 border-b-yellow border-2 border-t-0 border-r-0 border-l-0">
          <h4 className="Satoshi-bold text-3xl">FLY BEFORE YOU BUY</h4>
          <h6 className="font-normal text-lg">Fly to Dubai, See the Future, Make It Yours</h6>
        </div>

        <h2 className="Giyaste text-4xl tracking-widest">A VIP JOURNEY AWAITS.</h2>

        <ul className="flex flex-col gap-10 w-full">
          {[
            { label: 'Home', href: '/index.html' },
            { label: 'Testimonials', href: '/testimonials.html' },
            { label: 'About Us', href: '/about-us.html' },
            { label: 'Contact', href: '/contact.html' },
          ].map((item, index) => (
            <li key={index} className="w-full">
              <a href={item.href} className="text-lg flex items-center justify-between" onClick={toggleMenu}>
                <span>{item.label}</span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik04LjAyNSAyMkw2LjI1IDIwLjIyNUwxNC40NzUgMTJMNi4yNSAzLjc3NUw4LjAyNSAybDEwIDEweiIvPjwvc3ZnPg=="
                  alt="Arrow icon"
                  className="w-5 h-5 object-contain"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
