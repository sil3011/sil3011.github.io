document.addEventListener('DOMContentLoaded', function () {
  const fallbackSvg = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="220" viewBox="0 0 320 220">
      <rect width="320" height="220" fill="#eae2dc"/>
      <rect x="16" y="16" width="288" height="188" rx="12" fill="#f6f2ee" stroke="#d8d0c8" stroke-width="2"/>
      <circle cx="110" cy="90" r="28" fill="#d8d0c7"/>
      <path d="M72 150 L150 92 L190 135 L250 85 L292 150 Z" fill="#d1c7be"/>
    </svg>
  `);

  const thumbImages = document.querySelectorAll('.project-thumb-image');

  thumbImages.forEach(function (img) {
    img.style.objectFit = 'cover';
    img.style.objectPosition = 'center center';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.display = 'block';

    img.addEventListener('error', function () {
      img.src = fallbackSvg;
      img.alt = 'Project thumbnail unavailable';
    }, { once: true });
  });
});
