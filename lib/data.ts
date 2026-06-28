import type { CKLocation, MenuItem, Dish, Pillar, MenuCategory } from '@/types'

export const locations: CKLocation[] = [
  {
    id: 'hartamas',
    name: 'Cili Kampung Hartamas',
    address: 'Sri Hartamas, 50480 Kuala Lumpur',
    hours: 'Daily 11:00 AM – 10:30 PM',
    phone: '+603-2011 1234',
    mapUrl: '#',
    region: 'klang-valley',
    isHartamas: true,
  },
  {
    id: 'klcc',
    name: 'Cili Kampung KLCC',
    address: 'Suria KLCC, 50088 Kuala Lumpur',
    hours: 'Daily 10:00 AM – 10:00 PM',
    phone: '+603-2022 5678',
    mapUrl: '#',
    region: 'klang-valley',
  },
  {
    id: '1-utama',
    name: 'Cili Kampung 1 Utama',
    address: '1 Utama Shopping Centre, 47800 Petaling Jaya',
    hours: 'Daily 10:00 AM – 10:00 PM',
    phone: '+603-7726 9012',
    mapUrl: '#',
    region: 'klang-valley',
  },
  {
    id: 'sunway',
    name: 'Cili Kampung Sunway Pyramid',
    address: 'Sunway Pyramid Terrace, 47500 Subang Jaya',
    hours: 'Daily 10:00 AM – 10:00 PM',
    phone: '+603-5611 3456',
    mapUrl: '#',
    region: 'klang-valley',
  },
  {
    id: 'kota-bharu',
    name: 'Cili Kampung Kota Bharu',
    address: 'Kota Bharu City Centre, 15000 Kota Bharu, Kelantan',
    hours: 'Daily 11:00 AM – 10:00 PM',
    phone: '+609-744 7890',
    mapUrl: '#',
    region: 'east-coast',
  },
  {
    id: 'langkawi',
    name: 'Cili Kampung Langkawi',
    address: 'Pantai Cenang, 07000 Langkawi, Kedah',
    hours: 'Daily 11:00 AM – 10:30 PM',
    phone: '+604-955 2345',
    mapUrl: '#',
    region: 'langkawi',
  },
  {
    id: 'penang',
    name: 'Cili Kampung Penang',
    address: 'Georgetown, 10050 Penang',
    hours: 'Daily 11:00 AM – 10:00 PM',
    phone: '+604-261 6789',
    mapUrl: '#',
    region: 'northern',
  },
  {
    id: 'putrajaya',
    name: 'Cili Kampung Putrajaya',
    address: 'Presint 15, 62000 Putrajaya',
    hours: 'Daily 11:00 AM – 10:00 PM',
    phone: '+603-8890 1234',
    mapUrl: '#',
    region: 'klang-valley',
  },
]

