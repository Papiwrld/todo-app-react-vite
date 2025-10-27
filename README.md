# 🚀 Advanced Todo App

A modern, feature-rich Todo application built with React 19, TypeScript, and Vite. Inspired by iOS 18 Notes and Samsung Notes, this app delivers a premium user experience with advanced productivity features.

![Todo App Preview](https://via.placeholder.com/800x400/007AFF/FFFFFF?text=Advanced+Todo+App)

## ✨ Features

### 🎨 **Modern Design System**
- **iOS 18 + Samsung Notes inspired** UI/UX
- **Comprehensive theming** - Light, Dark, and Auto modes
- **Responsive design** - Perfect on all devices (320px - 1440px+)
- **Smooth animations** - Hardware-accelerated transitions
- **Accessibility compliant** - WCAG 2.1 AA standards

### 🔍 **Advanced Search & Filtering**
- **Real-time search** - Instant filtering as you type
- **Multi-criteria filtering** - Category, priority, status, due date
- **Smart empty states** - Context-aware messaging
- **Collapsible filter panel** - Clean, organized interface

### 📋 **Powerful Todo Management**
- **Priority levels** - High (🔴), Medium (🟡), Low (🟢) with color coding
- **Category system** - Work, Personal, Shopping, Health, Finance, Education
- **Due date tracking** - Visual indicators for overdue items
- **Tags support** - Flexible tagging system
- **Notes field** - Additional context for todos
- **Inline editing** - Click to edit todos directly

### ⚡ **Performance Optimized**
- **React 19** - Latest React features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast builds
- **Memoized operations** - Efficient filtering and rendering
- **Hardware acceleration** - Smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: CSS Custom Properties, CSS Grid, Flexbox
- **State Management**: React Hooks (useState, useEffect, useCallback, useMemo)
- **Build Tool**: Vite 7.1.8
- **Package Manager**: npm

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Papiwrld/todo-app-react-vite.git
   cd todo-app-react-vite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Design

The app is optimized for all screen sizes:

- **Mobile**: 320px - 480px (Small phones)
- **Mobile Large**: 481px - 768px (Large phones, small tablets)
- **Tablet**: 769px - 1024px (Tablets)
- **Desktop**: 1025px - 1439px (Laptops, desktops)
- **Large Desktop**: 1440px+ (Large monitors)

## 🎯 Key Features

### Theme System
- **Light Mode** - Clean, bright interface
- **Dark Mode** - Easy on the eyes
- **Auto Mode** - Follows system preference
- **Persistent storage** - Remembers your choice

### Advanced Filtering
- **Search todos** - Real-time text search
- **Filter by category** - Work, Personal, Shopping, etc.
- **Filter by priority** - High, Medium, Low
- **Filter by status** - All, Active, Completed
- **Filter by due date** - Today, Overdue, Upcoming

### Todo Management
- **Add todos** - Quick input with validation
- **Edit inline** - Click to edit directly
- **Priority cycling** - Click priority to cycle through levels
- **Category assignment** - Color-coded categories
- **Delete confirmation** - Prevents accidental deletion
- **Bulk operations** - Clear completed todos

## 🎨 Design System

### Color Palette
- **Primary**: iOS Blue (#007AFF)
- **Success**: iOS Green (#34C759)
- **Warning**: iOS Orange (#FF9500)
- **Error**: iOS Red (#FF3B30)
- **Purple**: iOS Purple (#AF52DE)

### Typography
- **Font Family**: SF Pro Display/Text (Apple's official typeface)
- **Font Sizes**: Responsive scale (16px - 48px)
- **Line Height**: 1.47059 (iOS standard)

### Spacing
- **Desktop**: 6px, 12px, 18px, 24px, 30px, 36px, 48px, 60px, 72px, 96px, 120px, 144px
- **Mobile**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px

## ⚡ Performance

- **Bundle Size**: 25.33 kB CSS (4.92 kB gzipped)
- **JavaScript**: 209.20 kB (65.44 kB gzipped)
- **Build Time**: ~6 seconds
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 🔧 Development

### Project Structure
```
src/
├── components/          # React components
│   ├── AddTodo.tsx     # Todo input component
│   ├── AdvancedTodoItem.tsx # Enhanced todo item
│   ├── SearchAndFilter.tsx  # Search and filter UI
│   ├── Stats.tsx       # Statistics display
│   └── ThemeToggle.tsx # Theme switcher
├── hooks/              # Custom React hooks
│   └── useTodos.ts     # Todo state management
├── types/              # TypeScript type definitions
│   └── Todo.ts         # Todo interfaces
├── utils/              # Utility functions
│   ├── accessibility.ts # A11y helpers
│   ├── storage.ts      # localStorage utilities
│   └── validation.ts   # Input validation
├── constants/          # App constants
│   └── index.ts        # Configuration
├── App.tsx             # Main app component
├── App.css             # Main styles
├── index.css           # Global styles
└── main.tsx            # App entry point
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Advanced Features

### Accessibility
- **Screen reader support** - Comprehensive ARIA labels
- **Keyboard navigation** - Full keyboard accessibility
- **Focus management** - Clear focus indicators
- **Reduced motion** - Respects user preferences
- **Touch targets** - 44px+ minimum touch targets

### Mobile Optimization
- **Touch-first design** - Optimized for touch interactions
- **Viewport optimization** - Prevents unwanted zooming
- **Mobile-specific attributes** - Disabled autocorrect, autocomplete
- **Responsive layouts** - Adaptive for all screen sizes

### Performance Optimizations
- **React.memo** - Prevents unnecessary re-renders
- **useCallback** - Optimized event handlers
- **useMemo** - Memoized expensive calculations
- **Hardware acceleration** - CSS transforms for animations
- **Memory management** - Proper cleanup of timers

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect Vercel to your repository
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag `dist` folder to Netlify
3. Configure build settings

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Set source to `gh-pages` branch
3. Deploy automatically

## 📊 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **iOS 18 Design System** - Apple's design principles
- **Samsung Notes** - UI/UX inspiration
- **React Team** - Amazing framework
- **Vite Team** - Lightning-fast build tool
- **TypeScript Team** - Type safety

## 📞 Contact

- **GitHub**: [@Papiwrld](https://github.com/Papiwrld)
- **Project Link**: [https://github.com/Papiwrld/todo-app-react-vite](https://github.com/Papiwrld/todo-app-react-vite)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ and modern web technologies.