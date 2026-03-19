// Tailwind CSS Configuration
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0B0F19',
        'bg-secondary': '#111827',
        fg: '#F8FAFC',
        muted: '#64748B',
        accent: '#00D4FF',
        'accent-dim': '#0891B2',
        card: '#151C2C',
        border: '#1E293B',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
}

// Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('preloader').style.display = 'none';
    }, 500);
  }, 2000);
});

// Scroll Progress
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
});

// Enhanced Particle System
function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.width = Math.random() * 4 + 2 + 'px';
  particle.style.height = particle.style.width;
  particle.style.animationDuration = Math.random() * 4 + 4 + 's';
  particle.style.animationDelay = Math.random() * 2 + 's';
  document.getElementById('particles').appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 6000);
}

setInterval(createParticle, 300);

// Intersection Observer for Reveal Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 3D Tilt Effect
document.querySelectorAll('.service-card').forEach(card => {
  card.classList.add('tilt-card');
});

// Parallax Effect
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.5;
  document.querySelector('.hero-gradient').style.transform = `translateY(${rate}px)`;
});

// Typing Effect
const heroTitle = document.querySelector('.hero-gradient + div + div h1');
if (heroTitle) {
  heroTitle.classList.add('typewriter');
}

// Counter Animation
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 30);
}

const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
});

counters.forEach(counter => counterObserver.observe(counter));

// Magnetic Effect
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
  btn.classList.add('magnetic');
});

// Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar Background on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('glass');
  } else {
    navbar.classList.remove('glass');
  }
});

// Project Modal (placeholder)
function openProjectModal(index) {
  // Implement modal functionality
  console.log('Open project modal for project', index);
}

// Project data
const projects = [
  {
    name: 'AI Analytics Dashboard',
    description: 'Real-time data visualization platform with predictive analytics and machine learning insights.',
    fullDescription: 'A comprehensive analytics dashboard that leverages machine learning algorithms to provide predictive insights, anomaly detection, and automated reporting for enterprise clients.',
    technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'D3.js', 'AWS'],
    challenge: 'The client needed a way to process millions of data points in real-time and provide actionable insights to non-technical stakeholders.',
    solution: 'We built a distributed data pipeline with machine learning models that process data in real-time, combined with an intuitive visualization layer.',
    results: ['50% reduction in decision-making time', 'Real-time insights for 10M+ daily events', '95% prediction accuracy'],
    category: 'AI & Analytics'
  },
  {
    name: 'Mobile FinTech App',
    description: 'Secure banking application with biometric authentication and real-time transactions.',
    fullDescription: 'A next-generation mobile banking application featuring biometric authentication, real-time transaction processing, and AI-powered financial insights.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Plaid'],
    challenge: 'Building a secure, compliant financial application that also delivers a seamless user experience across iOS and Android.',
    solution: 'We implemented a cross-platform solution with enterprise-grade security, biometric authentication, and real-time synchronization.',
    results: ['100% PCI-DSS compliant', '4.8 App Store rating', '100K+ active users'],
    category: 'FinTech'
  },
  {
    name: 'E-commerce Platform',
    description: 'High-performance online store with AI-powered recommendations and headless CMS.',
    fullDescription: 'A scalable e-commerce platform with AI-powered product recommendations, headless CMS for content management, and seamless checkout experience.',
    technologies: ['Next.js', 'Shopify', 'Stripe', 'Contentful', 'Algolia', 'Vercel'],
    challenge: 'The client needed to scale their e-commerce operations while maintaining sub-second page loads and increasing conversion rates.',
    solution: 'We built a headless commerce solution with optimized performance, AI recommendations, and streamlined checkout flow.',
    results: ['35% increase in conversions', '<1s average page load', '2x revenue growth'],
    category: 'E-commerce'
  },
  {
    name: 'Startup SaaS Platform',
    description: 'Complete business management solution with real-time collaboration features.',
    fullDescription: 'A comprehensive SaaS platform for startups featuring project management, team collaboration, invoicing, and analytics in one unified solution.',
    technologies: ['Vue.js', 'Firebase', 'WebRTC', 'Stripe', 'Chart.js', 'Docker'],
    challenge: 'Startups needed an all-in-one solution to manage their operations without juggling multiple expensive tools.',
    solution: 'We created an integrated platform combining project management, team collaboration, and business analytics with real-time sync.',
    results: ['500+ startup clients', '60% reduction in tool costs', '$2M+ seed funding raised'],
    category: 'SaaS'
  },
  {
    name: 'AI Customer Support Bot',
    description: 'Intelligent chatbot with NLP capabilities and seamless human handoff integration.',
    fullDescription: 'An AI-powered customer support system using natural language processing to handle inquiries with seamless human agent handoff when needed.',
    technologies: ['Python', 'OpenAI', 'FastAPI', 'Redis', 'React', 'WebSocket'],
    challenge: 'Reducing support ticket volume while maintaining high customer satisfaction scores.',
    solution: 'We developed an NLP-powered bot that handles 80% of inquiries automatically while seamlessly escalating complex issues to human agents.',
    results: ['80% automation rate', '45% reduction in support costs', '4.7 CSAT score'],
    category: 'AI & Automation'
  }
];

