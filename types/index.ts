export type LocationRegion = 'klang-valley' | 'east-coast' | 'northern' | 'langkawi'

export interface CKLocation {
  id: string
  name: string
  address: string
  hours: string
  phone: string
  mapUrl: string
  region: LocationRegion
  isHartamas?: boolean
}

export type MenuCategory =
  | 'sambal-petai'
  | 'ayam'
  | 'ikan-seafood'
  | 'sayur'
  | 'nasi'
  | 'desserts'
  | 'drinks'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  isSignature?: boolean
  category: MenuCategory
}

export interface Dish {
  id: string
  name: string
  description: string
  imageUrl: string
  isSignature?: boolean
}

export interface Pillar {
  id: string
  title: string
  description: string
  iconName: 'Leaf' | 'Heart' | 'ShieldCheck' | 'Sprout'
}

export interface CartItem {
  id: string
  name: string
  price: string
  priceValue: number
  category: MenuCategory
  quantity: number
  isSignature?: boolean
}
