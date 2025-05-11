 AOS.init();

  // Navbar background on scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // GSAP entrance animation
  gsap.from(".hero img", {
    opacity: 0,
    y: -50,
    duration: 1.2,
    delay: 0.2
  });

  gsap.from(".hero .lead", {
    opacity: 0,
    y: 30,
    duration: 1.2,
    delay: 0.6
  });

  gsap.utils.toArray(".project-card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      }
    });
  });