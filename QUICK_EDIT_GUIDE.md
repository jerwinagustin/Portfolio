# Quick Edit Guide

This guide helps you quickly update the most common content in your portfolio.

## 🎯 Most Common Edits

### 1. Update Your Personal Info (5 minutes)

**File:** `lib/constants.ts`

```typescript
export const siteConfig = {
  name: "Your Name", // ← Change this
  title: "Your Title", // ← Change this
  description: "Your description...", // ← Change this
  email: "your.email@example.com", // ← Change this
  location: "Your Location", // ← Change this
};

export const socialLinks = [
  { name: "LinkedIn", href: "YOUR_LINKEDIN_URL" }, // ← Add URL
  { name: "Twitter", href: "YOUR_TWITTER_URL" }, // ← Add URL
  // etc...
];
```

---

### 2. Update Your Bio (10 minutes)

**File:** `app/about/page.tsx`

Search for: `{/* TODO: Add your personal bio here */}`

Replace the placeholder paragraphs with your actual bio.

---

### 3. Add Work Experience (15 minutes)

**File:** `app/about/page.tsx`

Search for: `{/* TODO: Add your work experience */}`

Replace with:

```typescript
<div className="border-l-2 border-primary pl-4">
  <p className="font-medium text-lg">Your Job Title</p>
  <p className="text-sm text-primary mb-2">Company • Start - End</p>
  <p className="text-sm text-foreground-secondary">
    Your job description and achievements
  </p>
</div>
```

---

### 4. Complete ComSim Project (20 minutes)

**File:** `lib/projects.ts`

Find the ComSim project object and replace `[TODO: ...]` entries with actual content:

```typescript
{
  id: '3',
  slug: 'comsim',
  title: 'ComSim',
  shortDescription: 'Your actual description',
  fullDescription: 'Detailed description...',
  technologies: {
    frontend: ['Actual', 'Technologies'],
    backend: ['Actual', 'Backend'],
  },
  features: [
    'Actual feature 1',
    'Actual feature 2',
  ],
  // etc...
}
```

---

### 5. Setup Contact Form Email (30 minutes)

**Option A: Using Resend (Recommended)**

1. Install: `npm install resend`
2. Get API key from [resend.com](https://resend.com)
3. Create `.env.local`:
   ```
   RESEND_API_KEY=your_key_here
   ```
4. Create `app/api/contact/route.ts`:

   ```typescript
   import { Resend } from "resend";
   import { NextResponse } from "next/server";

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(request: Request) {
     const { name, email, subject, message } = await request.json();

     try {
       await resend.emails.send({
         from: "onboarding@resend.dev",
         to: "your.email@example.com",
         subject: `Portfolio Contact: ${subject}`,
         html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
       });
       return NextResponse.json({ success: true });
     } catch (error) {
       return NextResponse.json({ error: "Failed to send" }, { status: 500 });
     }
   }
   ```

5. Update `app/contact/page.tsx` onSubmit:
   ```typescript
   const response = await fetch("/api/contact", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(data),
   });
   ```

---

### 6. Add a New Project (20 minutes)

**File:** `lib/projects.ts`

Add to the `projects` array:

```typescript
{
  id: '4',                          // Increment ID
  slug: 'project-name',             // URL-friendly name
  title: 'Project Name',
  shortDescription: 'Brief description for cards',
  fullDescription: 'Detailed description...',
  category: 'Type',                 // e.g., 'Web App'
  featured: true,                   // Show on homepage?
  images: {
    thumbnail: '/images/projects/name/thumb.jpg',
    screenshots: [
      '/images/projects/name/screen1.jpg',
      '/images/projects/name/screen2.jpg',
    ],
  },
  technologies: {
    frontend: ['React', 'TypeScript'],
    backend: ['Node.js'],
    database: ['MongoDB'],
  },
  features: [
    'Feature 1',
    'Feature 2',
  ],
  links: {
    github: 'https://github.com/...',
    live: 'https://...',           // Optional
  },
  date: '2024',
  role: 'Full-Stack Developer',
}
```

Don't forget to add images to `public/images/projects/name/`

---

### 7. Change Color Scheme (10 minutes)

**File:** `tailwind.config.ts`

```typescript
colors: {
  primary: {
    DEFAULT: '#6366F1',   // ← Change primary color
    hover: '#818CF8',
  },
  accent: {
    DEFAULT: '#8B5CF6',   // ← Change accent color
    hover: '#A78BFA',
  },
}
```

Popular alternatives:

- Blue: `#3B82F6`
- Green: `#10B981`
- Purple: `#8B5CF6`
- Pink: `#EC4899`
- Orange: `#F59E0B`

---

### 8. Add Skills (5 minutes)

**File:** `lib/constants.ts`

```typescript
export const skills = {
  frontend: ["React", "Vue", "Angular"], // ← Add/remove
  backend: ["Node.js", "Python", "Go"], // ← Add/remove
  database: ["PostgreSQL", "Redis"], // ← Add/remove
  tools: ["Docker", "Kubernetes", "AWS"], // ← Add/remove
};
```

---

## 📍 File Quick Reference

| What to Edit                | File Location           |
| --------------------------- | ----------------------- |
| Personal info, social links | `lib/constants.ts`      |
| Projects data               | `lib/projects.ts`       |
| Bio, experience, education  | `app/about/page.tsx`    |
| Services descriptions       | `app/services/page.tsx` |
| Contact form logic          | `app/contact/page.tsx`  |
| Colors, styling             | `tailwind.config.ts`    |
| Navigation items            | `lib/constants.ts`      |
| SEO metadata                | `app/layout.tsx`        |

---

## 🎨 Image Guidelines

### Recommended Sizes

- **Profile photo**: 800x800px (1:1 ratio)
- **Project thumbnails**: 1200x600px (2:1 ratio)
- **Project screenshots**: 1920x1080px (16:9 ratio)

### Adding Images

1. Place in `public/images/projects/[project-name]/`
2. Use lowercase filenames
3. Supported formats: JPG, PNG, WEBP
4. Next.js will auto-optimize

---

## 🚀 Deployment Checklist

Before deploying:

- [ ] Update all TODO comments
- [ ] Add real content to About page
- [ ] Test contact form
- [ ] Add your social media links
- [ ] Review all project information
- [ ] Test on mobile device
- [ ] Check all links work
- [ ] Add resume PDF (if applicable)

**Deploy to Vercel:**

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Click Deploy
4. Done! 🎉

---

## 💡 Pro Tips

1. **Use descriptive commit messages** when pushing to GitHub
2. **Test locally** before deploying: `npm run build`
3. **Keep images optimized** - use WebP format when possible
4. **Update regularly** - Add new projects as you complete them
5. **Monitor analytics** - See what pages visitors view most

---

## 🆘 Common Issues

**Issue: Images not showing**

- Check file path matches exactly (case-sensitive)
- Ensure images are in `public/images/`
- Restart dev server after adding images

**Issue: Contact form not sending**

- Check API endpoint is created
- Verify environment variables are set
- Check browser console for errors

**Issue: Build fails**

- Run `npm run lint` to find errors
- Check all imports are correct
- Ensure all images referenced exist

---

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Hook Form Docs](https://react-hook-form.com/)

---

**Remember:** Start with small changes and test frequently!
