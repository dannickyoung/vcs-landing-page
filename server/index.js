// Express Backend Server
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// API Routes

// Projects API
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'PROJECT ALPHA "BRAND IDENTITY"',
      description: 'Short Documentary Film / Instagram Assets (Stills / Video / Japanese/English Copy for SNS & Article)',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=675&fit=crop&q=80',
      category: 'Brand Design'
    },
    {
      id: 2,
      title: 'PROJECT BETA GLOBAL CAMPAIGN 2024',
      description: 'Campaign Video / Graphic / SNS Asset / Guideline',
      image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&h=675&fit=crop&q=80',
      category: 'Communication Design'
    },
    {
      id: 3,
      title: 'PROJECT GAMMA LAB M50X GLOBAL CAMPAIGN',
      description: 'Video and Social Assets / Landing Page / Online Experience for LAB M50x',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=675&fit=crop&q=80',
      category: 'Experience Design'
    },
    {
      id: 4,
      title: 'PROJECT DELTA EPISODIC VIDEO SERIES',
      description: 'Video / SNS Asset',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=675&fit=crop&q=80',
      category: 'Content Production'
    }
  ]);
});

// Team API
app.get('/api/team', (req, res) => {
  res.json([
    {
      name: 'Alex Chen',
      role: 'Creative Director',
      location: 'San Francisco',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80'
    },
    {
      name: 'Yuki Tanaka',
      role: 'Design Lead',
      location: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80'
    },
    {
      name: 'Sarah Johnson',
      role: 'Strategy Director',
      location: 'London',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80'
    },
    {
      name: 'Michael Brown',
      role: 'Art Director',
      location: 'New York',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80'
    },
    {
      name: 'Sophie Martin',
      role: 'Content Director',
      location: 'Paris',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80'
    },
    {
      name: 'David Kim',
      role: 'Technical Director',
      location: 'San Francisco',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80'
    }
  ]);
});

// News API
app.get('/api/news', (req, res) => {
  res.json([
    {
      id: 1,
      date: '2024.01.15',
      title: 'VICI Studio Opens New Office in Paris',
      excerpt: 'We are excited to announce the opening of our new studio in Paris, expanding our global presence and bringing our creative vision to Europe.',
      link: '#'
    },
    {
      id: 2,
      date: '2024.01.10',
      title: 'Project Alpha Wins Design Award',
      excerpt: 'Our brand identity work for Project Alpha has been recognized with the prestigious Design Award, celebrating innovation and creativity.',
      link: '#'
    },
    {
      id: 3,
      date: '2023.12.20',
      title: 'New Team Members Join VICI Studio',
      excerpt: 'We welcome five new talented creatives to our global team, strengthening our capabilities across all disciplines.',
      link: '#'
    }
  ]);
});

// Careers API
app.get('/api/careers', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Senior Brand Designer',
      location: 'San Francisco / Tokyo',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Creative Director',
      location: 'London / New York',
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'Content Producer',
      location: 'Paris / Remote',
      type: 'Full-time'
    }
  ]);
});

// Contact API
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // In a real application, you would save this to a database or send an email
  console.log('Contact form submission:', { name, email, message });
  
  res.json({
    success: true,
    message: 'Thank you for your message! We will get back to you soon.'
  });
});

// Serve SPA for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
  console.log(`Local access: http://localhost:${PORT}`);
});


