import usePopUpModal from '../../stores/popUpStore';

const BookConsultationButton = () => {
  const { openPopUpModal } = usePopUpModal();

  const handleOpenPopUpModal = () => {
    const html = document.querySelector('html');
    html.style.overflow = 'hidden';
    openPopUpModal();
  };
  return (
    <button className="flex gap-3 items-center p-0.5 bg-blue rounded-[4px] w-max fixed bottom-5 right-0 z-50" onClick={handleOpenPopUpModal}>
      <div className="bg-yellow flex justify-center items-center p-2">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMwMDE3MzAiIGQ9Ik02LjYyIDEwLjc5YzEuNDQgMi44MyAzLjc2IDUuMTUgNi41OSA2LjU5bDIuMi0yLjJjLjI4LS4yOC42Ny0uMzYgMS4wMi0uMjVjMS4xMi4zNyAyLjMyLjU3IDMuNTcuNTdhMSAxIDAgMCAxIDEgMVYyMGExIDEgMCAwIDEtMSAxQTE3IDE3IDAgMCAxIDMgNGExIDEgMCAwIDEgMS0xaDMuNWExIDEgMCAwIDEgMSAxYzAgMS4yNS4yIDIuNDUuNTcgMy41N2MuMTEuMzUuMDMuNzQtLjI1IDEuMDJ6Ii8+PC9zdmc+"
          className="w-6 h-6"
          alt="Phone icon"
        />
      </div>

      <span className="text-yellow text-[14px]/[15.68px] font-medium pr-3">Book My Consultation Call</span>
    </button>
  );
};

export default BookConsultationButton;
