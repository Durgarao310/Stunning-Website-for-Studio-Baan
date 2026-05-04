import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function JournalPage() {
  const articles = [
    {
      id: 1,
      title: 'The Return to Material Honesty in Contemporary Architecture',
      category: 'Design Philosophy',
      date: 'April 28, 2026',
      image:
        'https://images.unsplash.com/photo-1640077374000-a647ac62feb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      excerpt:
        'Exploring how contemporary architects are rediscovering the power of authentic materials and their inherent beauty.',
    },
    {
      id: 2,
      title: 'Designing for Climate Resilience: Lessons from Nordic Architecture',
      category: 'Sustainability',
      date: 'April 15, 2026',
      image:
        'https://images.unsplash.com/photo-1549014999-a9e40e71c93b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      excerpt:
        'How Scandinavian design principles offer valuable insights for creating climate-adaptive architecture.',
    },
    {
      id: 3,
      title: 'The Architecture of Silence: Creating Contemplative Spaces',
      category: 'Craft',
      date: 'March 30, 2026',
      image:
        'https://images.unsplash.com/photo-1775486134015-cedad4808fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      excerpt:
        'In our noisy world, how can architecture provide sanctuary and moments of quiet reflection?',
    },
    {
      id: 4,
      title: 'Reimagining Urban Density with Human-Centered Design',
      category: 'Urban Planning',
      date: 'March 12, 2026',
      image:
        'https://images.unsplash.com/photo-1771911650360-31fdb3344c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      excerpt:
        'Balancing density with livability—creating vibrant urban environments that nurture community.',
    },
    {
      id: 5,
      title: 'Craftsmanship in the Digital Age',
      category: 'Craft',
      date: 'February 28, 2026',
      image:
        'https://images.unsplash.com/photo-1759925689062-5716e45d8d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      excerpt:
        'How digital fabrication and traditional craft can coexist to create extraordinary architecture.',
    },
    {
      id: 6,
      title: 'Light as Material: Controlling Natural Illumination',
      category: 'Design Philosophy',
      date: 'February 10, 2026',
      image:
        'https://images.unsplash.com/photo-1765207296039-7ffc2c4b0716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      excerpt:
        'Exploring how architects shape and choreograph daylight to enhance spatial experience.',
    },
  ];

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl mb-6">Journal</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Thoughts on architecture, design philosophy, sustainability, and the craft of
            building.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="group cursor-magnetic"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="aspect-[4/3] bg-secondary/20 mb-6 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <div className="mb-3">
                <span className="text-xs tracking-widest text-accent uppercase">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground mx-2">•</span>
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </div>

              <h2 className="text-xl md:text-2xl mb-4 group-hover:text-accent transition-colors">
                {article.title}
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <motion.button
                className="text-sm tracking-wide cursor-magnetic inline-flex items-center gap-2 group/btn"
                whileHover={{ x: 4 }}
              >
                Read Article
                <span className="inline-block group-hover/btn:translate-x-1 transition-transform">
                  →
                </span>
              </motion.button>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
