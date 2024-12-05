import usePopUpModal from '../../stores/popUpStore';

const ContactButton = () => {
  const { openPopUpModal } = usePopUpModal();

  const handleOpenPopUpModal = () => {
    const html = document.querySelector('html');
    html.style.overflow = 'hidden';
    openPopUpModal();
  };

  return (
    <button onClick={handleOpenPopUpModal} className="flex items-center gap-4 px-4 py-0.5 border-[1px] border-[#00234844] nav-item">
      <span className="text-lg font-light text-blueBg">Contact</span>
    </button>
  );
};

export default ContactButton;
