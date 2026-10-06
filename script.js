  // Current year in the footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Navbar background appears once you scroll past the hero
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Typing effect for the hero role text — the one deliberate animation moment
  const roles = ['UI/UX Designer', 'Graphic Designer', 'Frontend Developer'];
  const roleEl = document.getElementById('typedRole');
  let roleIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const current = roles[roleIndex];
    roleEl.textContent = deleting
      ? current.substring(0, charIndex--)
      : current.substring(0, charIndex++);

    let delay = deleting ? 40 : 90;

    if (!deleting && charIndex === current.length + 1) {
      delay = 1400; // pause once fully typed
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 300;
    }
    setTimeout(typeLoop, delay);
  }
  typeLoop();

  // Fade project cards into view as you scroll to them
  const cards = document.querySelectorAll('.project-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.15 });
  cards.forEach(card => observer.observe(card));
