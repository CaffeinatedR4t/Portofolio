# 💼 Portfolio Website - Jeremy Joseph Pohar

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.180.0-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

> **A modern, full-stack interactive portfolio showcasing cybersecurity research, AI development, and software engineering projects with smooth 3D animations and glassmorphism design.**

[🌐 Live Demo](https://your-portfolio-url.vercel.app) • [📧 Contact Me](mailto:jeremy.yosep@gmail.com)

---

## 🎯 **About**

Personal portfolio website for **Jeremy Joseph Pohar** - a Computer Science student at Universitas Multimedia Nusantara specializing in **Cybersecurity** and **Artificial Intelligence**.

### **Motto:**
> *"ANALYZE. DEVELOP. DELIVER."*

---

## ✨ **Key Features**

### 🎨 **Visual Experience**
-  **Animated Preloader** - Smooth loading experience with custom animations
-  **Custom Interactive Cursor** - Retro-style cursor with particle trail effects
-  **3D Model Integration** - Three.js powered interactive 3D visuals
-  **Matrix-Style Hover Effects** - Cyberpunk aesthetic hover animations
-  **Lenis Smooth Scrolling** - Buttery smooth scroll experience
-  **Glassmorphism Design** - Modern frosted glass UI elements
-  **Custom Color Block Sections** - Unique sectioned layout design

### ⚡ **Interactive Features**
-  **Live WIB Time Display** - Real-time Jakarta timezone with coordinates
-  **Responsive Mobile Navigation** - Hamburger menu with smooth transitions
-  **Dynamic Hover Animations** - Interactive elements with visual feedback
-  **CV Download System** - Confirmation popup before download
-  **Working Contact Form** - Email notifications via backend integration

### 📱 **Responsive Design**
-  **Fully Mobile Compatible** - Optimized for all devices
-  **Adaptive Layouts** - Responsive grid system
-  **Touch-Optimized** - Mobile-first interactions
-  **Mobile-Friendly Navigation** - Collapsible menu system

---

## 🛠️ **Tech Stack**

### **Frontend**
- **React 19.1.1** - Modern UI library with hooks
- **Vite 7.1.7** - Next-gen build tool & dev server
- **CSS3** - Advanced animations & glassmorphism effects
- **React Icons 5.5.0** - Comprehensive icon library

### **3D Graphics**
- **Three.js 0.180.0** - WebGL 3D rendering engine
- **React Three Fiber 9.4.0** - React renderer for Three.js
- **React Three Drei 10.7.6** - Useful helpers & abstractions

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Nodemailer** - Email automation for contact form

### **Libraries & Tools**
- **@studio-freight/lenis 1.0.42** - Smooth scroll library
- **ESLint** - Code quality & linting
- **Vercel** - Frontend deployment platform
- **Koyeb** - Backend API deployment

---

## 📂 **Project Structure**

```
Portofolio/
├── vite-project/                 # Frontend (React + Vite)
│   ├── public/
│   │   ├── images/               # Project screenshots & assets
│   │   ├── models/               # 3D models (.glb/.gltf)
│   │   ├── CV_ATS_JeremyJosephPohar.pdf
│   │   └── weblogo.png           # Favicon
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx         # About section with tech stack
│   │   │   ├── About.css
│   │   │   ├── Contact.jsx       # Contact form with backend
│   │   │   ├── Contact.css
│   │   │   ├── Footer.jsx        # CTA & footer
│   │   │   ├── Footer.css
│   │   │   ├── Home.jsx          # Hero with 3D model
│   │   │   ├── Home.css
│   │   │   ├── ModelViewer.jsx   # Three.js 3D component
│   │   │   ├── Navbar.jsx        # Responsive navigation
│   │   │   ├── Navbar.css
│   │   │   ├── Preloader.jsx     # Loading animation
│   │   │   ├── Preloader.css
│   │   │   ├── Projects.jsx      # Project showcase
│   │   │   └── Projects.css
│   │   ├── App.jsx               # Main component
│   │   ├── App.css               # Global styles & variables
│   │   ├── index.css             # Reset & base
│   │   └── main.jsx              # Entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/                      # Backend (Node.js + Express)
│   ├── server.js                 # Express server
│   ├── routes/
│   │   └── contact.js            # Contact form endpoint
│   ├── package.json
│   └── .env                      # Environment variables
│
└── README.md
```

---

## 🚀 **Getting Started**

### **Prerequisites**
```bash
Node.js >= 16.x
npm >= 8.x
```

### **Installation**

#### **1. Clone Repository**
```bash
git clone https://github.com/CaffeinatedR4t/Portofolio.git
cd Portofolio
```

#### **2. Frontend Setup**
```bash
cd Portofolio/vite-project
npm install
npm run dev
```
Frontend runs on: `http://localhost:5173`

#### **3. Backend Setup**
```bash
cd backend
npm install
```

Create `.env` file:
```env
PORT=3001
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

Start backend:
```bash
npm start
```
Backend runs on: `http://localhost:3001`

---

## 📋 **Sections Overview**

### **1. Home (Hero)**
- 3D interactive model (Three.js)
- Live Jakarta time display (HH:MM:SS | Coordinates)
- Animated status indicators
- Custom cursor with trail effect
- Scroll indicator
- Professional tagline

### **2. About Me**
- Professional introduction
- **Current Role:** Advanced AI Trainer @ Invisible Technologies
- **Education:** Computer Science @ UMN
- **Languages:** English (C1), Indonesian (Native)

**Tech Stack Display:**

#### **Programming Languages (8)**
- TypeScript
- JavaScript
- Java
- Python
- PHP
- C
- C++
- C# *(Custom SVG logo)*

#### **Frameworks & Libraries (6)**
- HTML5
- CSS3
- React
- Node.js
- **Three.js** ✨ *(WebGL 3D graphics)*
- **Laravel** *(PHP framework)*

#### **Tools & Platforms (7)**
- Android Studio
- Unity
- **Jupyter Notebook** ✨ *(Data science & ML)*
- **RStudio** ✨ *(R programming IDE)*
- MySQL
- GitHub
- Figma

**Certifications:**
- 🏆 HCIA-AI V3.5 (Huawei) - Mar 2025
- 🌐 EF SET English C1 - Jun 2025
- 🐍 Python Intermediate (Sololearn) - May 2025
- 🔒 Cybersecurity Fundamentals (IBM) - Nov 2025
- 🛡️ Getting Started with Cybersecurity (IBM) - Nov 2025

### **3. Projects**
Interactive project cards with:
- Hover animations
- Tech stack badges
- GitHub links
- Role highlights
- Project descriptions

**Featured Projects:**
1. **Personal Portfolio** - React + Vite + Three.js
2. **XSS Mitigation Framework** - Cybersecurity Research
3. **SEADEX Platform** - Laravel + MySQL
4. **Diabetes Meal Plan AI** - Python ML
5. **Taman Bacaan Mobile App** - Kotlin
6. **AI in Student Learning** - Research Paper (R + RStudio)

### **4. Contact**
- Working contact form
- Email integration (Nodemailer)
- Social media links
- Real-time validation
- Success/error notifications

### **5. Footer**
- **CTA:** "Ready to Build Resilient Solutions?"
- Scroll-to-contact button with up arrow
- Copyright & year
- Navigation links

---

## 🎨 **Design System**

### **Color Palette**
```css
:root {
  /* Primary Colors */
  --primary-color: #ffffff;      /* White */
  --secondary-color: #808080;    /* Gray */
  --accent-color: #00ff88;       /* Cybersecurity Green */
  --bg-dark: #000000;            /* Black */
  
  /* Tech Stack Colors */
  --ts-blue: #3178c6;            /* TypeScript */
  --js-yellow: #f7df1e;          /* JavaScript */
  --java-orange: #f89820;        /* Java */
  --python-blue: #3776ab;        /* Python */
  --csharp-green: #239120;       /* C# */
  --react-cyan: #61dafb;         /* React */
  --threejs-white: #ffffff;      /* Three.js */
  --laravel-red: #ff2d20;        /* Laravel */
  --jupyter-orange: #f37726;     /* Jupyter */
  --rstudio-blue: #75aadb;       /* RStudio */
}
```

### **Typography**
```css
--font-primary: 'Rajdhani', sans-serif;
--font-accent: 'Orbitron', sans-serif;
```

### **Custom Components**
- **C# Logo** - Custom SVG with green color scheme
- **RStudio Logo** - Custom SVG (blue circle with white "R")
- **Glassmorphism Cards** - Frosted glass effect
- **Matrix Hover Effects** - Green trailing animations

---

## 📱 **Responsive Breakpoints**

```css
/* Mobile */
@media (max-width: 768px) { /* ... */ }

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { /* ... */ }

/* Desktop */
@media (min-width: 1025px) { /* ... */ }

/* Large Desktop */
@media (min-width: 1440px) { /* ... */ }
```

---

## 🔧 **Configuration**

### **Environment Variables**

**Frontend (`.env`):**
```env
VITE_API_URL=https://your-backend.koyeb.app
```

**Backend (`.env`):**
```env
PORT=3001
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FRONTEND_URL=https://your-frontend.vercel.app
```

### **Deployment**

#### **Frontend (Vercel)**
```bash
cd Portofolio/vite-project
npm run build
vercel --prod
```

#### **Backend (Koyeb)**
```bash
cd backend
# Push to GitHub
# Connect to Koyeb
# Deploy from GitHub repo
```

---

## 💡 **Key Learnings**

### **Technical Skills Gained:**
-  **Full-Stack Development** - React + Node.js + Express
-  **3D Web Graphics** - Three.js, React Three Fiber, WebGL
-  **Data Science Tools** - Jupyter Notebook, RStudio integration
-  **API Integration** - RESTful endpoints
-  **Email Automation** - Nodemailer implementation
-  **UX/UI Design** - Glassmorphism, custom cursors, animations
-  **Responsive Design** - Mobile-first approach
-  **DevOps** - Vercel + Koyeb deployment
-  **Custom SVG Components** - C# and RStudio logos
-  **Performance Optimization** - Code splitting, lazy loading
-  **SEO Best Practices** - Meta tags, semantic HTML

---

## 📊 **Performance**

- ⚡ **Lighthouse Score:** 90+ (Performance, Accessibility, SEO)
- 🚀 **First Contentful Paint:** < 1.5s
- 📦 **Bundle Size:** Optimized with Vite
- 🎯 **Code Splitting:** Dynamic imports
- 🔄 **Caching Strategy:** Service workers ready
- 🎨 **3D Performance:** Optimized Three.js rendering

---

## 🤝 **Contributing**

While this is a personal portfolio, suggestions and bug reports are welcome!

1. Fork the repository
2. Create feature branch (`git checkout -b feature/Enhancement`)
3. Commit changes (`git commit -m 'Add Enhancement'`)
4. Push to branch (`git push origin feature/Enhancement`)
5. Open Pull Request

---

## 📄 **License**

This project is licensed under the **MIT License**.

---

## 👤 **Author**

**Jeremy Joseph Pohar**

- 🎓 **Education:** Computer Science @ Universitas Multimedia Nusantara
- 🔒 **Focus:** Cybersecurity Research & AI Development
- 📍 **Location:** Jakarta, Indonesia
- 🗣️ **Languages:** English (CEFR C1), Indonesian (Native)

### **Connect With Me:**
- 📧 **Email:** [jeremy.yosep@gmail.com](mailto:jeremy.yosep@gmail.com)
- 💼 **LinkedIn:** [jeremyjosephpohar](https://linkedin.com/in/jeremyjosephpohar)
- 🐙 **GitHub:** [@CaffeinatedR4t](https://github.com/CaffeinatedR4t)
- 🌐 **Portfolio:** [your-portfolio.vercel.app](https://your-portfolio.vercel.app)

---

## 🙏 **Acknowledgments**

- **React Team** - Amazing framework
- **Vite Team** - Lightning-fast tooling
- **Three.js Community** - 3D web graphics
- **Lenis** - Smooth scroll library
- **Vercel** - Seamless deployment
- **Koyeb** - Backend hosting
- **React Icons** - Comprehensive icons
- **Mantis.works** - Design inspiration

---

## 📸 **Screenshots**

<img width="947" height="516" alt="webthumbnail" src="https://github.com/user-attachments/assets/77048dfd-99a5-4b9b-a7eb-c0e6fe773740" />

*Hero section with Three.js 3D model and live time display*

---

## 🔮 **Roadmap & Future Enhancements**

- [ ] **Dark/Light Mode Toggle** - Theme switcher
- [ ] **Blog Section** - Cybersecurity & AI articles
- [ ] **Interactive Project Demos** - Live previews
- [ ] **Multi-Language Support** - English/Indonesian
- [ ] **Advanced 3D Animations** - More interactive models with Three.js
- [ ] **Analytics Dashboard** - Visitor insights
- [ ] **Progressive Web App** - PWA capabilities
- [ ] **Accessibility Improvements** - WCAG 2.1 AAA compliance
- [ ] **Interactive Data Visualizations** - Using Jupyter notebooks

---

## 🐛 **Known Issues**

- [ ] Safari smooth scroll compatibility
- [ ] iOS cursor effects optimization
- [ ] Email rate limiting needed
- [ ] Three.js performance on mobile devices

---

## 📝 **Changelog**

### **Version 1.1.0** (2025-01-13)
-  Added Three.js to Frameworks & Libraries
-  Added Jupyter Notebook to Tools & Platforms
-  Added RStudio with custom SVG logo
-  Moved Laravel from Tools to Frameworks
-  Implemented custom C# logo
-  Updated tech stack categorization
-  Enhanced footer CTA to "Ready to Build Resilient Solutions?"
-  Improved responsive design

### **Version 1.0.0** (2025-01-13)
-  Initial release
-  Full-stack implementation
-  3D model integration
-  Contact form with backend
-  Responsive design
-  Deployment on Vercel + Koyeb

---

<div align="center">

### **Built with lots of ☕ by Jeremy Joseph Pohar**

*"ANALYZE. DEVELOP. DELIVER."*

---

[![GitHub Stars](https://img.shields.io/github/stars/CaffeinatedR4t/Portofolio?style=social)](https://github.com/CaffeinatedR4t/Portofolio)
[![GitHub Forks](https://img.shields.io/github/forks/CaffeinatedR4t/Portofolio?style=social)](https://github.com/CaffeinatedR4t/Portofolio/fork)

⭐ **Star this repo if you found it helpful!** ⭐

</div>
