# Vinay Singhal - Portfolio Project

## Project Overview
A modern, professional portfolio website for a Machine Learning Engineer and Data Analyst.

---

## Personal Information

| Field | Details |
|-------|---------|
| **Name** | Vinay Singhal |
| **Role** | Machine Learning Engineer / Data Analyst |
| **Email** | [vinaysinghal7976@gmail.com](mailto:vinaysinghal7976@gmail.com) |
| **LinkedIn** | [linkedin.com/in/vinay-singhal-b122a8241](https://www.linkedin.com/in/vinay-singhal-b122a8241/) |
| **GitHub** | [github.com/VinaySinghal1](https://github.com/VinaySinghal1) |
| **Education** | B.E. Artificial Intelligence & Data Science (2023-2027) |

---

## GitHub Repository Structure

```
portfolio/
├── .gitignore              # Git ignore rules
├── index.html              # Main HTML entry
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
├── README.md               # Project documentation
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Main App component
│   ├── index.css           # Global styles
│   └── components/
│       ├── Navbar.jsx      # Navigation bar
│       ├── Hero.jsx        # Hero section
│       ├── About.jsx       # About section
│       ├── Skills.jsx      # Skills section
│       ├── Projects.jsx    # Projects showcase
│       ├── Experience.jsx  # Experience timeline
│       ├── Achievements.jsx # Achievements section
│       ├── Contact.jsx     # Contact form
│       ├── Footer.jsx      # Footer
│       ├── LoadingScreen.jsx # Loading animation
│       └── ScrollProgress.jsx # Scroll progress bar
└── public/
    └── (static assets)
```

---

## Projects with GitHub Links

| Project | GitHub Repository | Technologies |
|---------|------------------|--------------|
| Diamond Price Prediction | [github.com/VinaySinghal1/Diamond-Price-Prediction](https://github.com/VinaySinghal1/Diamond-Price-Prediction) | Python, Scikit-learn, Pandas, NumPy |
| Sales Dashboard | [github.com/VinaySinghal1/Sales-Dashboard](https://github.com/VinaySinghal1/Sales-Dashboard) | Power BI, DAX, Excel |
| Pizza Sales Analysis | [github.com/VinaySinghal1/Pizza-Sales-Analysis](https://github.com/VinaySinghal1/Pizza-Sales-Analysis) | SQL, MySQL, Data Analysis |

---

## Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Features
- Responsive design (Mobile, Tablet, Desktop)
- Dark theme with orange accents
- Particle animation background
- Typing animation
- Smooth scroll navigation
- Scroll progress bar
- Loading screen
- Glassmorphism effects
- Contact form

---

## Git Commands for Setup

### Initial Setup
```bash
# Navigate to project
cd "c:\Vinay Projects\4. Portfolio\portfolio"

# Initialize git (already done)
git init

# Add remote repository
git remote add origin https://github.com/VinaySinghal1/portfolio.git

# Verify remote
git remote -v
```

### Daily Workflow
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin master

# Pull latest changes
git pull origin master
```

---

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm run build
# Drag dist folder to netlify.com/drop
```

### Option 3: GitHub Pages
1. Push to GitHub
2. Go to Settings > Pages
3. Select branch: master
4. Folder: / (root)

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Website Sections

1. **Hero** - Introduction with particle animation
2. **About** - Personal bio with stats
3. **Skills** - Technical skills with progress bars
4. **Projects** - Featured projects with GitHub links
5. **Experience** - Internships and education timeline
6. **Achievements** - Hackathons and certifications
7. **Contact** - Contact form and social links
8. **Footer** - Navigation and social links

---

## Color Scheme

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Dark | `#020617` | Background |
| Primary | `#0f172a` | Cards background |
| Accent | `#f97316` | Buttons, highlights |
| Secondary | `#3b82f6` | Links, secondary elements |
| Text | `#f8fafc` | Primary text |
| Gray | `#94a3b8` | Secondary text |

---

## Contact Links in Code

All contact links have been updated in:
- `src/components/Hero.jsx` - Social icons
- `src/components/Contact.jsx` - Email and social links
- `src/components/Footer.jsx` - Footer links
- `src/components/Navbar.jsx` - Navigation social links
- `src/components/Projects.jsx` - GitHub project links

---

## License
Personal Portfolio - Vinay Singhal
