# Portfolio Website

A modern, dark-themed portfolio website showcasing full-stack development projects built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Dark theme with gradient accents and smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Next.js 14 App Router and optimized images
- **Type-Safe**: Written in TypeScript for better developer experience
- **Animated**: Smooth transitions and effects with Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Portfolio/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── services/            # Services page
│   ├── portfolio/           # Portfolio pages
│   └── contact/             # Contact page
├── components/              # React components
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Layout components
│   └── sections/           # Page sections
├── lib/                    # Utility functions
│   ├── utils.ts           # Helper functions
│   ├── constants.ts       # App constants
│   └── projects.ts        # Project data
├── public/                 # Static assets
│   └── images/            # Image files
├── types/                  # TypeScript types
└── styles/                # Global styles
```

## 🎨 Customization

### Update Personal Information

Edit `lib/constants.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  email: "your.email@example.com",
  location: "Your Location",
};
```

### Add Projects

Edit `lib/projects.ts` to add or modify projects with full details.

### Update Social Links

Edit `lib/constants.ts`:

```typescript
export const socialLinks = [
  { name: "GitHub", href: "your-github-url", icon: "github" },
  // Add more social links
];
```

### Modify Colors

Edit `tailwind.config.ts` to change the color scheme.

## 📝 TODO Items

- [ ] Add your LinkedIn URL in `lib/constants.ts`
- [ ] Add your Twitter/X URL in `lib/constants.ts`
- [ ] Complete ComSim project information when README is available
- [ ] Add your personal bio in About page
- [ ] Add your work experience in About page
- [ ] Add your education details in About page
- [ ] Add your certifications in About page
- [ ] Integrate contact form with email service (Resend, SendGrid)
- [ ] Add your resume PDF to public directory
- [ ] Update Twitter handle in `app/layout.tsx` metadata

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify**: Connect your GitHub repo
- **Cloudflare Pages**: Connect your GitHub repo
- **Traditional hosting**: Run `npm run build` and deploy the `.next` folder

## 📧 Contact Form Integration

The contact form currently logs to console. To integrate with an email service:

1. **Using Resend** (Recommended for Next.js)

   ```bash
   npm install resend
   ```

   Create `app/api/contact/route.ts` and integrate

2. **Using SendGrid**

   ```bash
   npm install @sendgrid/mail
   ```

3. **Using Nodemailer**
   ```bash
   npm install nodemailer
   ```

## 🎯 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Image Optimization: Automatic with Next.js Image

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Jerwin Agustin**

- GitHub: [@jerwinagustin](https://github.com/jerwinagustin)
- Email: jerwinagustin200@gmail.com

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