export const menuItems: MenuItem[] = [
  // Sambal & Petai
  { id: 'sp-1', name: 'Sambal Petai Udang', description: 'River prawns wok-tossed in house-made chili paste with petai — stone-pounded, slowly cooked, generously spiced.', price: 'RM 28', isSignature: true, category: 'sambal-petai' },
  { id: 'sp-2', name: 'Sambal Petai Sotong', description: 'Tender squid in our signature house sambal with petai — a dish that carries the full punch of kampung cooking.', price: 'RM 26', isSignature: true, category: 'sambal-petai' },
  { id: 'sp-3', name: 'Sambal Terung', description: 'Silky eggplant braised in rich sambal belacan — earthy, smoky, and deeply satisfying.', price: 'RM 16', category: 'sambal-petai' },
  { id: 'sp-4', name: 'Sambal Tumis Ikan Bilis', description: 'Sun-dried anchovies in a fragrant tumis sambal — a kampung classic best eaten with warm rice.', price: 'RM 14', category: 'sambal-petai' },

  // Ayam
  { id: 'ay-1', name: 'Ayam Masak Kicap', description: 'Chicken braised low and slow in sweet soy sauce with aromatics — a childhood favourite every time.', price: 'RM 22', isSignature: true, category: 'ayam' },
  { id: 'ay-2', name: 'Ayam Goreng Berempah', description: 'Whole-joint fried chicken marinated overnight in turmeric, galangal, and lemongrass.', price: 'RM 22', category: 'ayam' },
  { id: 'ay-3', name: 'Ayam Percik', description: 'Grilled chicken basted in santan and rempah — smoky, creamy, unmistakably Kelantanese.', price: 'RM 24', category: 'ayam' },
  { id: 'ay-4', name: 'Rendang Ayam', description: 'Dry rendang slow-cooked until the coconut milk caramelises and clings to every piece.', price: 'RM 24', category: 'ayam' },

  // Ikan & Seafood
  { id: 'is-1', name: 'Tenggiri Asam Pedas', description: 'Spanish mackerel in a sour, spicy asam jawa broth — bold, punchy, and warming from the inside out.', price: 'RM 32', isSignature: true, category: 'ikan-seafood' },
  { id: 'is-2', name: 'Masak Lemak Siput Sedut', description: 'River snails simmered in golden turmeric-coconut gravy — a Negeri Sembilan tradition, rarely found in the city.', price: 'RM 28', isSignature: true, category: 'ikan-seafood' },
  { id: 'is-3', name: 'Kailan Ikan Masin', description: 'Chinese kale stir-fried with preserved salted fish — a bitter-savoury contrast that keeps you reaching for more.', price: 'RM 20', isSignature: true, category: 'ikan-seafood' },
  { id: 'is-4', name: 'Gulai Kepala Ikan', description: 'Fish head simmered in a rich aromatic gulai broth — made for sharing, made to be mopped up with rice.', price: 'RM 45', category: 'ikan-seafood' },
  { id: 'is-5', name: 'Sotong Goreng Tepung', description: 'Crispy battered squid rings, light and fresh, served with our house dipping sauce.', price: 'RM 24', category: 'ikan-seafood' },

  // Sayur
  { id: 'sy-1', name: 'Bendi Goreng Belacan', description: 'Okra stir-fried with shrimp paste, chili, and aromatics — textured, pungent, and utterly addictive.', price: 'RM 14', isSignature: true, category: 'sayur' },
  { id: 'sy-2', name: 'Ulam Raja', description: 'Fresh kampung herb salad served with budu and sambal — raw, alive, and straight from the garden.', price: 'RM 12', category: 'sayur' },
  { id: 'sy-3', name: 'Kangkung Belacan', description: 'Water spinach flash-fried with shrimp paste and red chili — the definitive Malaysian vegetable dish.', price: 'RM 14', category: 'sayur' },
  { id: 'sy-4', name: 'Pucuk Manis Goreng', description: 'Sweet leaf tips stir-fried with garlic and egg — delicate, green, and full of natural sweetness.', price: 'RM 14', category: 'sayur' },

  // Nasi
  { id: 'na-1', name: 'Nasi Putih', description: 'Steamed white rice — the perfect companion to every dish on this menu.', price: 'RM 3', category: 'nasi' },
  { id: 'na-2', name: 'Nasi Lemak Cili Kampung', description: 'Coconut rice with our house sambal, ikan bilis, egg, cucumber, and your choice of lauk.', price: 'RM 18', isSignature: true, category: 'nasi' },
  { id: 'na-3', name: 'Nasi Goreng Kampung', description: 'Village-style fried rice with dried anchovies, vegetables, and a perfectly fried egg on top.', price: 'RM 16', category: 'nasi' },
  { id: 'na-4', name: 'Nasi Kerabu', description: 'Blue butterfly-pea rice tossed with fresh herbs and shredded coconut — a Kelantan heritage dish.', price: 'RM 18', category: 'nasi' },

  // Desserts
  { id: 'ds-1', name: 'Pandan Gula Melaka Cake', description: 'Moist pandan sponge drenched in warm palm sugar syrup and freshly grated coconut — every bite is a memory.', price: 'RM 14', isSignature: true, category: 'desserts' },
  { id: 'ds-2', name: 'Coconut Ice Cream', description: 'Creamy coconut ice cream served in a fresh coconut shell, topped with palm sugar and coconut flakes.', price: 'RM 12', isSignature: true, category: 'desserts' },
  { id: 'ds-3', name: 'Pengat Pisang', description: "Warm banana in sweet coconut milk — a grandmother's dessert, simple and soul-filling.", price: 'RM 10', category: 'desserts' },
  { id: 'ds-4', name: 'Ais Krim Goreng', description: 'Vanilla ice cream in crispy golden batter, fried to order and served immediately.', price: 'RM 12', category: 'desserts' },

  // Drinks
  { id: 'dr-1', name: 'Teh Tarik', description: "Frothy pulled milk tea — the nation's favourite, pulled table-side on request.", price: 'RM 6', category: 'drinks' },
  { id: 'dr-2', name: 'Kopi Kampung', description: 'Traditional Malay coffee, bold and robust, served in the old-school way.', price: 'RM 6', category: 'drinks' },
  { id: 'dr-3', name: 'Air Kelapa Segar', description: 'Fresh coconut water, served straight from the shell — cool, clean, naturally sweet.', price: 'RM 10', category: 'drinks' },
  { id: 'dr-4', name: 'Sirap Bandung', description: 'Rose syrup with evaporated milk — sweet, pink, and nostalgic.', price: 'RM 8', category: 'drinks' },
  { id: 'dr-5', name: 'Jus Oren Segar', description: 'Freshly squeezed orange juice, made to order.', price: 'RM 10', category: 'drinks' },
  { id: 'dr-6', name: 'Air Mineral', description: 'Still or sparkling mineral water.', price: 'RM 4', category: 'drinks' },
]

