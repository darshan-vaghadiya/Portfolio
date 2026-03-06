# Darshan Vaghadiya — Portfolio

A clean, responsive personal portfolio website built with HTML, CSS, JavaScript, and Bootstrap.

## Live Demo

[darshan-vaghadiya.github.io/Portfolio](https://darshan-vaghadiya.github.io/Portfolio/)

## Features

- Dark / Light theme toggle with smooth transitions
- Modular component-based architecture (HTML partials loaded via JS)
- Scroll progress indicator
- Skeleton loader for seamless page load
- Fully responsive design
- Smooth scroll animations

## Tech Stack

- HTML5 & CSS3
- JavaScript (Vanilla)
- Bootstrap 5
- Bootstrap Icons
- Google Fonts (Inter)

## Project Structure

```
Portfolio/
├── index.html                  # Entry point
├── components/                 # HTML partials
│   ├── navbar.html
│   ├── hero.html
│   ├── about.html
│   ├── skills.html
│   ├── project.html
│   ├── contact.html
│   └── footer.html
└── assets/
    ├── css/
    │   ├── root.css            # Global styles & variables
    │   └── components/         # Per-section styles
    └── js/
        ├── include.js          # HTML partial loader
        ├── theme.js            # Dark/Light theme toggle
        ├── scroll.js           # Scroll progress & behavior
        ├── animate.js          # Scroll-based animations
        └── extras.js           # Additional utilities
```

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/darshan-vaghadiya/Portfolio.git
   ```
2. Open `index.html` in your browser or use a local server (e.g. Live Server in VS Code)

## License

This project is open source and available for personal use.
