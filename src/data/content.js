// All visible copy and links are kept here so components stay focused on rendering.

export const EMAIL = 'notkayeee8@gmail.com'

export const externalLinks = {
  github: 'https://github.com/notkayeee8',
  facebook: 'https://www.facebook.com/noturkayeeee',
  instagram: 'https://www.instagram.com/urcutiee_kayeee?igsi=ZnZqZXRpaTU0Zng=',
  productApi: 'https://github.com/notkayeee8/APP_DEV_KAYE',
  itemManager: 'https://github.com/notkayeee8/api_demo',
}

export const projectDropdown = [
  { label: 'Product API — PHP REST', href: externalLinks.productApi },
  { label: 'Item Manager — api_demo', href: externalLinks.itemManager },
  { label: 'GitHub — notkayeee8', href: externalLinks.github },
]

export const connectDropdown = [
  { label: 'GitHub', href: externalLinks.github },
  { label: 'Facebook', href: externalLinks.facebook },
  { label: 'Instagram', href: externalLinks.instagram },
  { label: 'Email', href: `mailto:${EMAIL}` },
]

const galleryCaptions = [
  'In the spotlight',
  'Rehearsal days',
  'Grace in motion',
  'With the TCGC crew',
  'On stage with TCGC',
  'Moments before the show',
  'Expression & emotion',
  'Perfecting the form',
  'After the performance',
  'Crew bonds',
  'Curtain call',
]

export const galleryImages = galleryCaptions.map((caption, index) => ({
  src: `/gandaw-${index + 1}.jpg`,
  alt: `Gandaw dance photo ${index + 1}`,
  caption,
  delay: index % 3,
}))

export const projects = [
  {
    number: '01',
    tag: 'REST API • PHP',
    title: 'Product API — Simple Student System',
    description:
      'A simple REST API for managing products. Supports GET, POST, PUT and DELETE to create, read, update and delete items. Data is stored in a JSON file — no database needed. Built as a student exercise in PHP.',
    tech: ['PHP', 'JSON', 'REST API', 'CRUD'],
    href: externalLinks.productApi,
    delay: 0,
  },
  {
    number: '02',
    tag: 'REST API • PHP + MySQL',
    title: 'Item Manager API — api_demo',
    description:
      'Simple student CRUD system with PHP and MySQL. Frontend lets you add, edit and delete items — backend uses MVC (controllers, models) and a MySQL table `items`.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CRUD'],
    href: externalLinks.itemManager,
    delay: 1,
  },
  {
    number: '03',
    tag: 'Coming Soon',
    title: 'More projects coming soon',
    description: 'Working on new student projects — stay tuned for updates.',
    tech: ['Soon'],
    href: null,
    delay: 2,
    comingSoon: true,
  },
]

export const stats = [
  { value: '3+', label: 'Projects Built' },
  { value: 'TCGC', label: 'Gandaw Dancer' },
  { value: 'BSCS', label: 'Computer Science' },
]
