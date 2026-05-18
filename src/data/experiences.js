import {
  heroBeach, stoneArch, coastline, tropicalBar,
  hangingBaskets, localPots, tealWall, villaInterior,
  beachVilla, wovenTexture,
} from './images'

export const allExperiences = [
  { id: 1, title: 'Sunset Dhow Cruise', category: 'Water', duration: '3 hours', price: 85, difficulty: 'Easy', maxGroup: 12, img: heroBeach,
    desc: 'Sail aboard a traditional wooden dhow as the sun paints the Indian Ocean in gold and crimson. Includes fresh fruit, local wine, and the company of dolphins.' },
  { id: 2, title: 'Spice Farm Tour', category: 'Culture', duration: '4 hours', price: 45, difficulty: 'Easy', maxGroup: 15, img: hangingBaskets,
    desc: 'Walk through fragrant plantations of clove, vanilla, cinnamon, and cardamom. Learn centuries-old cultivation methods and taste freshly harvested spices.' },
  { id: 3, title: 'Stone Town Heritage Walk', category: 'Culture', duration: '3 hours', price: 35, difficulty: 'Easy', maxGroup: 10, img: stoneArch,
    desc: 'Navigate the labyrinthine alleys of UNESCO-listed Stone Town with a local historian. Discover hidden courtyards, carved Zanzibar doors, and ancient trading posts.' },
  { id: 4, title: 'Mnemba Atoll Snorkeling', category: 'Water', duration: '5 hours', price: 120, difficulty: 'Moderate', maxGroup: 8, img: coastline,
    desc: 'Dive into the crystal-clear waters of Mnemba Atoll, home to over 600 species of fish, sea turtles, and vibrant coral gardens.' },
  { id: 5, title: 'Jozani Forest Trek', category: 'Adventure', duration: '3 hours', price: 40, difficulty: 'Easy', maxGroup: 12, img: wovenTexture,
    desc: 'Explore Zanzibar\'s last indigenous forest and meet the rare Red Colobus monkeys. Walk through mangrove boardwalks and ancient fig trees.' },
  { id: 6, title: 'Zanzibar Cooking Class', category: 'Food', duration: '4 hours', price: 65, difficulty: 'Easy', maxGroup: 8, img: localPots,
    desc: 'Start at the Darajani Market, selecting fresh ingredients with your chef-guide. Then master the art of pilau, biryani, and coconut fish curry.' },
  { id: 7, title: 'Kite Surfing Lessons', category: 'Water', duration: '3 hours', price: 95, difficulty: 'Moderate', maxGroup: 4, img: villaInterior,
    desc: 'Learn to ride the wind on Paje\'s legendary flat-water lagoon. Expert IKO-certified instructors for all levels, gear included.' },
  { id: 8, title: 'Beachside Yoga Retreat', category: 'Wellness', duration: '2 hours', price: 40, difficulty: 'Easy', maxGroup: 15, img: beachVilla,
    desc: 'Sunrise yoga on a secluded beach, followed by guided meditation and a fresh coconut water cool-down. Pure island tranquility.' },
  { id: 9, title: 'Night Kayak Bioluminescence', category: 'Adventure', duration: '2 hours', price: 75, difficulty: 'Easy', maxGroup: 8, img: tealWall,
    desc: 'Paddle through waters that glow electric blue beneath your kayak. A truly magical experience in the bioluminescent bays of Zanzibar.' },
  { id: 10, title: 'Seafood Beach BBQ', category: 'Food', duration: '3 hours', price: 55, difficulty: 'Easy', maxGroup: 20, img: tropicalBar,
    desc: 'Feast on freshly grilled lobster, octopus, and kingfish right on the sand, as local musicians play traditional taarab under the stars.' },
]

export const experienceCategories = ['All', 'Water', 'Culture', 'Food', 'Wellness', 'Adventure']

export const difficultyColors = {
  Easy: 'bg-seafoam/20 text-ocean',
  Moderate: 'bg-spice/10 text-spice',
  Challenging: 'bg-coral/10 text-coral',
}
