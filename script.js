// Load saved theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }
  });
  
  const themeBtn = document.getElementById('themeBtn');
  const image = document.getElementById('image');
  
  themeBtn.addEventListener('click', () => {
    // Toggle theme
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    
    // Save to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
    // Animate image
    image.classList.remove('animate-spin'); 
    void image.offsetWidth; 
    image.classList.add('animate-spin');
  });