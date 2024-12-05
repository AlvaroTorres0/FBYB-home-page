import { create } from 'zustand';

const usePopUpModal = create(set => ({
  //Estados
  isOpenPopUpModal: false,

  // Funciones para cambiar los estados
  openPopUpModal: () => set({ isOpenPopUpModal: true }),
  closePopUpModal: () => set({ isOpenPopUpModal: false }),
}));

export default usePopUpModal;