// Initialize particles
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
    particle.style.animation = `float ${Math.random() * 20 + 10}s linear infinite`;
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    container.appendChild(particle);
  }
}

// Reveal animations on scroll
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(reveal => observer.observe(reveal));
}

// Counter animation
function animateCounters() {
  const counters = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const start = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - start;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          counter.textContent = Math.floor(target * easeOut) + '+';

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }

        requestAnimationFrame(update);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// Navigation scroll effect
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('glass');
    } else {
      navbar.classList.remove('glass');
    }

    // Active section detection
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Project modal
function openProjectModal(index) {
  const project = projects[index];
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');

  content.innerHTML = `
    <div class="relative">
      <button onclick="closeProjectModal()" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-bg/80 border border-border/50 flex items-center justify-center text-muted hover:text-fg transition-colors" aria-label="Close modal">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="aspect-video bg-gradient-to-br from-accent/20 via-accent-dim/10 to-transparent flex items-center justify-center">
        <svg class="w-24 h-24 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>

      <div class="p-8">
        <div class="flex items-center gap-3 mb-4">
          <span class="tech-tag">${project.category}</span>
        </div>

        <h2 class="font-display text-3xl font-bold mb-4">${project.name}</h2>
        <p class="text-muted text-lg mb-8">${project.fullDescription}</p>

        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <div class="bg-bg/50 rounded-xl p-6 border border-border/50">
            <h3 class="font-display font-semibold mb-3 text-accent">Challenge</h3>
            <p class="text-muted text-sm">${project.challenge}</p>
          </div>
          <div class="bg-bg/50 rounded-xl p-6 border border-border/50">
            <h3 class="font-display font-semibold mb-3 text-accent">Solution</h3>
            <p class="text-muted text-sm">${project.solution}</p>
          </div>
          <div class="bg-accent/5 rounded-xl p-6 border border-accent/20">
            <h3 class="font-display font-semibold mb-3 text-accent">Results</h3>
            <ul class="text-muted text-sm space-y-2">
              ${project.results.map(r => `<li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0"></span>${r}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div>
          <h3 class="font-display font-semibold mb-4">Technologies Used</h3>
          <div class="flex flex-wrap gap-2">
            ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

// Contact form handling
function initContactForm() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Simulate form submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = '<span>Message Sent!</span>';
      submitBtn.classList.add('bg-green-500');

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.classList.remove('bg-green-500');
        submitBtn.disabled = false;
        form.reset();
      }, 2000);
    }, 1500);
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initRevealAnimations();
  animateCounters();
  initNavigation();
  initContactForm();
  initSmoothScroll();
});
      description1: 'NEXUS Tech Agency est un studio de développement logiciel moderne spécialisé dans les applications web, les applications mobiles et les solutions d\'intelligence artificielle.',
      description2: 'Nous collaborons avec des startups ambitieuses et des entreprises avant-gardistes pour transformer les idées en expériences numériques exceptionnelles qui stimulent la croissance et l\'innovation.',
      performance: 'Performance',
      performanceDesc: 'Applications ultra-rapides optimisées pour la vitesse',
      innovation: 'Innovation',
      innovationDesc: 'Solutions de pointe pour les défis de demain',
      security: 'Sécurité',
      securityDesc: 'Protection de niveau entreprise pour vos données'
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Ce Que Nous Faisons le Mieux',
      description: 'Solutions numériques complètes adaptées à vos besoins métier, du concept au déploiement.',
      webDev: 'Développement Web',
      webDevDesc: 'Solutions web évolutives pour les entreprises modernes',
      mobileDev: 'Développement Mobile',
      mobileDevDesc: 'Expériences mobiles natives et multiplateformes',
      ai: 'Solutions IA',
      aiDesc: 'Automatisation intelligente et insights de données',
      design: 'Design UI/UX',
      designDesc: 'Interfaces magnifiques que les utilisateurs adorent'
    },
    solutions: {
      title: 'Solutions',
      subtitle: 'Solutions Spécifiques à l\'Industrie',
      description: 'Approches sur mesure pour différentes industries, résolvant les défis métier réels.',
      startups: 'Startups',
      challenge: 'Le Défi',
      solution: 'Notre Solution',
      result: 'Le Résultat',
      enterprise: 'Entreprise',
      ecommerce: 'E-commerce',
      fintech: 'FinTech',
      aiProducts: 'Produits IA'
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Projets en Vedette',
      description: 'Découvrez nos derniers travaux et voyez comment nous avons aidé les entreprises à transformer leur présence numérique.',
      viewAll: 'Voir Tous les Projets',
      viewProject: 'Voir le Projet'
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Construisons Quelque Chose d\'Incroyable Ensemble',
      description: 'Prêt à transformer votre idée en réalité ? Contactez notre équipe et discutons de votre projet.',
      email: 'Email',
      location: 'Localisation',
      name: 'Nom',
      company: 'Entreprise',
      message: 'Description du Projet',
      send: 'Envoyer le Message'
    },
    footer: {
      description: 'Construire l\'avenir avec des solutions innovantes web, mobile et IA.',
      quickLinks: 'Liens Rapides',
      services: 'Services',
      connect: 'Connecter',
      rights: 'Tous droits réservés.'
    }
  }

