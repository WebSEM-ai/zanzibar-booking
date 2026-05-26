const blogPosts = [
  {
    title: 'The Sacred Art of Tinga Tinga',
    desc: 'Born in the streets of Dar es Salaam, Tinga Tinga painting has become the visual soul of East Africa — bold colours, naive forms, and stories that speak louder than words.',
    category: 'Art & Craft',
    video: '/media/Blog/0_Masks_Blades_1920x1080.mp4',
    size: 'tall',
  },
  {
    title: 'Dhow Boats: Sailing Through Centuries',
    desc: 'For over a thousand years, the hand-carved dhow has carried spices, stories, and civilizations across the Indian Ocean. In Zanzibar, it remains a living tradition.',
    category: 'Heritage',
    video: '/media/Blog/1854021_Koh_Chang_Boat_3840x2160.mp4',
    size: 'wide',
  },
  {
    title: 'Spice Routes: The Fragrant Legacy',
    desc: 'Clove, cardamom, cinnamon, vanilla — the spices that once made sultans rich still perfume every corner of the island. Walk through the farms where history grows.',
    category: 'Culture',
    video: '/media/Blog/0_Africa_Map_3840x2160.mp4',
    size: 'normal',
  },
  {
    title: 'The Coral Stone Labyrinth of Stone Town',
    desc: 'UNESCO-listed alleyways hide carved wooden doors older than most nations. Each doorway tells a story — of Indian merchants, Omani sultans, and Swahili poets.',
    category: 'Architecture',
    video: '/media/Blog/0_Canyon_River_3840x2160.mp4',
    size: 'tall',
  },
  {
    title: 'Taarab: The Music of the Monsoon',
    desc: 'A hypnotic blend of Arabic oud, Indian sitar, and African rhythm, Taarab is the soundtrack of Zanzibar — played at weddings, festivals, and moonlit rooftops.',
    category: 'Music',
    video: '/media/Blog/0_Masks_Blades_1920x1080.mp4',
    size: 'wide',
  },
  {
    title: 'Jozani: Where the Red Colobus Roam',
    desc: 'The last indigenous forest on the island shelters one of the world\'s rarest primates. Walk through ancient mangroves where nature has remained untouched for millennia.',
    category: 'Nature',
    video: '/media/Blog/7126541_Asia_Philippines_3840x2160.mp4',
    size: 'normal',
  },
  {
    title: 'Henna & Kanga: The Language of Fabric',
    desc: 'Every kanga cloth carries a Swahili proverb. Every henna pattern tells a family\'s story. In Zanzibar, what you wear speaks before you do.',
    category: 'Traditions',
    video: '/media/Blog/0_Vertical_Vertical_Format_1080x1920.mp4',
    size: 'tall',
  },
  {
    title: 'Island Rhythms: Life Between Tides',
    desc: 'When the tide retreats, the women of Zanzibar harvest seaweed in waist-deep water. When it returns, fishermen cast their nets. Life here moves with the ocean.',
    category: 'Daily Life',
    video: '/media/Blog/0_Africa_Map_3840x2160.mp4',
    size: 'wide',
  },
  {
    title: 'The Underwater Cosmos',
    desc: 'Beneath the turquoise surface lies a kaleidoscope of coral cathedrals and dancing fish. Zanzibar\'s reefs are among the most biodiverse in the Indian Ocean.',
    category: 'Marine Life',
    video: '/media/Blog/0_Canyon_River_3840x2160.mp4',
    size: 'normal',
  },
]

const categoryColors = {
  'Art & Craft': 'bg-coral/80',
  'Heritage': 'bg-ocean',
  'Culture': 'bg-spice/90',
  'Architecture': 'bg-timber',
  'Music': 'bg-coral/80',
  'Nature': 'bg-seafoam text-midnight',
  'Traditions': 'bg-spice/90',
  'Daily Life': 'bg-ocean',
  'Marine Life': 'bg-seafoam text-midnight',
}

function BlogCard({ post, className = '' }) {
  return (
    <div className={`group relative rounded-frame overflow-hidden ${className}`}>
      {/* Video Background */}
      <video
        src={post.video}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onMouseEnter={(e) => e.target.play()}
        onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0 }}
        ref={(el) => {
          if (!el) return
          const card = el.closest('.group')
          const enter = () => el.play().catch(() => {})
          const leave = () => { el.pause(); el.currentTime = 0 }
          card.addEventListener('mouseenter', enter)
          card.addEventListener('mouseleave', leave)
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/30 to-transparent" />
      <div className="absolute inset-0 bg-midnight/20 group-hover:bg-midnight/10 transition-colors duration-500" />

      {/* Play hint */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Category badge */}
      <span className={`absolute top-5 left-5 px-3 py-1 text-[10px] font-semibold tracking-widest uppercase rounded-pill text-white ${categoryColors[post.category] || 'bg-ocean'}`}>
        {post.category}
      </span>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <h3 className="font-display text-xl md:text-2xl lg:text-3xl text-white mb-3 leading-tight group-hover:translate-y-0 transition-transform duration-500">
          {post.title}
        </h3>
        <p className="font-body text-sm text-white/60 leading-relaxed line-clamp-3 max-w-lg">
          {post.desc}
        </p>
      </div>
    </div>
  )
}

export default function Blog() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-ivory">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 pt-10 md:pt-16 pb-12 md:pb-16">
        <div className="max-w-2xl reveal">
          <p className="section-eyebrow">Stories & Culture</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ocean leading-tight mb-5">
            The soul of Zanzibar
          </h1>
          <p className="font-body text-base md:text-lg text-ocean/50 leading-relaxed">
            Beyond the turquoise waters and white sand lies an island steeped in centuries of culture, craftsmanship, and living traditions. These are its stories.
          </p>
        </div>
      </div>

      {/* Asymmetric Grid */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 pb-20 md:pb-32">
        {/* Row 1: tall + wide stacked with normal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 mb-4 md:mb-5">
          <div className="md:col-span-5 reveal">
            <BlogCard post={blogPosts[0]} className="h-[400px] md:h-[600px]" />
          </div>
          <div className="md:col-span-7 flex flex-col gap-4 md:gap-5">
            <div className="reveal reveal-delay-1">
              <BlogCard post={blogPosts[1]} className="h-[280px] md:h-[340px]" />
            </div>
            <div className="reveal reveal-delay-2">
              <BlogCard post={blogPosts[2]} className="h-[220px] md:h-[240px]" />
            </div>
          </div>
        </div>

        {/* Row 2: wide + tall */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 mb-4 md:mb-5">
          <div className="md:col-span-7 flex flex-col gap-4 md:gap-5">
            <div className="reveal">
              <BlogCard post={blogPosts[3]} className="h-[220px] md:h-[260px]" />
            </div>
            <div className="reveal reveal-delay-1">
              <BlogCard post={blogPosts[4]} className="h-[280px] md:h-[320px]" />
            </div>
          </div>
          <div className="md:col-span-5 reveal reveal-delay-2">
            <BlogCard post={blogPosts[5]} className="h-[400px] md:h-[600px]" />
          </div>
        </div>

        {/* Row 3: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          <div className="md:col-span-4 reveal">
            <BlogCard post={blogPosts[6]} className="h-[350px] md:h-[450px]" />
          </div>
          <div className="md:col-span-5 reveal reveal-delay-1">
            <BlogCard post={blogPosts[7]} className="h-[350px] md:h-[450px]" />
          </div>
          <div className="md:col-span-3 reveal reveal-delay-2">
            <BlogCard post={blogPosts[8]} className="h-[350px] md:h-[450px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
