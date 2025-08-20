# Mizu Izakaya Restaurant Website

A modern, interactive restaurant website showcasing Denver's premier Izakaya experience with advanced animations, dynamic content management, and seamless user experience.

## 🚀 Live Demo

[Visit Mizu Izakaya](your-deployment-url-here)

## 📋 Overview

This restaurant website delivers an immersive digital experience for Mizu Izakaya, featuring dynamic image galleries, interactive menu systems, and reservation integration. Built with Next.js 14 and enhanced with Framer Motion animations, the site captures the authentic atmosphere of Japanese Izakaya dining.

## ✨ Key Features

- **Interactive Image Gallery**: Dynamic layout grid with modal overlays and keyboard navigation
- **Animated Menu System**: Tabbed interface with smooth transitions for 8 menu categories
- **Real-time Reservations**: Integrated OpenTable widget for seamless booking
- **Custom Animation Components**: Aurora backgrounds, tracing beams, and hero highlights
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Content Management**: File system-based gallery with automatic image processing

## 🛠️ Tech Stack

**Frontend Framework**
- Next.js 14 with App Router
- React 18 with TypeScript
- Tailwind CSS for styling

**Animation & Interactions**
- Framer Motion for complex animations
- Custom UI components with motion variants
- Smooth scroll and parallax effects

**Content Management**
- File system-based image gallery
- Dynamic menu rendering
- Social media integration

**Third-party Integrations**
- OpenTable reservation system
- External image optimization
- Social platform connectivity

## 🏗️ Project Architecture

```
app/
├── gallery/         # Image gallery with dynamic layout
├── menu/           # Interactive tabbed menu system
├── reservations/   # OpenTable integration page
├── layout.tsx      # Global layout with navigation
└── page.tsx        # Homepage with hero sections

components/
├── ui/             # Reusable animated components
│   ├── aurora-background.tsx
│   ├── images-slider.tsx
│   ├── layout-grid.tsx
│   ├── tracing-beam.tsx
│   └── tabs.tsx
├── About.tsx       # Timeline-based about section
├── Hero.tsx        # Animated hero with highlights
├── NavBar.tsx      # Floating navigation menu
└── GallerySlideshow.tsx
```

## 🎨 Custom UI Components

### Aurora Background
Dynamic gradient animations with customizable radial masking for immersive backgrounds.

### Interactive Layout Grid
Responsive masonry-style gallery with modal expansion, keyboard controls, and smooth transitions.

### Tracing Beam
SVG-based scroll-triggered animations with gradient effects for timeline presentations.

### Advanced Tabs System
3D perspective tab switching with content stacking and smooth transitions.

## 🚀 Quick Start

1. **Clone and install**
   ```bash
   git clone [repository-url]
   cd mizu-izakaya
   npm install
   ```

2. **Development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📱 Feature Breakdown

### Gallery System
- **Dynamic Image Loading**: Automatic file system scanning for gallery images
- **Responsive Grid**: CSS Grid with dynamic column spanning
- **Modal Interactions**: Full-screen image viewing with keyboard navigation
- **Performance Optimization**: Lazy loading and blur-to-sharp transitions

### Menu Interface
- **Multi-category Navigation**: 8 distinct menu sections with smooth transitions
- **Stacked Card Design**: 3D perspective effects with hover interactions
- **Image Integration**: High-quality menu photography with optimized loading

### Animation Framework
- **Motion Variants**: Reusable animation configurations across components
- **Scroll-triggered Effects**: Intersection Observer-based animations
- **Performance Optimized**: GPU-accelerated transforms and will-change properties

### Integration Features
- **OpenTable Widget**: Seamless reservation system with dynamic script loading
- **Social Media Links**: Direct integration with Facebook, Instagram, and Yelp
- **Contact Information**: Embedded location and hours data

## 🎯 Technical Highlights

### Advanced Animation Patterns
```typescript
// Example: Complex scroll-triggered SVG animation
const y1 = useSpring(
  useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
  { stiffness: 500, damping: 90 }
);
```

### Dynamic Content Loading
```typescript
// File system-based gallery generation
const imageFiles = readdirSync("public/gallery");
const galleryImages = imageFiles.map((file, index) => ({
  id: index + 1,
  className: randomArray.includes(index) ? "col-span-2" : "col-span-1",
  thumbnail: `/gallery/${file}`,
}));
```

### Custom Hook Integration
- useScroll for parallax effects
- useMotionValue for mouse tracking
- useSpring for smooth animations

## 🔧 Development Scripts

```bash
npm run dev      # Development server with hot reload
npm run build    # Production build with optimization
npm run start    # Production server
npm run lint     # ESLint code analysis
```

## 📊 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Dynamic imports for component chunks
- **Font Optimization**: Google Fonts with display swap
- **Bundle Analysis**: Webpack bundle optimization

## 🌐 Production Considerations

- **SEO Optimization**: Meta tags and structured data
- **Accessibility**: Keyboard navigation and screen reader support
- **Performance Monitoring**: Core Web Vitals optimization
- **Error Handling**: Graceful fallbacks for external integrations

---

*Built with Next.js 14, TypeScript, and Framer Motion | Optimized for performance and accessibility*
