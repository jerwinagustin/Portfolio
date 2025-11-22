'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Zap,
  Layers,
  Cloud,
  Shield,
  Users,
  TrendingUp,
  Palette,
  Terminal,
} from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications using Flutter and React Native. Building intuitive, high-performance apps that users love.',
    technologies: ['Flutter', 'React Native', 'Expo', 'Firebase'],
    color: 'accent' as const,
    featured: true,
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern web applications built with React, Next.js, and TypeScript. Responsive, fast, and user-focused.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    color: 'primary' as const,
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Scalable backend solutions with Node.js and PHP. RESTful APIs, database design, and Firebase integration.',
    technologies: ['Node.js', 'PHP', 'MySQL', 'Firebase'],
    color: 'primary' as const,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design focusing on intuitive interfaces and seamless mobile experiences for Android platforms.',
    technologies: ['Figma', 'Material Design', 'Android Guidelines'],
    color: 'accent' as const,
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Firebase integration for authentication, real-time databases, and cloud functions. Reliable backend solutions.',
    technologies: ['Firebase', 'Cloud Firestore', 'Firebase Auth'],
    color: 'primary' as const,
  },
  {
    icon: Terminal,
    title: 'API Development',
    description: 'RESTful API design and implementation. Secure, documented, and well-structured endpoints for mobile apps.',
    technologies: ['REST API', 'JWT', 'API Integration'],
    color: 'accent' as const,
  },
]

const features = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising on quality',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Industry-standard security practices and robust solutions',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Regular communication and feedback throughout the project',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Built to grow with your business needs',
  },
  {
    icon: Layers,
    title: 'Clean Code',
    description: 'Maintainable, well-documented, and industry-standard code',
  },
  {
    icon: Code,
    title: 'Modern Tech Stack',
    description: 'Using the latest technologies and best practices',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Specializing in mobile app development with comprehensive full-stack capabilities.
            From concept to deployment, I deliver high-quality mobile-first solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            const isFeatured = service.featured
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={isFeatured ? 'md:col-span-2 lg:col-span-3' : ''}
              >
                <Card hover className={`h-full ${isFeatured ? 'border-accent/50 bg-gradient-to-br from-accent/5 to-transparent' : ''}`}>
                  <div className={`flex ${isFeatured ? 'flex-col md:flex-row md:items-center gap-6' : 'flex-col'}`}>
                    <div className={isFeatured ? 'flex-shrink-0' : 'mb-4'}>
                      <div
                        className={`${isFeatured ? 'w-20 h-20' : 'w-14 h-14'} rounded-lg flex items-center justify-center ${
                          service.color === 'primary'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-accent/10 text-accent'
                        }`}
                      >
                        <Icon className={isFeatured ? 'w-10 h-10' : 'w-7 h-7'} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold`}>
                          {service.title}
                        </h3>
                        {isFeatured && (
                          <Badge variant="accent" className="text-xs">SPECIALTY</Badge>
                        )}
                      </div>
                      <p className={`text-foreground-secondary mb-4 ${isFeatured ? 'text-lg' : ''}`}>
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <Badge key={tech} variant={service.color} className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Work With <span className="gradient-text">Me?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{feature.title}</h3>
                      <p className="text-sm text-foreground-secondary">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Process (Placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="gradient-text">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', description: 'Strategy and technical architecture' },
              { step: '03', title: 'Development', description: 'Building with best practices' },
              { step: '04', title: 'Launch', description: 'Testing, deployment, and support' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-3">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground-secondary">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
