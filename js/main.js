// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', e => {
    if (e.target.closest('a')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// YouTube: load the player only when a video is tapped
document.querySelectorAll('.yt').forEach(btn => {
  btn.addEventListener('click', () => {
    const f = document.createElement('iframe');
    f.src = `https://www.youtube-nocookie.com/embed/${btn.dataset.id}?autoplay=1&rel=0`;
    f.title = btn.getAttribute('aria-label').replace(/^Play: /, '');
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    btn.replaceChildren(f);
  }, { once: true });
});

// Footer year
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
