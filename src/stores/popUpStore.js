import { create } from 'zustand';

const usePopUpModal = create(set => ({
  //Estados
  isOpenPopUpModal: false,
  isNavbarMobileOpen: false,

  // Funciones para cambiar los estados
  openPopUpModal: () => set({ isOpenPopUpModal: true }),
  closePopUpModal: () => set({ isOpenPopUpModal: false }),
  toggleNavbarMobile: () => set(state => ({ isNavbarMobileOpen: !state.isNavbarMobileOpen })),
}));

export default usePopUpModal;
