document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const QualitySection = document.querySelector('#quality-service-section');

  const handleScroll = () => {
    const sectionTop = QualitySection.getBoundingClientRect().top + window.scrollY;

    if (window.innerWidth >= 768 && window.scrollY >= sectionTop) {
      navbar.classList.remove('hidden');
      // navbar.classList.remove('flex');
      // navbar.classList.add('md:flex');
    } else {
      navbar.classList.remove('flex');
      navbar.classList.add('hidden');
      navbar.classList.add('flex');
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      navbar.classList.add('hidden');
    } else {
      handleScroll(); // Re-evaluate visibility on resize
    }
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);

  // Initial check on load
  handleResize();
});
