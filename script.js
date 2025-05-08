// Hive/hexagon animated background
const hiveBg = document.getElementById('hive-bg');
const hexSize = 70; // px
function generateHive() {
  const hexRows = Math.ceil(window.innerHeight / (hexSize * 0.75)) + 2;
  const hexCols = Math.ceil(window.innerWidth / (hexSize * 0.87)) + 2;
  hiveBg.innerHTML = '';
  for (let row = 0; row < hexRows; row++) {
    for (let col = 0; col < hexCols; col++) {
      const x = col * hexSize * 0.87 + ((row % 2) * hexSize * 0.435);
      const y = row * hexSize * 0.75;
      const delay = Math.random() * 8;
      const hex = document.createElement('div');
      hex.className = 'hex';
      hex.style.left = `${x}px`;
      hex.style.top = `${y}px`;
      hex.style.animationDelay = `${delay}s`;
      hiveBg.appendChild(hex);
    }
  }
}
generateHive();
window.addEventListener('resize', generateHive);

// Smooth scroll for anchor links and nav highlight
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Section fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(fader => { appearOnScroll.observe(fader); });

// Animate skill progress bars when in view
const skillSection = document.getElementById('skills');
const skillBars = document.querySelectorAll('.progress');
let skillsAnimated = false;
function animateSkills() {
  if (!skillsAnimated && skillSection.getBoundingClientRect().top < window.innerHeight - 100) {
    skillBars.forEach(bar => {
      bar.style.width = bar.getAttribute('data-width');
    });
    skillsAnimated = true;
  }
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Animated counters for achievements
const counters = document.querySelectorAll('.counter');
let countersAnimated = false;
function animateCounters() {
  const achievementsSection = document.getElementById('achievements');
  if (!countersAnimated && achievementsSection.getBoundingClientRect().top < window.innerHeight - 100) {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / 40);
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 40);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
    countersAnimated = true;
  }
}
window.addEventListener('scroll', animateCounters);
window.addEventListener('load', animateCounters);