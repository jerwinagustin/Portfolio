'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { skills, siteConfig } from '@/lib/constants'
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto px-4">
            Get to know more about my journey, skills, and passion for creating mobile experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-14 lg:mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-primary/50 shadow-xl shadow-primary/20">
              <Image
                src="/images/profile/portfolioProfile.jpg"
                alt="Jerwin Agustin"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">{siteConfig.name}</h2>
              <p className="text-xl text-primary font-medium mb-4">{siteConfig.title}</p>
              <div className="space-y-4 text-foreground-secondary leading-relaxed">
                <p>
                  I&apos;m a passionate self-taught mobile app developer with 2 years of hands-on experience in building 
                  modern mobile applications. My journey in software development began in 2023 with a curiosity 
                  to create mobile solutions, and it has evolved into a dedicated pursuit of excellence in mobile app development.
                </p>
                <p>
                  Throughout my development journey, I&apos;ve successfully completed three major mobile and web projects: 
                  ComSim (January-April 2025, an educational PC building simulator), LogLife (July-November 2025, a comprehensive 
                  productivity mobile app), and Expand (October-November 2025, a full-featured expense tracking web application). 
                  Each project has taught me valuable lessons in different technologies and development approaches.
                </p>
                <p>
                  With expertise in Flutter and React Native mobile development, complemented by web technologies like React, Next.js, 
                  and CodeIgniter, I specialize in creating intuitive, performance-driven mobile applications that solve 
                  real-world problems. I&apos;m constantly learning and adapting to new technologies to deliver 
                  the best mobile-first solutions.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6">
              <Card className="text-center touch-manipulation hover:border-primary/50 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1">3</p>
                <p className="text-xs sm:text-sm text-foreground-secondary">Projects</p>
              </Card>
              <Card className="text-center touch-manipulation hover:border-primary/50 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1">15+</p>
                <p className="text-xs sm:text-sm text-foreground-secondary">Technologies</p>
              </Card>
              <Card className="text-center touch-manipulation hover:border-primary/50 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1">2</p>
                <p className="text-xs sm:text-sm text-foreground-secondary">Years Learning</p>
              </Card>
              <Card className="text-center touch-manipulation hover:border-primary/50 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1">100%</p>
                <p className="text-xs sm:text-sm text-foreground-secondary">Self-Taught</p>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12 sm:mb-14 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            <Code className="inline-block w-6 h-6 sm:w-8 sm:h-8 mr-2 text-primary" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <Card className="hover:border-primary/50 transition-colors">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge key={skill} variant="primary" className="text-xs sm:text-sm touch-manipulation">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="hover:border-accent/50 transition-colors">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-accent">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge key={skill} variant="accent" className="text-xs sm:text-sm touch-manipulation">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="hover:border-primary/50 transition-colors">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary">Database & Storage</h3>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <Badge key={skill} variant="default" className="text-xs sm:text-sm touch-manipulation">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="hover:border-accent/50 transition-colors">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-accent">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="default" className="text-xs sm:text-sm touch-manipulation">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Experience & Education (Placeholders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-primary" />
                Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <p className="font-medium text-lg">Self-Taught Mobile App Developer</p>
                  <p className="text-sm text-primary mb-2">Independent Learning • 2023 - Present</p>
                  <p className="text-sm text-foreground-secondary">
                    Dedicated 2 years to mastering mobile app development through self-study, online resources, 
                    and hands-on project building. Successfully completed three major projects in 2025 spanning 
                    educational mobile platforms, productivity apps, and web applications.
                  </p>
                </div>
                <div className="border-l-2 border-primary/50 pl-4">
                  <p className="font-medium">Key Achievements (2025)</p>
                  <ul className="text-sm text-foreground-secondary mt-2 space-y-1">
                    <li>• Built ComSim - PC building simulator with React Native & Expo (Jan-Apr)</li>
                    <li>• Developed LogLife - Full-featured Flutter mobile app with Firebase (Jul-Nov)</li>
                    <li>• Created Expand - CodeIgniter expense tracking web application (Oct-Nov)</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-accent" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-4">
                  <p className="font-medium text-lg">Bachelor of Science in Information Technology</p>
                  <p className="text-sm text-accent mb-2">Dominican College of Tarlac • August 2023 - 2027 (Expected)</p>
                  <p className="text-sm text-foreground-secondary">
                    Currently pursuing a degree in Information Technology, complementing my self-taught mobile development 
                    skills with formal computer science education. Maintaining strong academic performance while building 
                    real-world projects.
                  </p>
                </div>
                <div className="border-l-2 border-accent/50 pl-4">
                  <p className="font-medium">Academic Honors</p>
                  <ul className="text-sm text-foreground-secondary mt-2 space-y-1">
                    <li>• Dean&apos;s Lister - 2nd Year, 1st Semester (2024)</li>
                    <li>• Dean&apos;s Lister - November 2025</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Certifications (Placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8"
        >
          <Card>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-primary" />
              Learning Milestones & Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-4">
                <p className="font-medium">ComSim - PC Building Simulator</p>
                <p className="text-sm text-foreground-secondary">React Native & Expo • January - April 2025</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="font-medium">LogLife - Productivity Mobile App</p>
                <p className="text-sm text-foreground-secondary">Flutter & Firebase • July - November 2025</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="font-medium">Expand - Expense Tracker Web App</p>
                <p className="text-sm text-foreground-secondary">CodeIgniter & PHP • October - November 2025</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="font-medium">Dean&apos;s Lister - Academic Excellence</p>
                <p className="text-sm text-foreground-secondary">Dominican College of Tarlac • 2024 & 2025</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
