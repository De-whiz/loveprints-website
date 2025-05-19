window.addEventListener('scroll', () => {
  const floatingVideo = document.getElementById('floatingVideo');
  const hero = document.getElementById('hero');

  if (!hero) return; // safety check

  // How far the user has scrolled
  const scrollY = window.scrollY || window.pageYOffset;

  // When scroll is past the hero height, show video; else hide it
  if (scrollY > hero.offsetHeight) {
    floatingVideo.style.display = 'block';
  } else {
    floatingVideo.style.display = 'none';
  }
});
