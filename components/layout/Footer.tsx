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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-foreground-secondary text-sm mb-4">
              {siteConfig.description}
            </p>
            <p className="text-foreground-secondary text-sm">
              📍 {siteConfig.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
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
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-background-secondary border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
            <div className="mt-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-foreground-secondary hover:text-primary transition-all duration-300 text-sm inline-flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-foreground-secondary text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-foreground-secondary text-xs mt-2">
            Built with <span className="text-primary">Next.js</span>, <span className="text-primary">TypeScript</span>, and <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
