// Toggle functionality
document.querySelectorAll('.subject').forEach(subject => {
  const button = subject.querySelector('.toggle-btn');
  const content = subject.querySelector('ol') || subject.querySelector('.coming-soon');
  
  button.addEventListener('click', () => {
    content.classList.toggle('active');
    button.textContent = content.classList.contains('active') ? '▲' : '▼';
  });
});

// Security measures
document.addEventListener('keydown', e => {
  if (e.ctrlKey && ['c'].includes(e.key.toLowerCase())) {
    e.preventDefault();
    alert('Copying is disabled!');
    return false;
  }
});

document.addEventListener('keyup', e => {
  if (e.key === 'PrintScreen') {
    navigator.clipboard.writeText('')
      .then(() => alert('Screenshot functionality is disabled!'))
      .catch(() => alert('Screenshot functionality is disabled!'));
  }
});

document.addEventListener('copy', e => {
  e.preventDefault();
  alert('Copying is disabled!');
  return false;
});

// Scroll to top
document.querySelector('footer .social-icons a:last-child').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const lightboxLinks = document.querySelectorAll('.lightbox-link');

lightboxLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const imgSrc = link.getAttribute('href');
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});