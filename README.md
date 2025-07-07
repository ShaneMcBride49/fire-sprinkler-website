# D Fire Pro - Fire Protection Services Website

A modern, responsive marketing website for a fire sprinkler installation company specializing in three-, four-, and five-story hotels. Built with Next.js 13, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Responsive Design**: Mobile-first approach with beautiful layouts for all screen sizes
- **Dark/Light Mode**: Toggle between themes with persistent user preference
- **SEO Optimized**: Comprehensive metadata, Open Graph tags, and structured content
- **Performance**: Optimized images, lazy loading, and efficient code splitting
- **Accessibility**: Semantic HTML, proper ARIA labels, and keyboard navigation
- **Modern UI**: Clean, professional design using shadcn/ui components

## Sections

1. **Hero Section**: Compelling headline with call-to-action buttons
2. **Services Grid**: Six comprehensive service offerings with icons
3. **Resources Callout**: Background image section highlighting capabilities
4. **Tenant Finish-Out Services**: Specialized construction services
5. **Why Contractors Choose Us**: Three key value propositions
6. **Contact CTA**: Final call-to-action for quotes and contact

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Radix UI + Tailwind)
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Images**: Next.js Image component with optimization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fire-sprinkler-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run typecheck` - Run TypeScript type checking
- `npm run format:write` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page with all sections
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── site-header.tsx   # Navigation header
│   ├── site-footer.tsx   # Footer component
│   └── theme-toggle.tsx  # Dark/light mode toggle
├── config/               # Configuration files
│   └── site.ts          # Site metadata and navigation
├── lib/                  # Utility functions
├── styles/               # Global styles
└── public/               # Static assets
    └── company_logo.svg  # Company logo
```

## Customization

### Site Configuration

Edit `config/site.ts` to update:
- Company name and description
- Navigation links
- Contact information
- Social media links

### Styling

The site uses Tailwind CSS with a custom design system. Key color schemes:
- Primary: Slate grays for professional appearance
- Accent: Red (#dc2626) for fire protection theme
- Interactive: Blue and green for CTAs and features

### Images

Replace placeholder Unsplash images with your own:
1. Update image URLs in `app/page.tsx`
2. Ensure images are optimized for web (WebP format recommended)
3. Add proper alt text for accessibility

### Company Logo

The company logo is located at `public/company_logo.svg` and is used in:
- Site header navigation
- Footer branding
- All company references

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms

Build the project:
```bash
npm run build
```

The built files will be in the `.next` directory.

## SEO Features

- Comprehensive metadata for search engines
- Open Graph tags for social media sharing
- Structured content with semantic HTML
- Optimized images with proper alt text
- Fast loading times with Next.js optimizations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Support

For questions or support, contact the development team or refer to the Next.js and shadcn/ui documentation.
