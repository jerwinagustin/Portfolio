'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { projects } from '@/lib/projects'
import { ArrowRight, ExternalLink, Github, Smartphone, Globe } from 'lucide-react'

export default function PortfolioPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto px-4">
            A collection of projects showcasing my skills in full-stack development,
            mobile applications, and modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full flex flex-col cursor-pointer touch-manipulation active:scale-95 transition-transform" onClick={() => router.push(`/portfolio/${project.slug}`)}>
                  {/* Project Image */}
                  <div className="relative w-full h-48 sm:h-56 md:h-64 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-background-secondary to-background border border-border/50 group/image">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 z-10" />
                    <Image
                      src={project.images.thumbnail}
                      alt={project.title}
                      fill
                      className="object-contain p-2 transition-transform duration-700 group-hover/image:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 flex flex-col">
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="primary">
                          {project.category}
                        </Badge>
                        {project.category.includes('Mobile') || project.category.includes('Educational Platform') ? (
                          <div className="flex items-center gap-1 text-xs text-foreground-secondary">
                            <Smartphone className="w-3.5 h-3.5" />
                            <span>Mobile</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-xs text-foreground-secondary">
                            <Globe className="w-3.5 h-3.5" />
                            <span>Web</span>
                          </div>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                      <p className="text-foreground-secondary line-clamp-3">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.frontend.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="default" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.backend && project.technologies.backend.length > 0 && (
                        <Badge variant="accent" className="text-xs">
                          {project.technologies.backend[0]}
                        </Badge>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground-secondary hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {(project.links.live || project.links.demo) && (
                        <a
                          href={project.links.live || project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground-secondary hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      <span className="ml-auto text-sm text-primary font-medium flex items-center group">
                        View Details
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
