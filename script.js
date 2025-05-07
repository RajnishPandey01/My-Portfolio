// Console welcome
window.addEventListener('load', () => {
    console.log('Welcome to my portfolio site!');
  });
  
  // Live project search
  document.getElementById('searchInput').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const projects = document.querySelectorAll('.project');
  
    projects.forEach(project => {
      const title = project.querySelector('h3').textContent.toLowerCase();
      project.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
  });
  