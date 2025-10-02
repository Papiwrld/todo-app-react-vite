# 📝 React Todo App

A modern, responsive Todo List application built with React, TypeScript, Vite, and Tailwind CSS. Features a clean, intuitive interface with dark mode support, smooth animations, and persistent data storage.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.5-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-cyan)

## ✨ Features

- ✅ **Add, Edit & Delete Tasks** - Full CRUD operations with inline editing
- ✅ **Task Completion** - Mark tasks as completed with checkboxes
- ✅ **Smart Filtering** - Filter by All, Active, or Completed tasks
- ✅ **Task Statistics** - Real-time count of total, completed, and active tasks
- ✅ **Dark Mode Toggle** - Switch between light and dark themes
- ✅ **Smooth Animations** - Beautiful transitions powered by Framer Motion
- ✅ **Local Storage** - Tasks persist between browser sessions
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ✅ **TypeScript Support** - Full type safety and IntelliSense

## 🚀 Live Demo

**[🔗 View Live Demo](https://your-demo-link.vercel.app)** *(Coming soon after deployment)*

## 🛠️ Tech Stack

- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **ESLint** - Code linting and formatting

## 📦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/react-todo-app.git
cd react-todo-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── AddTask.tsx         # Task input form
│   ├── TaskItem.tsx        # Individual task component
│   ├── TaskList.tsx        # Task list container
│   ├── FilterButtons.tsx   # Filter controls
│   ├── Stats.tsx           # Statistics display
│   └── DarkModeToggle.tsx  # Dark mode switch
├── hooks/                  # Custom React hooks
│   ├── useLocalStorage.ts  # Local storage persistence
│   └── useDarkMode.ts      # Dark mode management
├── types/                  # TypeScript definitions
│   └── Task.ts            # Task interface
├── App.tsx                 # Main application
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## 🎯 Key Features Explained

### Task Management
- **Inline Editing**: Double-click any task to edit it directly
- **Smart Persistence**: All tasks automatically save to localStorage
- **Real-time Stats**: Live count of total, completed, and active tasks

### User Experience
- **Dark Mode**: Toggle between light and dark themes with preference saving
- **Smooth Animations**: Beautiful transitions for adding, removing, and editing tasks
- **Responsive Design**: Optimized for all screen sizes
- **Keyboard Support**: Press Enter to save, Escape to cancel editing

### Filtering System
- **All Tasks**: View every task regardless of status
- **Active Tasks**: Show only incomplete tasks
- **Completed Tasks**: Display only finished tasks

## 🎨 Design Features

- **Modern UI**: Clean, minimal design with subtle shadows and hover effects
- **Color-coded Stats**: Visual indicators for different task categories
- **Smooth Transitions**: Framer Motion animations for enhanced user experience
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 Learning Note

> This project was built while following a prompt engineering course to practice React + Vite fundamentals and AI-assisted development. It demonstrates modern React patterns, TypeScript integration, and responsive design principles.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@Papiwrld](https://github.com/Papiwrld)
- LinkedIn: [My LinkedIn](https://www.linkedin.com/in/eugene-awagah-86068a341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app)

---

⭐ **Star this repository if you found it helpful!**

