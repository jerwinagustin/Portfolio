'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/lib/projects'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { ArrowLeft, ExternalLink, Github, Calendar, User, TrendingUp, X } from 'lucide-react'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link href="/portfolio">
            <Button variant="ghost" size="sm" className="group">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Badge variant="primary" className="mb-4">
            {project.category}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-foreground-secondary max-w-3xl">
            {project.shortDescription}
          </p>
        </motion.div>

        {/* Project links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="group">
                <Github className="mr-2 w-5 h-5" />
                View on GitHub
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer">
              <Button className="group">
                <ExternalLink className="mr-2 w-5 h-5" />
                View Live Demo
              </Button>
            </a>
          )}
          {project.links.demo && !project.links.live && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
              <Button className="group">
                <ExternalLink className="mr-2 w-5 h-5" />
                Download Demo
              </Button>
            </a>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Screenshots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Project Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="relative w-full h-96 rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 bg-gradient-to-br from-background-secondary to-background group cursor-pointer"
                    onClick={() => setSelectedImage(screenshot)}
                  >
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <ExternalLink className="w-8 h-8 text-primary mb-2 mx-auto" />
                        <p className="text-sm text-foreground">Click to view full size</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">About This Project</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-foreground-secondary text-lg leading-relaxed whitespace-pre-line">
                  {project.fullDescription}
                </p>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </span>
                    <span className="text-foreground-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Challenges & Solutions */}
            {project.challenges && project.challenges.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <Card>
                  <h3 className="text-xl font-bold mb-4 text-accent">Challenges</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-sm text-foreground-secondary">
                        • {challenge}
                      </li>
                    ))}
                  </ul>
                </Card>
                {project.solutions && project.solutions.length > 0 && (
                  <Card>
                    <h3 className="text-xl font-bold mb-4 text-primary">Solutions</h3>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="text-sm text-foreground-secondary">
                          • {solution}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <h3 className="text-xl font-bold mb-4">Project Info</h3>
                <div className="space-y-4">
                  {project.date && (
                    <div className="flex items-center text-sm">
                      <Calendar className="w-5 h-5 mr-3 text-primary" />
                      <div>
                        <p className="text-foreground-secondary text-xs">Date</p>
                        <p className="font-medium">{project.date}</p>
                      </div>
                    </div>
                  )}
                  {project.role && (
                    <div className="flex items-center text-sm">
                      <User className="w-5 h-5 mr-3 text-primary" />
                      <div>
                        <p className="text-foreground-secondary text-xs">Role</p>
                        <p className="font-medium">{project.role}</p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card>
                  <h3 className="text-xl font-bold mb-4">Metrics</h3>
                  <div className="space-y-4">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <TrendingUp className="w-5 h-5 mr-3 text-accent" />
                        <div>
                          <p className="text-foreground-secondary text-xs">{metric.label}</p>
                          <p className="font-medium">{metric.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <h3 className="text-xl font-bold mb-4">Technologies</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-foreground-secondary mb-2">Frontend</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.frontend.map((tech) => (
                        <Badge key={tech} variant="primary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {project.technologies.backend && project.technologies.backend.length > 0 && (
                    <div>
                      <p className="text-sm text-foreground-secondary mb-2">Backend</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.backend.map((tech) => (
                          <Badge key={tech} variant="accent" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.technologies.database && project.technologies.database.length > 0 && (
                    <div>
                      <p className="text-sm text-foreground-secondary mb-2">Database</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.database.map((tech) => (
                          <Badge key={tech} variant="default" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.technologies.tools && project.technologies.tools.length > 0 && (
                    <div>
                      <p className="text-sm text-foreground-secondary mb-2">Tools</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.tools.map((tech) => (
                          <Badge key={tech} variant="default" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Image Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-background-secondary border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full h-full max-w-6xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Full size screenshot"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
