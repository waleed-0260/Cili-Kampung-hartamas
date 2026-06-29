import { create } from 'zustand'
import type { CartItem, MenuItem } from '@/types'

function parsePrice(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, '')) || 0
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  setOpen: (open: boolean) => void
  addItem: (item: MenuItem) => void
  removeItem: (id: string) => void
  increment: (id: string) => void
  decrement: (id: string) => void
  clearCart: () => void
  totalItems: () => number
  totalPrice: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  setOpen: (open) => set({ isOpen: open }),

  addItem: (menuItem) => {
    const { items } = get()
    const existing = items.find((i) => i.id === menuItem.id)
    if (existing) {
      set({
        items: items.map((i) =>
          i.id === menuItem.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
        isOpen: true,
      })
    } else {
      set({
        items: [
          ...items,
          {
            id: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
            priceValue: parsePrice(menuItem.price),
            category: menuItem.category,
            quantity: 1,
            isSignature: menuItem.isSignature,
          },
        ],
        isOpen: true,
      })
    }
  },

  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

  increment: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    })),

  decrement: (id) =>
    set((state) => {
      const item = state.items.find((i) => i.id === id)
      if (!item) return state
      if (item.quantity <= 1) {
        return { items: state.items.filter((i) => i.id !== id) }
      }
      return {
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        ),
      }
    }),

  clearCart: () => set({ items: [] }),

  totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

  totalPrice: () =>
    get().items.reduce((sum, i) => sum + i.priceValue * i.quantity, 0),
}))
