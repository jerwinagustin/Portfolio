'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/constants'
import Badge from '@/components/ui/Badge'

export default function TechStack() {
  const categories = [
    { title: 'Frontend', items: skills.frontend, color: 'primary' as const },
    { title: 'Backend', items: skills.backend, color: 'accent' as const },
    { title: 'Database', items: skills.database, color: 'primary' as const },
    { title: 'Tools', items: skills.tools, color: 'accent' as const },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 lg:gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="relative bg-background-secondary/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-500 group overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary group-hover:scale-105 transition-transform duration-300 inline-block">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge variant={category.color} className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 touch-manipulation">
                        {item}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
