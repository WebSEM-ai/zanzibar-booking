import {
  villaInterior, dhowBoat, tropicalBar, beachVilla,
  stoneArch, coastline, heroBeach, tealWall, localPots,
} from './images'

export const allProperties = [
  {
    id: 1,
    name: 'Bahari Beach House',
    location: 'Nungwi',
    type: 'Villa',
    price: 450,
    rating: 4.9,
    reviews: 124,
    beds: 4,
    baths: 3,
    guests: 8,
    area: '320 m\u00b2',
    img: villaInterior,
    tags: ['Beachfront', 'Pool', 'Eco-Certified'],
    tagline: 'Where the ocean becomes your living room',
    images: [villaInterior, dhowBoat, tropicalBar, beachVilla, stoneArch],
    description: `Perched on the pristine northern tip of Zanzibar, Bahari Beach House is a sanctuary where barefoot luxury meets the Indian Ocean. Wake to the sound of waves breaking gently on white sand, just steps from your private terrace.

This four-bedroom villa blends contemporary design with traditional Swahili craftsmanship \u2014 hand-carved coral stone walls, makuti-thatched ceilings, and locally woven textiles create an atmosphere that\u2019s both refined and deeply rooted in island culture.

Your private infinity pool overlooks an endless horizon of turquoise, while the outdoor dining pavilion is the perfect setting for sunset dinners prepared by your personal chef using the freshest local seafood and spices.`,
    amenities: [
      { icon: 'pool', name: 'Infinity Pool' },
      { icon: 'wifi', name: 'High-Speed WiFi' },
      { icon: 'chef', name: 'Private Chef' },
      { icon: 'ac', name: 'Air Conditioning' },
      { icon: 'beach', name: 'Private Beach Access' },
      { icon: 'spa', name: 'In-Villa Spa' },
      { icon: 'car', name: 'Airport Transfer' },
      { icon: 'laundry', name: 'Daily Housekeeping' },
      { icon: 'garden', name: 'Tropical Garden' },
      { icon: 'kayak', name: 'Kayaks & Snorkel Gear' },
      { icon: 'bar', name: 'Sunset Bar' },
      { icon: 'eco', name: 'Eco-Certified' },
    ],
    host: { name: 'Amina & Hassan', since: '2019', responseTime: '< 1 hour', avatar: tealWall },
    reviewsData: [
      { name: 'Sophie L.', from: 'France', rating: 5, date: 'Feb 2026', text: 'Absolutely magical. The villa exceeded our wildest expectations. The staff were incredibly warm and attentive.' },
      { name: 'James C.', from: 'USA', rating: 5, date: 'Jan 2026', text: 'Best holiday we\'ve ever had. The private chef made extraordinary meals every night. The pool-to-ocean view is unreal.' },
      { name: 'Elena R.', from: 'Italy', rating: 5, date: 'Dec 2025', text: 'Every detail was perfect. The snorkeling right off the beach was incredible. We saw dolphins from the terrace!' },
    ],
  },
  {
    id: 2,
    name: 'Spice Island Villa',
    location: 'Matemwe',
    type: 'Villa',
    price: 680,
    rating: 5.0,
    reviews: 89,
    beds: 5,
    baths: 4,
    guests: 10,
    area: '450 m\u00b2',
    img: beachVilla,
    tags: ['Private Island', 'Luxury', 'Staff'],
    tagline: 'An island within an island',
    images: [beachVilla, villaInterior, tealWall, coastline, tropicalBar],
    description: `Set on a private stretch of Matemwe's untouched coastline, Spice Island Villa offers the ultimate Zanzibar escape. Five luxurious bedrooms open onto private terraces overlooking the Indian Ocean.

A dedicated team of staff — from your personal butler to an on-site chef — ensures every moment is effortless. The villa's infinity pool seems to merge with the ocean beyond.

Days unfold at your own pace: snorkel the house reef, sail to Mnemba Atoll, or simply let the tropical breeze carry your worries away from the comfort of your daybed.`,
    amenities: [
      { icon: 'pool', name: 'Infinity Pool' },
      { icon: 'wifi', name: 'High-Speed WiFi' },
      { icon: 'chef', name: 'Private Chef' },
      { icon: 'ac', name: 'Air Conditioning' },
      { icon: 'beach', name: 'Private Beach Access' },
      { icon: 'spa', name: 'In-Villa Spa' },
      { icon: 'car', name: 'Airport Transfer' },
      { icon: 'laundry', name: 'Daily Housekeeping' },
    ],
    host: { name: 'Khalid & Fatma', since: '2020', responseTime: '< 30 min', avatar: coastline },
    reviewsData: [
      { name: 'Charlotte M.', from: 'UK', rating: 5, date: 'Mar 2026', text: 'Truly a once-in-a-lifetime experience. The staff anticipated our every need.' },
      { name: 'Thomas K.', from: 'Germany', rating: 5, date: 'Feb 2026', text: 'The most beautiful villa we\'ve ever stayed in. Worth every penny.' },
    ],
  },
  {
    id: 3,
    name: 'Stone Town Riad',
    location: 'Stone Town',
    type: 'Boutique Hotel',
    price: 280,
    rating: 4.8,
    reviews: 201,
    beds: 3,
    baths: 2,
    guests: 6,
    area: '210 m\u00b2',
    img: dhowBoat,
    tags: ['Heritage', 'Rooftop', 'Central'],
    tagline: 'History meets modern comfort',
    images: [dhowBoat, stoneArch, tropicalBar, localPots, villaInterior],
    description: `Nestled in the heart of UNESCO-listed Stone Town, this beautifully restored riad combines centuries of Swahili architectural heritage with contemporary luxury.

Three individually designed suites feature original carved coral walls, hand-painted ceilings, and antique Zanzibari furnishings — each telling its own story of the island's rich cultural tapestry.

The rooftop terrace offers panoramic views over the labyrinthine streets below, the perfect vantage point for watching the sun set over the Indian Ocean while sipping freshly squeezed tropical cocktails.`,
    amenities: [
      { icon: 'wifi', name: 'High-Speed WiFi' },
      { icon: 'ac', name: 'Air Conditioning' },
      { icon: 'laundry', name: 'Daily Housekeeping' },
      { icon: 'car', name: 'Airport Transfer' },
    ],
    host: { name: 'Omar', since: '2018', responseTime: '< 2 hours', avatar: stoneArch },
    reviewsData: [
      { name: 'Marie P.', from: 'France', rating: 5, date: 'Jan 2026', text: 'A gem in the heart of Stone Town. The rooftop views are incredible.' },
      { name: 'Akiko T.', from: 'Japan', rating: 5, date: 'Dec 2025', text: 'Beautiful restoration. You can feel the history in every room.' },
    ],
  },
  {
    id: 4,
    name: 'Paje Ocean Lodge',
    location: 'Paje',
    type: 'Lodge',
    price: 350,
    rating: 4.9,
    reviews: 156,
    beds: 3,
    baths: 2,
    guests: 6,
    area: '180 m\u00b2',
    img: tropicalBar,
    tags: ['Ocean View', 'Kite Spot', 'Restaurant'],
    tagline: 'Ride the wind, sleep on the sand',
    images: [tropicalBar, coastline, heroBeach, villaInterior, beachVilla],
    description: `Paje Ocean Lodge sits on the legendary kite-surfing coast, where the shallow turquoise lagoon stretches endlessly and the trade winds create perfect conditions year-round.

Three stylish bungalows open directly onto the beach, with locally woven textiles and driftwood furniture creating a barefoot-luxe atmosphere.

The on-site restaurant serves the freshest catch of the day, and when you're not riding the wind, the house reef offers spectacular snorkeling just steps from your door.`,
    amenities: [
      { icon: 'wifi', name: 'High-Speed WiFi' },
      { icon: 'ac', name: 'Air Conditioning' },
      { icon: 'beach', name: 'Beachfront' },
      { icon: 'chef', name: 'Restaurant' },
      { icon: 'kayak', name: 'Kite Equipment' },
      { icon: 'laundry', name: 'Daily Housekeeping' },
    ],
    host: { name: 'Juma', since: '2021', responseTime: '< 1 hour', avatar: tropicalBar },
    reviewsData: [
      { name: 'Lucas V.', from: 'Brazil', rating: 5, date: 'Feb 2026', text: 'Best kite spot with amazing accommodation. Can\'t ask for more!' },
    ],
  },
  {
    id: 5,
    name: 'Mnemba Seaview',
    location: 'Mnemba',
    type: 'Villa',
    price: 920,
    rating: 5.0,
    reviews: 67,
    beds: 6,
    baths: 5,
    guests: 12,
    area: '520 m\u00b2',
    img: coastline,
    tags: ['Exclusive', 'Private Beach', 'Chef'],
    tagline: 'Where exclusivity meets paradise',
    images: [coastline, beachVilla, villaInterior, tealWall, heroBeach],
    description: `The ultimate Zanzibar escape. Mnemba Seaview is an exclusive villa perched above its own private cove, surrounded by the richest marine life in the archipelago.

Six sumptuous bedrooms accommodate up to twelve guests in total privacy, with a dedicated chef, butler, and boat captain at your service around the clock.

Wake to dolphins playing in the bay below, spend the day exploring pristine coral reefs, and end each evening with a private beach bonfire under a canopy of stars.`,
    amenities: [
      { icon: 'pool', name: 'Infinity Pool' },
      { icon: 'wifi', name: 'High-Speed WiFi' },
      { icon: 'chef', name: 'Private Chef' },
      { icon: 'ac', name: 'Air Conditioning' },
      { icon: 'beach', name: 'Private Beach' },
      { icon: 'spa', name: 'In-Villa Spa' },
      { icon: 'car', name: 'Boat Transfer' },
      { icon: 'laundry', name: 'Daily Housekeeping' },
      { icon: 'kayak', name: 'Dive Equipment' },
    ],
    host: { name: 'Said & Zara', since: '2017', responseTime: '< 30 min', avatar: coastline },
    reviewsData: [
      { name: 'Richard B.', from: 'Australia', rating: 5, date: 'Mar 2026', text: 'Absolute perfection. The private beach and snorkeling were unreal.' },
    ],
  },
  {
    id: 6,
    name: 'Zanzi Coral Suite',
    location: 'Nungwi',
    type: 'Boutique Hotel',
    price: 195,
    rating: 4.7,
    reviews: 312,
    beds: 1,
    baths: 1,
    guests: 2,
    area: '65 m\u00b2',
    img: heroBeach,
    tags: ['Couples', 'Spa', 'All-Inclusive'],
    tagline: 'Your romantic island hideaway',
    images: [heroBeach, villaInterior, tealWall, beachVilla, coastline],
    description: `A jewel of a suite designed for couples seeking an intimate Zanzibar escape. Zanzi Coral Suite offers all-inclusive luxury with a deeply personal touch.

The spacious suite opens onto a private garden with an outdoor shower surrounded by tropical blooms. Enjoy daily spa treatments, sunset cocktails, and candlelit dinners on the beach — all included.

Perfectly positioned in Nungwi, you're steps from the island's most celebrated beach and a short boat ride from the magic of Mnemba Atoll.`,
    amenities: [
      { icon: 'wifi', name: 'High-Speed WiFi' },
      { icon: 'ac', name: 'Air Conditioning' },
      { icon: 'spa', name: 'Couples Spa' },
      { icon: 'beach', name: 'Beach Access' },
      { icon: 'chef', name: 'All-Inclusive Meals' },
      { icon: 'laundry', name: 'Daily Housekeeping' },
    ],
    host: { name: 'Salma', since: '2020', responseTime: '< 1 hour', avatar: heroBeach },
    reviewsData: [
      { name: 'Anna & Mark', from: 'Sweden', rating: 5, date: 'Jan 2026', text: 'The most romantic week of our lives. Truly all-inclusive perfection.' },
    ],
  },
  {
    id: 7,
    name: 'Swahili Heritage House',
    location: 'Stone Town',
    type: 'Heritage Home',
    price: 320,
    rating: 4.8,
    reviews: 98,
    beds: 4,
    baths: 3,
    guests: 8,
    area: '280 m\u00b2',
    img: stoneArch,
    tags: ['Historical', 'Courtyard', 'Central'],
    tagline: 'A living piece of Zanzibar history',
    images: [stoneArch, dhowBoat, localPots, tropicalBar, villaInterior],
    description: `Step through the iconic carved wooden doors into a world where Zanzibar's rich history comes alive. This meticulously restored heritage house dates back to the 19th century.

Four unique rooms surround a central courtyard with a traditional reflecting pool, where tropical birds dart between frangipani trees and the scent of jasmine fills the evening air.

Located on the historic waterfront, you're moments from the Old Fort, the House of Wonders, and the vibrant Forodhani Night Market.`,
    amenities: [
      { icon: 'wifi', name: 'High-Speed WiFi' },
      { icon: 'ac', name: 'Air Conditioning' },
      { icon: 'garden', name: 'Courtyard Garden' },
      { icon: 'laundry', name: 'Daily Housekeeping' },
      { icon: 'car', name: 'Airport Transfer' },
    ],
    host: { name: 'Rashid', since: '2016', responseTime: '< 2 hours', avatar: stoneArch },
    reviewsData: [
      { name: 'Pierre D.', from: 'Belgium', rating: 5, date: 'Feb 2026', text: 'Like stepping back in time. An unforgettable cultural experience.' },
    ],
  },
  {
    id: 8,
    name: 'Kizimkazi Retreat',
    location: 'Kizimkazi',
    type: 'Lodge',
    price: 410,
    rating: 4.9,
    reviews: 143,
    beds: 3,
    baths: 2,
    guests: 6,
    area: '200 m\u00b2',
    img: tealWall,
    tags: ['Dolphins', 'Sunset', 'Quiet'],
    tagline: 'Where dolphins are your neighbours',
    images: [tealWall, coastline, beachVilla, localPots, heroBeach],
    description: `Perched on the wild southern coast of Zanzibar, Kizimkazi Retreat is where nature takes center stage. Resident pods of bottlenose and humpback dolphins play in the waters just below the lodge.

Three elegantly simple rooms face the ocean, each with a private veranda designed for hours of contemplation and dolphin-spotting.

The rhythms here are set by nature — sunrise yoga on the cliff, afternoon kayaking, and legendary sunsets that paint the sky in impossible colours.`,
    amenities: [
      { icon: 'wifi', name: 'High-Speed WiFi' },
      { icon: 'ac', name: 'Air Conditioning' },
      { icon: 'beach', name: 'Ocean Access' },
      { icon: 'kayak', name: 'Kayaks' },
      { icon: 'laundry', name: 'Daily Housekeeping' },
      { icon: 'car', name: 'Airport Transfer' },
    ],
    host: { name: 'Bakari', since: '2019', responseTime: '< 1 hour', avatar: tealWall },
    reviewsData: [
      { name: 'Sarah L.', from: 'Canada', rating: 5, date: 'Jan 2026', text: 'Woke up to dolphins every morning. Pure magic.' },
    ],
  },
  {
    id: 9,
    name: 'Jambiani Beach Bungalow',
    location: 'Jambiani',
    type: 'Bungalow',
    price: 165,
    rating: 4.6,
    reviews: 189,
    beds: 2,
    baths: 1,
    guests: 4,
    area: '95 m\u00b2',
    img: localPots,
    tags: ['Budget-Friendly', 'Authentic', 'Beach'],
    tagline: 'Real Zanzibar, beautifully simple',
    images: [localPots, heroBeach, coastline, tropicalBar, stoneArch],
    description: `Jambiani Beach Bungalow offers the authentic Zanzibar experience without compromising on comfort. A beautifully designed beachfront bungalow where the pace of local life becomes your own.

Two cosy bedrooms with hand-carved wooden beds and locally made textiles open onto a shared veranda overlooking the ocean. Watch local fishermen bring in the morning's catch from your hammock.

Jambiani is the island's best-kept secret — a quiet stretch of coast where seaweed farmers wade through turquoise shallows and the beach goes on forever.`,
    amenities: [
      { icon: 'wifi', name: 'WiFi' },
      { icon: 'beach', name: 'Beachfront' },
      { icon: 'laundry', name: 'Housekeeping' },
    ],
    host: { name: 'Mwanaisha', since: '2022', responseTime: '< 3 hours', avatar: localPots },
    reviewsData: [
      { name: 'Emma J.', from: 'Netherlands', rating: 4, date: 'Dec 2025', text: 'Perfect for a budget-friendly but beautiful Zanzibar stay. Loved the local feel.' },
    ],
  },
]

export function getPropertyById(id) {
  return allProperties.find((p) => p.id === Number(id))
}

export const locations = ['All', 'Nungwi', 'Stone Town', 'Paje', 'Matemwe', 'Mnemba', 'Kizimkazi', 'Jambiani']
export const propertyTypes = ['All', 'Villa', 'Boutique Hotel', 'Lodge', 'Heritage Home', 'Bungalow']
export const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Top Rated']
