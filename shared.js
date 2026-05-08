// Theme
(function(){
  const s = localStorage.getItem('th');
  if(s) document.documentElement.setAttribute('data-theme', s);
})();

function T(){
  const h = document.documentElement;
  const n = h.getAttribute('data-theme')==='dark' ? 'light' : 'dark';
  h.setAttribute('data-theme', n);
  localStorage.setItem('th', n);
}

// Scroll reveal
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if(e.isIntersecting) {
        setTimeout(() => e.target.classList.add('show'), i * 70);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });
  document.querySelectorAll('.reveal:not(.show)').forEach(el => obs.observe(el));
}

// Research filter
function fp(t, b) {
  document.querySelectorAll('.ftabs button').forEach(x => x.classList.remove('on'));
  b.classList.add('on');
  document.querySelectorAll('.paper').forEach(p => {
    p.style.display = (t === 'all' || p.dataset.t === t) ? 'block' : 'none';
  });
}

// Router — intercepts nav clicks, swaps content without full reload
function navigate(url) {
  fetch(url)
    .then(r => r.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // Swap page content
      document.querySelector('.page').innerHTML = doc.querySelector('.page').innerHTML;
      document.title = doc.title;

      // Update active nav link
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('on'));
      const newActive = doc.querySelector('.nav-links a.on');
      if(newActive) {
        const href = newActive.getAttribute('href');
        const match = document.querySelector(`.nav-links a[href="${href}"]`);
        if(match) match.classList.add('on');
      }

      // Push browser history
      window.history.pushState({ url }, '', url);

      // Scroll to top
      window.scrollTo(0, 0);

      // Re-init reveal + re-bind nav links
      setTimeout(() => {
        initReveal();
        bindNav();
      }, 50);
    });
}

function bindNav() {
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      navigate(this.getAttribute('href'));
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  bindNav();
});

window.addEventListener('popstate', function(e) {
  if(e.state && e.state.url) navigate(e.state.url);
});