import { create } from 'zustand'

interface UIStore {
  isMobileNavOpen: boolean
  setMobileNavOpen: (open: boolean) => void
  isReservationModalOpen: boolean
  setReservationModalOpen: (open: boolean) => void
}

export const useUIStore = create<UIStore>((set) => ({
  isMobileNavOpen: false,
  setMobileNavOpen: (open) => set({ isMobileNavOpen: open }),
  isReservationModalOpen: false,
  setReservationModalOpen: (open) => set({ isReservationModalOpen: open }),
}))
