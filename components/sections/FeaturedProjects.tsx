'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { featuredProjects } from '@/lib/projects'
import { ArrowRight, ExternalLink, Github, Smartphone, Globe } from 'lucide-react'

export default function FeaturedProjects() {
  const router = useRouter()
  return (
    <section className="py-20 bg-background-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Explore my latest work showcasing full-stack development, mobile apps, and web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full flex flex-col cursor-pointer" onClick={() => router.push(`/portfolio/${project.slug}`)}>
                  {/* Project Image */}
                  <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-background-secondary to-background border border-border/50 group/image">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 z-10" />
                    <Image
                      src={project.images.thumbnail}
                      alt={project.title}
                      fill
                      className="object-contain p-2 transition-transform duration-700 group-hover/image:scale-110"
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
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-foreground-secondary line-clamp-2">
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
                      {project.links.live && (
                        <a
                          href={project.links.live}
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/portfolio">
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
