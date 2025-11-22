import Link from 'next/link'
import { socialLinks, siteConfig } from '@/lib/constants'
import { Github, Linkedin, Facebook, Mail } from 'lucide-react'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  mail: Mail,
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-foreground-secondary text-sm mb-3 sm:mb-4 leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="text-foreground-secondary text-sm">
              📍 {siteConfig.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-foreground-secondary hover:text-primary transition-colors text-sm"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-foreground-secondary hover:text-primary transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-foreground-secondary hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground-secondary hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect</h4>
            <div className="flex justify-center sm:justify-start flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-background-secondary border border-border hover:border-primary hover:bg-primary/10 active:scale-95 transition-all duration-300 hover:scale-110 hover:-translate-y-1 touch-manipulation"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                )
              })}
            </div>
            <div className="mt-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-foreground-secondary hover:text-primary transition-all duration-300 text-sm inline-flex items-center justify-center sm:justify-start gap-2 group touch-manipulation"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-foreground-secondary text-sm mb-2">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-foreground-secondary text-xs">
            Built with <span className="text-primary">Next.js</span>, <span className="text-primary">TypeScript</span>, and <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
