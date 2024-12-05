import usePopUpModal from '../../stores/popUpStore';

const DiscoverMoreButton = () => {
  const { openPopUpModal } = usePopUpModal();

  const handleOpenPopUpModal = () => {
    const html = document.querySelector('html');
    html.style.overflow = 'hidden';
    openPopUpModal();
  };
  return (
    <div className="w-max gap-[0.5px] self-center lg:p-0 lg:gap-0.5 mt-5 flex group">
      <button
        className="flex font-light text-[19px]/[22.23px] lg:text-xl xl:text-2xl lg:font-normal justify-center items-center bg-[#03264D] rounded-l-[4px] rounded-r-[8px] py-[17px] px-[18px] lg:py-5 text-white group-hover:bg-[#E8D6AD] group-hover:text-[#03264D] border-[1px] border-[#03264D4D] transition-all duration-200"
        onClick={handleOpenPopUpModal}
      >
        DISCOVER MORE
      </button>
      <div className="bg-[#03264D] flex justify-center items-center rounded-r-[4px] rounded-l-[8px] p-1 px-4 lg:px-6 text-white group-hover:bg-[#E8D6AD] border-[1px] border-[#03264D4D] group-hover:text-[#03264D] transition-all duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
          <path className="group-hover:fill-[#03264D]" fill="#ffffff" d="m8.006 21.308l-1.064-1.064L15.187 12L6.942 3.756l1.064-1.064L17.314 12z"></path>
        </svg>
      </div>
    </div>
  );
};

export default DiscoverMoreButton;