// Current language
let currentLang = 'en';

// Language switcher function
function switchLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update navigation
  document.querySelector('a[href="#home"]').textContent = t.nav.home;
  document.querySelector('a[href="#services"]').textContent = t.nav.services;
  document.querySelector('a[href="#solutions"]').textContent = t.nav.solutions;
  document.querySelector('a[href="#portfolio"]').textContent = t.nav.portfolio;
  document.querySelector('a[href="#contact"]').textContent = t.nav.contact;
  document.querySelectorAll('.btn-primary span').forEach(btn => {
    if (btn.textContent.includes('Start') || btn.textContent.includes('Commencer') || btn.textContent.includes('ابدأ')) {
      btn.textContent = t.nav.startProject;
    }
  });

  // Update mobile menu
  document.querySelectorAll('.mobile-menu-link')[0].textContent = t.nav.home;
  document.querySelectorAll('.mobile-menu-link')[1].textContent = t.nav.services;
  document.querySelectorAll('.mobile-menu-link')[2].textContent = t.nav.solutions;
  document.querySelectorAll('.mobile-menu-link')[3].textContent = t.nav.portfolio;
  document.querySelectorAll('.mobile-menu-link')[4].textContent = t.nav.contact;

  // Update hero section
  document.querySelector('.hero-gradient + div + div span').textContent = t.hero.badge;
  document.querySelector('.hero-gradient + div + div h1').innerHTML = t.hero.title.replace('Web, Mobile & AI', '<span class="text-accent glow-text">Web, Mobile & AI</span>');
  document.querySelector('.hero-gradient + div + div p').textContent = t.hero.subtitle;
  document.querySelectorAll('.btn-primary span')[0].textContent = t.hero.startProject;
  document.querySelector('.btn-secondary').textContent = t.hero.viewPortfolio;

  // Update stats
  const stats = document.querySelectorAll('.text-center .text-muted.text-sm');
  stats[0].textContent = t.hero.projects;
  stats[1].textContent = t.hero.clients;
  stats[2].textContent = t.hero.experts;
  stats[3].textContent = t.hero.experience;

  // Update about section
  document.querySelector('#about-section h2').textContent = t.about.title;
  document.querySelector('#about-section h2 + p').textContent = t.about.subtitle;
  document.querySelectorAll('#about-section p')[1].textContent = t.about.description1;
  document.querySelectorAll('#about-section p')[2].textContent = t.about.description2;

  // Update about features
  const features = document.querySelectorAll('#about-section .text-center p');
  features[0].textContent = t.about.performanceDesc;
  features[1].textContent = t.about.innovationDesc;
  features[2].textContent = t.about.securityDesc;

  // Update services section
  document.querySelector('#services h2').textContent = t.services.title;
  document.querySelector('#services h2 + p').textContent = t.services.subtitle;
  document.querySelector('#services .text-muted.text-lg').textContent = t.services.description;

  // Update contact section
  document.querySelector('#contact h2').textContent = t.contact.title;
  document.querySelector('#contact h2 + p').textContent = t.contact.subtitle;
  document.querySelector('#contact .text-muted.text-lg').textContent = t.contact.description;

  // Update contact form labels
  document.querySelector('label[for="name"]').textContent = t.contact.name;
  document.querySelector('label[for="email"]').textContent = 'Email';
  document.querySelector('label[for="company"]').textContent = t.contact.company;
  document.querySelector('label[for="message"]').textContent = t.contact.message;
  document.querySelector('button[type="submit"] span').textContent = t.contact.send;

  // Update footer
  document.querySelector('.footer p.text-muted.text-sm').textContent = t.footer.description;
  document.querySelector('.footer h4:first-of-type').textContent = t.footer.quickLinks;
  document.querySelectorAll('.footer h4')[1].textContent = t.footer.services;
  document.querySelectorAll('.footer h4')[2].textContent = t.footer.connect;
  document.querySelector('.footer .flex-col.sm\\:flex-row p').textContent = `2024 NEXUS Tech Agency. ${t.footer.rights}`;

  // Update document language
  document.documentElement.lang = lang;
  if (lang === 'ar') {
    document.body.style.direction = 'rtl';
  } else {
    document.body.style.direction = 'ltr';
  }

  // Save language preference
  localStorage.setItem('nexus-lang', lang);
}

