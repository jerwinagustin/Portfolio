import { NavItem, SocialLink } from '@/types'

export const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/jerwinagustin',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jerwin-agustin-925163371/',
    icon: 'linkedin',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/09jjjjj',
    icon: 'facebook',
  },
  {
    name: 'Email',
    href: 'mailto:jerwinagustin200@gmail.com',
    icon: 'mail',
  },
]

export const skills = {
  frontend: [
    'React Native',
    'Flutter',
    'Dart',
    'Kotlin',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'Bootstrap 5',
    'AJAX',
  ],
  backend: [
    'Node.js',
    'Python',
    'PHP 8.1+',
    'CodeIgniter 4',
    'Expo',
    'Firebase',
    'REST API',
  ],
  database: [
    'MySQL',
    'Firebase Firestore',
    'Firebase Realtime Database',
  ],
  tools: [
    'Git',
    'GitHub',
    'VS Code',
    'Expo CLI',
    'Composer',
    'Android Studio',
    'Jest',
    'EAS Build',
  ],
}

export const siteConfig = {
  name: 'Jerwin Agustin',
  title: 'Self-Taught Mobile App Developer',
  description: 'Crafting immersive mobile experiences with clean code and cutting-edge technology. 2 years of self-directed learning, specializing in mobile application development.',
  email: 'jerwinagustin200@gmail.com',
  location: 'Capas, Tarlac, Philippines',
}
