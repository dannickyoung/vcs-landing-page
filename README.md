# VICI Studio - Full-Stack Website

A full-stack website inspired by monopo.co.jp, built with Vite, Express, and GSAP animations.

## Features

- **Full-Stack Architecture**: Express backend with RESTful API
- **Client-Side Routing**: Smooth SPA navigation with page transitions
- **All Pages**: Home, Work, Services, Vision, Company, Team, News, Careers, Contact, Brochure
- **GSAP Animations**: Professional page transitions and scroll animations
- **Dynamic Content**: API-driven content loading
- **Responsive Design**: Mobile-first, fully responsive
- **Open Source Images**: Using Unsplash for project images

## Project Structure

```
├── src/
│   ├── pages/          # Page components
│   ├── components/     # Reusable components (Nav, Footer)
│   ├── router/         # Client-side router
│   ├── main.js         # Main application entry
│   └── input.css       # Styles
├── server/
│   └── index.js        # Express backend server
├── index.html          # Main HTML template
└── package.json
```

## Setup

Install dependencies:
```bash
npm install
```

## Development

### Option 1: Frontend Only (Development)
```bash
npm run dev
```
Runs Vite dev server on http://localhost:5173

### Option 2: Full-Stack (Frontend + Backend)
```bash
npm run dev:full
```
Runs both Vite dev server and Express backend concurrently.

### Option 3: Separate Terminals
Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
npm run server
```

## Production Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## API Endpoints

- `GET /api/projects` - Get all projects
- `GET /api/team` - Get team members
- `GET /api/news` - Get news items
- `GET /api/careers` - Get job openings
- `POST /api/contact` - Submit contact form

## Pages

- `/` or `/home` - Home page
- `/work` - All projects
- `/services` - Services overview
- `/vision` - Company vision
- `/company` - About company
- `/team` - Team members
- `/news` - News and updates
- `/careers` - Job openings
- `/contact` - Contact form
- `/brochure` - Company brochure

## Technologies

- **Frontend**: Vite, Tailwind CSS, GSAP
- **Backend**: Express.js, Node.js
- **Routing**: Custom client-side router
- **Animations**: GSAP with ScrollTrigger

## License

ISC


