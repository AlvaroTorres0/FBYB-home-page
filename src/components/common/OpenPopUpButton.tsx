import usePopUpModal from '../../stores/popUpStore';

const OpenPopUpButton = ({ text }) => {
  const { openPopUpModal } = usePopUpModal();

  const handleOpenPopUpModal = () => {
    const html = document.querySelector('html');
    html.style.overflow = 'hidden';
    openPopUpModal();
  };

  return (
    <div className="gap-[0.5px] self-center lg:p-0 lg:gap-0.5 mt-5 flex group">
      <button
        className="flex font-medium text-[15px]/[17.92px] justify-center items-center bg-[#FFFFFF] rounded-md py-4 px-2 lg:py-5 text-blueBg w-full lg:w-max group-hover:bg-[#E8D6AD] border-[1px] border-[#03264D4D] group-hover:text-[#03264D] transition-all duration-200"
        onClick={handleOpenPopUpModal}
      >
        {text}
      </button>
      <div className="bg-[#FFFFFF] flex justify-center items-center rounded-r-sm rounded-l-md p-1 px-4 lg:px-6 group-hover:bg-[#E8D6AD] border-[1px] border-[#03264D4D] group-hover:text-[#03264D] transition-all duration-200">
        <div className="bg-blueBg rounded-sm px-1 py-0.5">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Im04LjAwNiAyMS4zMDhsLTEuMDY0LTEuMDY0TDE1LjE4NyAxMkw2Ljk0MiAzLjc1NmwxLjA2NC0xLjA2NEwxNy4zMTQgMTJ6Ii8+PC9zdmc+"
            className="object-contain w-6 h-6"
            alt="Arrow icon"
          />
        </div>
      </div>
    </div>
  );
};

export default OpenPopUpButton;