// Scroll Progress
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
});

// Enhanced Particle System
function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.width = Math.random() * 4 + 2 + 'px';
  particle.style.height = particle.style.width;
  particle.style.animationDuration = Math.random() * 4 + 4 + 's';
  particle.style.animationDelay = Math.random() * 2 + 's';
  document.getElementById('particles').appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 6000);
}

setInterval(createParticle, 300);

// Intersection Observer for Reveal Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 3D Tilt Effect
document.querySelectorAll('.service-card').forEach(card => {
  card.classList.add('tilt-card');
});

// Parallax Effect
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.5;
  document.querySelector('.hero-gradient').style.transform = `translateY(${rate}px)`;
});

// Typewriter Effect
const heroTitle = document.querySelector('.hero-gradient + div + div h1');
if (heroTitle) {
  heroTitle.classList.add('typewriter');
}

// Counter Animation
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 30);
}

const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
});

counters.forEach(counter => counterObserver.observe(counter));

// Magnetic Effect
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
  btn.classList.add('magnetic');
});

// Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar Background on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('glass');
  } else {
    navbar.classList.remove('glass');
  }
});

// Project Modal
function openProjectModal(index) {
  const project = projects[index];
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');

  content.innerHTML = `
    <div class="relative">
      <button onclick="closeProjectModal()" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-bg/80 border border-border/50 flex items-center justify-center text-muted hover:text-fg transition-colors" aria-label="Close modal">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="aspect-video bg-gradient-to-br from-accent/20 via-accent-dim/10 to-transparent flex items-center justify-center">
        <svg class="w-24 h-24 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>

      <div class="p-8">
        <div class="flex items-center gap-3 mb-4">
          <span class="tech-tag">${project.category}</span>
        </div>

        <h2 class="font-display text-3xl font-bold mb-4">${project.name}</h2>
        <p class="text-muted text-lg mb-8">${project.fullDescription}</p>

        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <div class="bg-bg/50 rounded-xl p-6 border border-border/50">
            <h3 class="font-display font-semibold mb-3 text-accent">Challenge</h3>
            <p class="text-muted text-sm">${project.challenge}</p>
          </div>
          <div class="bg-bg/50 rounded-xl p-6 border border-border/50">
            <h3 class="font-display font-semibold mb-3 text-accent">Solution</h3>
            <p class="text-muted text-sm">${project.solution}</p>
          </div>
          <div class="bg-accent/5 rounded-xl p-6 border border-accent/20">
            <h3 class="font-display font-semibold mb-3 text-accent">Results</h3>
            <ul class="text-muted text-sm space-y-2">
              ${project.results.map(r => `<li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0"></span>${r}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div>
          <h3 class="font-display font-semibold mb-4">Technologies Used</h3>
          <div class="flex flex-wrap gap-2">
            ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

// Project data
const projects = [
  {
    name: 'AI Analytics Dashboard',
    description: 'Real-time data visualization platform with predictive analytics and machine learning insights.',
    fullDescription: 'A comprehensive analytics dashboard that leverages machine learning algorithms to provide predictive insights, anomaly detection, and automated reporting for enterprise clients.',
    technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'D3.js', 'AWS'],
    challenge: 'The client needed a way to process millions of data points in real-time and provide actionable insights to non-technical stakeholders.',
    solution: 'We built a distributed data pipeline with machine learning models that process data in real-time, combined with an intuitive visualization layer.',
    results: ['50% reduction in decision-making time', 'Real-time insights for 10M+ daily events', '95% prediction accuracy'],
    category: 'AI & Analytics'
  },
  {
    name: 'Mobile FinTech App',
    description: 'Secure banking application with biometric authentication and real-time transactions.',
    fullDescription: 'A next-generation mobile banking application featuring biometric authentication, real-time transaction processing, and AI-powered financial insights.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Plaid'],
    challenge: 'Building a secure, compliant financial application that also delivers a seamless user experience across iOS and Android.',
    solution: 'We implemented a cross-platform solution with enterprise-grade security, biometric authentication, and real-time synchronization.',
    results: ['100% PCI-DSS compliant', '4.8 App Store rating', '100K+ active users'],
    category: 'FinTech'
  },
  {
    name: 'E-commerce Platform',
    description: 'High-performance online store with AI-powered recommendations and headless CMS.',
    fullDescription: 'A scalable e-commerce platform with AI-powered product recommendations, headless CMS for content management, and seamless checkout experience.',
    technologies: ['Next.js', 'Shopify', 'Stripe', 'Contentful', 'Algolia', 'Vercel'],
    challenge: 'The client needed to scale their e-commerce operations while maintaining sub-second page loads and increasing conversion rates.',
    solution: 'We built a headless commerce solution with optimized performance, AI recommendations, and streamlined checkout flow.',
    results: ['35% increase in conversions', '<1s average page load', '2x revenue growth'],
    category: 'E-commerce'
  },
  {
    name: 'Startup SaaS Platform',
    description: 'Complete business management solution with real-time collaboration features.',
    fullDescription: 'A comprehensive SaaS platform for startups featuring project management, team collaboration, invoicing, and analytics in one unified solution.',
    technologies: ['Vue.js', 'Firebase', 'WebRTC', 'Stripe', 'Chart.js', 'Docker'],
    challenge: 'Startups needed an all-in-one solution to manage their operations without juggling multiple expensive tools.',
    solution: 'We created an integrated platform combining project management, team collaboration, and business analytics with real-time sync.',
    results: ['500+ startup clients', '60% reduction in tool costs', '$2M+ seed funding raised'],
    category: 'SaaS'
  },
  {
    name: 'AI Customer Support Bot',
    description: 'Intelligent chatbot with NLP capabilities and seamless human handoff integration.',
    fullDescription: 'An AI-powered customer support system using natural language processing to handle inquiries with seamless human agent handoff when needed.',
    technologies: ['Python', 'OpenAI', 'FastAPI', 'Redis', 'React', 'WebSocket'],
    challenge: 'Reducing support ticket volume while maintaining high customer satisfaction scores.',
    solution: 'We developed an NLP-powered bot that handles 80% of inquiries automatically while seamlessly escalating complex issues to human agents.',
    results: ['80% automation rate', '45% reduction in support costs', '4.7 CSAT score'],
    category: 'AI & Automation'
  }
];

// Initialize particles
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
    particle.style.animation = `float ${Math.random() * 20 + 10}s linear infinite`;
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    container.appendChild(particle);
  }
}

// Reveal animations on scroll
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(reveal => observer.observe(reveal));
}

// Counter animation
function animateCounters() {
  const counters = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const start = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - start;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          counter.textContent = Math.floor(target * easeOut) + '+';

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }

        requestAnimationFrame(update);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// Navigation scroll effect
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('glass');
    } else {
      navbar.classList.remove('glass');
    }

    // Active section detection
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Contact form handling
function initContactForm() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Simulate form submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = '<span>Message Sent!</span>';
      submitBtn.classList.add('bg-green-500');

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.classList.remove('bg-green-500');
        submitBtn.disabled = false;
        form.reset();
      }, 2000);
    }, 1500);
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initRevealAnimations();
  animateCounters();
  initNavigation();
  initContactForm();
  initSmoothScroll();

  // Initialize language switcher
  const langSelect = document.getElementById('language-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      switchLanguage(e.target.value);
    });

    // Load saved language preference
    const savedLang = localStorage.getItem('nexus-lang') || 'en';
    langSelect.value = savedLang;
    switchLanguage(savedLang);
  }
});