export const signatureDishes: Dish[] = [
  {
    id: 'sd-1',
    name: 'Sambal Petai Udang',
    description: 'Stone-pounded chili paste, river prawns, and petai beans — the dish that defines us.',
    imageUrl: '/images/dish-sambal-petai-udang.jpg',
    isSignature: true,
  },
  {
    id: 'sd-2',
    name: 'Ayam Masak Kicap',
    description: 'Braised in sweet soy with aromatics — a childhood warmth on every plate.',
    imageUrl: '/images/dish-ayam-masak-kicap.jpg',
    isSignature: true,
  },
  {
    id: 'sd-3',
    name: 'Telur Dadar Kampung',
    description: 'Village-style omelette folded with fresh herbs — humble and unforgettable.',
    imageUrl: '/images/dish-telur-dadar.jpg',
    isSignature: true,
  },
  {
    id: 'sd-4',
    name: 'Tenggiri Asam Pedas',
    description: 'Spanish mackerel in asam jawa broth — bold, sour, and deeply satisfying.',
    imageUrl: '/images/dish-tenggiri.jpg',
    isSignature: true,
  },
  {
    id: 'sd-5',
    name: 'Pandan Gula Melaka Cake',
    description: 'Moist pandan sponge with warm palm sugar syrup — every bite is a memory.',
    imageUrl: '/images/dish-pandan-cake.jpg',
    isSignature: true,
  },
]

export const pillars: Pillar[] = [
  {
    id: 'pillar-1',
    title: 'Kampung Spirit',
    description: 'Rustic village charm meets modern sophistication, wrapped in leafy greenery that feels like home.',
    iconName: 'Leaf',
  },
  {
    id: 'pillar-2',
    title: 'Heartfelt Hospitality',
    description: 'Every guest is welcomed as family. Our service is warm, generous, and from the heart — every single time.',
    iconName: 'Heart',
  },
  {
    id: 'pillar-3',
    title: 'Fully Halal',
    description: 'JAKIM-certified halal across all Cili Kampung outlets. Prepared with care, integrity, and trust.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'pillar-4',
    title: 'Locally Sourced',
    description: "Fresh ingredients from Malaysian farmers. We support local and bring the best of Malaysia's produce to your table.",
    iconName: 'Sprout',
  },
]

export const menuCategories: { value: MenuCategory; label: string }[] = [
  { value: 'sambal-petai', label: 'Sambal & Petai' },
  { value: 'ayam', label: 'Ayam' },
  { value: 'ikan-seafood', label: 'Ikan & Seafood' },
  { value: 'sayur', label: 'Sayur & Ulam' },
  { value: 'nasi', label: 'Nasi & Rice' },
  { value: 'desserts', label: 'Pencuci Mulut' },
  { value: 'drinks', label: 'Minuman' },
]
