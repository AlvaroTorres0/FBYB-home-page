import usePopUpModal from '../../stores/popUpStore';
import { GenericFormComponent } from '../common/FormComponents';
import './FormStyles.css';

const PopUpModal = () => {
  const { isOpenPopUpModal, closePopUpModal } = usePopUpModal();

  function handleClosePopUpModal() {
    const html = document.querySelector('html');
    html.style.overflowY = 'auto';
    closePopUpModal();
  }

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 ${isOpenPopUpModal ? 'block' : 'hidden'}`} onClick={handleClosePopUpModal}>
      <div className="bg-blueBg flex flex-col lg:max-w-[500px] max-h-[95vh] min-h-[10vh] overflow-y-auto w-full rounded-md gap-5 p-6 relative max-w-[500px]" onClick={e => e.stopPropagation()}>
        <img
          onClick={handleClosePopUpModal}
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNzY0LjI4OCAyMTQuNTkyTDUxMiA0NjYuODhMMjU5LjcxMiAyMTQuNTkyYTMxLjkzNiAzMS45MzYgMCAwIDAtNDUuMTIgNDUuMTJMNDY2Ljc1MiA1MTJMMjE0LjUyOCA3NjQuMjI0YTMxLjkzNiAzMS45MzYgMCAxIDAgNDUuMTIgNDUuMTg0TDUxMiA1NTcuMTg0bDI1Mi4yODggMjUyLjI4OGEzMS45MzYgMzEuOTM2IDAgMCAwIDQ1LjEyLTQ1LjEyTDU1Ny4xMiA1MTIuMDY0bDI1Mi4yODgtMjUyLjM1MmEzMS45MzYgMzEuOTM2IDAgMSAwLTQ1LjEyLTQ1LjE4NHoiLz48L3N2Zz4="
          className="absolute top-0 right-0 m-2 w-6 h-6 object-contain hover:cursor-pointer hover:scale-105 transition-all duration-150"
          alt="Close icon"
        />
        <p className="text-[#F8FBFF] Giyaste font-semibold text-[24px]/[29px] lg:font-medium  leading-snug tracking-widest lg:leading-tight xl:tracking-[0.3rem]">
          BOOK A FREE REAL ESTATE CONSULTATION CALL TODAY
        </p>

        <GenericFormComponent includeMessageField />
      </div>
    </div>
  );
};

export default PopUpModal;
