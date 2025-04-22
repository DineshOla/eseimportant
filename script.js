document.addEventListener('DOMContentLoaded', () => {
  // Toggle functionality for subject questions and coming-soon
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const subject = button.closest('.subject');
      const list = subject.querySelector('ol');
      const comingSoon = subject.querySelector('.coming-soon');

      // Toggle ordered list if it exists (for BDA, DAA, etc.)
      if (list) {
        list.classList.toggle('active');
        button.querySelector('i').classList.toggle('fa-chevron-down');
        button.querySelector('i').classList.toggle('fa-chevron-up');
      }
      // Toggle coming-soon if it exists (for SEGC)
      if (comingSoon) {
        comingSoon.classList.toggle('active');
        button.querySelector('i').classList.toggle('fa-chevron-down');
        button.querySelector('i').classList.toggle('fa-chevron-up');
      }
    });
  });

  // Lightbox functionality
  const galleryImg = document.querySelector('.gallery-img');
  const lightbox = document.querySelector('.lightbox');
  const lightboxContent = document.querySelector('.lightbox-content');
  const closeBtn = document.querySelector('.close-btn');

  if (galleryImg && lightbox && lightboxContent && closeBtn) {
    galleryImg.addEventListener('click', () => {
      lightboxContent.src = galleryImg.src;
      lightbox.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }
});