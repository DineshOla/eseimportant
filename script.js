// Toggle Functionality for Subject Sections
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const subjectDiv = button.parentElement.parentElement;
      const content = subjectDiv.querySelector('ol, .coming-soon');
      const isActive = content.classList.contains('active');
  
      // Toggle the active class
      content.classList.toggle('active');
  
      // Update button arrow
      button.textContent = isActive ? '▼' : '▲';
    });
  });
  
  // Lightbox Functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-btn');
  const galleryLinks = document.querySelectorAll('.lightbox-link');
  
  galleryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      lightboxImg.src = link.href;
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
  
  // Scroll Up Functionality
  document.querySelector('a[aria-label="Scroll Up"]').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });