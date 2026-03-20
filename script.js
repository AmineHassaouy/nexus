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

// Project data
const projects = [
  {
    name: 'AgriVision Detect',
    description: 'AI-powered weed detection mobile app that identifies plant species directly from a smartphone camera.',
    fullDescription: 'AgriVision Detect is an Android application that uses a TensorFlow Lite model trained on a custom dataset to detect and classify weeds in real time through the device camera, helping farmers take targeted action.',
    image: 'assets/images/AgriVision/agrivision-preview.png',
    technologies: ['TensorFlow Lite', 'Computer Vision', 'Kotlin', 'Android', 'PyTorch'],
    challenge: 'Farmers lacked a fast, offline-capable tool to identify invasive weed species in the field without relying on agronomists.',
    solution: 'We trained a compact CNN model on a labelled agricultural dataset and deployed it on-device via TensorFlow Lite for real-time inference with no internet dependency.',
    results: ['Real-time inference at 30 FPS on mid-range devices', 'Trained on a custom annotated crop/weed dataset', 'Fully offline — no connectivity required'],
    category: 'Computer Vision / Mobile'
  },
  {
    name: 'Students-Assistant-Chatbot',
    description: 'AI-powered chatbot that helps students navigate university resources, answer academic questions, and streamline administrative tasks.',
    fullDescription: 'A Retrieval-Augmented Generation (RAG) chatbot built for university students. It indexes institutional documents and FAQs, then answers natural-language questions with accurate, source-grounded responses across web, desktop, and tablet interfaces.',
    image: 'assets/images/Students-Assistant-Chatbot/laptop-mockup.png',
    technologies: ['Python', 'RAG', 'LangChain', 'NLP', 'FastAPI', 'React'],
    challenge: 'Students spent excessive time searching through scattered university portals and documents to find administrative or academic information.',
    solution: 'We built a RAG pipeline that embeds and indexes institutional documents, enabling a conversational interface to retrieve precise, cited answers in seconds.',
    results: ['Covers full university document corpus', 'Available on web, desktop and tablet', 'Context-aware multi-turn conversations'],
    category: 'AI & NLP'
  }
];

// Modal
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

      <div class="aspect-video bg-gradient-to-br from-accent/20 via-accent-dim/10 to-transparent overflow-hidden">
        <img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover">
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
  document.getElementById('project-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});

// Particles
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animation = `float ${Math.random() * 20 + 10}s linear infinite`;
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    container.appendChild(particle);
  }
}

// Reveal animations
function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Counter animation
function animateCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const counter = entry.target;
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const start = performance.now();

      function update(currentTime) {
        const progress = Math.min((currentTime - start) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(target * easeOut) + '+';
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
      observer.unobserve(counter);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(counter => observer.observe(counter));
}

// Navigation
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const scrollProgress = document.querySelector('.scroll-progress');

  window.addEventListener('scroll', () => {
    // Scroll progress bar
    if (scrollProgress) {
      const scrollPercent = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) * 100;
      scrollProgress.style.width = scrollPercent + '%';
    }

    // Navbar glass effect
    navbar.classList.toggle('glass', window.scrollY > 50);

    // Parallax on hero gradient
    const heroGradient = document.querySelector('.hero-gradient');
    if (heroGradient) heroGradient.style.transform = `translateY(${window.pageYOffset * -0.5}px)`;

    // Active nav link
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-section') === current);
    });
  });

  mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });
}

// Contact form
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
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

// Smooth scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => { preloader.style.display = 'none'; }, 500);
  }, 2000);
});

// Boot
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initRevealAnimations();
  animateCounters();
  initNavigation();
  initContactForm();
  initSmoothScroll();

  document.querySelectorAll('.service-card').forEach(card => card.classList.add('tilt-card'));
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => btn.classList.add('magnetic'));
});
