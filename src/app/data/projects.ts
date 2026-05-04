export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Architecture' | 'Interior' | 'Product';
  typology?: string;
  location: string;
  year: string;
  size?: string;
  status: string;
  client?: string;
  collaborators?: string[];
  heroImage: string;
  images: string[];
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  awards?: string[];
}

export const projects: Project[] = [
  {
    id: 'casa-meridian',
    title: 'Casa Meridian',
    subtitle: 'A dialogue between light and material',
    category: 'Architecture',
    typology: 'Residential',
    location: 'Barcelona, Spain',
    year: '2025',
    size: '420 m²',
    status: 'Completed',
    client: 'Private',
    heroImage: 'https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1776056164998-ffed5c87b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      'https://images.unsplash.com/photo-1771021905491-1893d7359df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      'https://images.unsplash.com/photo-1759672573161-c6d6b861914d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      'https://images.unsplash.com/photo-1772665776796-510eb11a7b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    ],
    description: 'Casa Meridian emerges from its Mediterranean context as a study in restraint and materiality. The residence establishes an intimate relationship with the landscape through carefully calibrated apertures that frame views and modulate natural light throughout the day.',
    challenge: 'The site presented dual challenges: maximizing privacy from adjacent properties while maintaining visual connection to the distant sea, and creating thermal comfort in an exposed coastal environment.',
    solution: 'We developed a series of interlocking volumes that create protected courtyards, each oriented to capture specific qualities of light and view. Strategic positioning of thermal mass and natural ventilation pathways ensure comfort without mechanical intervention.',
    features: [
      'Rammed earth walls providing thermal mass',
      'Cross-ventilation strategy eliminating AC needs',
      'Rainwater harvesting integrated into landscape',
      'Local limestone and reclaimed timber throughout',
      'Photovoltaic array integrated into roof geometry',
    ],
    awards: ['Architizer A+ Award 2025', 'WAN Residential Award Shortlist'],
  },
  {
    id: 'void-gallery',
    title: 'The Void Gallery',
    subtitle: 'Architecture as canvas',
    category: 'Architecture',
    typology: 'Cultural',
    location: 'Amsterdam, Netherlands',
    year: '2024',
    size: '1,200 m²',
    status: 'Completed',
    client: 'Contemporary Art Foundation',
    heroImage: 'https://images.unsplash.com/photo-1771678040857-51d00a11be7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1771678040588-d88ff1fb2370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      'https://images.unsplash.com/photo-1771678039697-be711cc352e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      'https://images.unsplash.com/photo-1759590029882-2cea786619c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      'https://images.unsplash.com/photo-1771911650360-31fdb3344c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    ],
    description: 'The Void Gallery reimagines the white cube as a sequence of interconnected spatial volumes, each with distinct proportions and light qualities. The architecture deliberately recedes, becoming a neutral field that allows art to occupy space without competition.',
    challenge: 'Creating flexible exhibition spaces that could accommodate diverse scales of artwork while maintaining architectural coherence and providing optimal lighting conditions.',
    solution: 'A modular ceiling system houses all technical infrastructure while providing indirect north light supplemented by precisely calibrated artificial lighting. Movable walls on a hidden track system allow infinite spatial configurations.',
    features: [
      'Advanced climate control maintaining museum standards',
      'Integrated lighting system with 98+ CRI',
      'Acoustic treatment for multimedia installations',
      'Polished concrete floors with underfloor heating',
      'Minimal detailing allowing art to dominate',
    ],
    awards: ['Architizer A+ Award 2024 - Culture', 'Dezeen Awards Shortlist'],
  },
  {
    id: 'apex-tower',
    title: 'Apex Tower',
    subtitle: 'Vertical urbanism redefined',
    category: 'Architecture',
    typology: 'Commercial',
    location: 'London, United Kingdom',
    year: '2025',
    size: '28,000 m²',
    status: 'Under Construction',
    client: 'Apex Development Group',
    collaborators: ['Arup (Structure)', 'Transsolar (Climate)'],
    heroImage: 'https://images.unsplash.com/photo-1761953744728-dd811293bfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1772309748490-54ddc7ecb69e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      'https://images.unsplash.com/photo-1772824953644-c13d02ccd905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      'https://images.unsplash.com/photo-1764889744736-b92830365267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    ],
    description: 'Apex Tower establishes a new paradigm for high-rise commercial architecture in London. The building\'s distinctive profile results from climate analysis, optimizing solar gain while maximizing usable floor area and providing every workspace with natural light and views.',
    challenge: 'Delivering a commercially viable high-rise that prioritizes occupant wellbeing and environmental performance in one of the world\'s most competitive real estate markets.',
    solution: 'A parametrically optimized form reduces wind loads while the facade system integrates photovoltaic cells with high-performance glazing. Vertical gardens on setback terraces create communal spaces throughout the building.',
    features: [
      'BREEAM Outstanding certification target',
      'Integrated facade photovoltaic system',
      'Natural ventilation in all occupied spaces',
      'Sky gardens every six floors',
      'Rainwater harvesting and greywater recycling',
    ],
  },
  {
    id: 'lumina-residence',
    title: 'Lumina Residence',
    subtitle: 'Where interior becomes experience',
    category: 'Interior',
    location: 'Copenhagen, Denmark',
    year: '2024',
    size: '180 m²',
    status: 'Completed',
    client: 'Private',
    heroImage: 'https://images.unsplash.com/photo-1775486134015-cedad4808fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1603430416695-752802223e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      'https://images.unsplash.com/photo-1602137933189-d119b2c45c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      'https://images.unsplash.com/photo-1645217709128-3ca7191704a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    ],
    description: 'Lumina Residence transforms a 1960s apartment into a luminous sanctuary. Every surface, material, and detail was considered to enhance the experience of natural light as it moves through the space across the day and seasons.',
    challenge: 'Working within the constraints of an existing apartment structure while creating a sense of spatial generosity and connection to natural light.',
    solution: 'Strategic removal of non-structural walls opened sight lines, while custom joinery in pale oak creates storage without visual weight. Reflective surfaces amplify and redirect light into deeper spaces.',
    features: [
      'Custom millwork throughout',
      'Integrated lighting design',
      'Natural lime plaster walls',
      'Reclaimed oak flooring',
      'Bespoke furniture pieces',
    ],
    awards: ['Frame Awards - Apartment Interior 2024'],
  },
  {
    id: 'node-chair',
    title: 'Node Chair',
    subtitle: 'Structural poetry in oak',
    category: 'Product',
    location: 'Studio Baan Workshop',
    year: '2024',
    status: 'In Production',
    client: 'Studio Baan Collection',
    heroImage: 'https://images.unsplash.com/photo-1626233235316-34e306a47d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1626233234720-dd61401b4ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      'https://images.unsplash.com/photo-1642660594237-ca26cf890b59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    ],
    description: 'The Node Chair explores the intersection of traditional joinery and contemporary form. Each piece is hand-crafted from sustainably sourced European oak, celebrating the material\'s grain and natural variation.',
    challenge: 'Creating a chair that is both structurally efficient and visually light, while maintaining traditional craftsmanship values.',
    solution: 'We developed a unique joint system that eliminates the need for metal fasteners while creating a distinctive visual language. The result is a chair that reveals its construction honestly.',
    features: [
      'Mortise and tenon joinery throughout',
      'Natural oil finish highlighting grain',
      'Available in oak, walnut, ash',
      'Made to order in Netherlands',
      'Limited production run',
    ],
    awards: ['Wallpaper* Design Awards 2024 - Furniture'],
  },
  {
    id: 'atrium-office',
    title: 'Atrium Office Complex',
    subtitle: 'Workplace as community',
    category: 'Architecture',
    typology: 'Commercial',
    location: 'Oslo, Norway',
    year: '2024',
    size: '8,500 m²',
    status: 'Completed',
    client: 'Nordic Property Group',
    heroImage: 'https://images.unsplash.com/photo-1765207296039-7ffc2c4b0716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1759925689062-5716e45d8d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      'https://images.unsplash.com/photo-1717240652359-cba8506b31f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    ],
    description: 'The Atrium Office Complex reimagines the workplace as a series of interconnected neighborhoods. A central atrium becomes the social heart, with workspaces organized around it to maximize connection and collaboration.',
    challenge: 'Creating flexible office space that encourages chance encounters and community while providing acoustic privacy and focus spaces.',
    solution: 'Tiered floors step back from the central atrium, creating terraces for informal gathering. Workspace zones vary in character from quiet focus areas to collaborative studios.',
    features: [
      'Central atrium with living wall',
      'Flexible workspace layouts',
      'Rooftop terrace and amenity spaces',
      'Exposed timber structure',
      'WELL Building Standard Gold',
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

export function getProjectsByCategory(category: Project['category'] | 'All'): Project[] {
  if (category === 'All') return projects;
  return projects.filter(p => p.category === category);
}
