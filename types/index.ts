export interface Project {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  category: string
  featured: boolean
  images: {
    thumbnail: string
    screenshots: string[]
  }
  technologies: {
    frontend: string[]
    backend?: string[]
    database?: string[]
    tools?: string[]
  }
  features: string[]
  challenges?: string[]
  solutions?: string[]
  links: {
    github?: string
    live?: string
    demo?: string
  }
  date: string
  role?: string
  metrics?: {
    label: string
    value: string
  }[]
}

export interface NavItem {
  name: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}
