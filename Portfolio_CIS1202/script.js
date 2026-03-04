// Set current year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Toggle dark mode class on body when button is clicked
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}

const techPanel = document.getElementById('tech-skills');
const softPanel = document.getElementById('soft-skills');
const showTech = document.getElementById('show-tech');
const showSoft = document.getElementById('show-soft');

if (techPanel && softPanel && showTech && showSoft) {
  showTech.addEventListener('click', () => {
    techPanel.classList.add('is-active');
    softPanel.classList.remove('is-active');
  });

  showSoft.addEventListener('click', () => {
    softPanel.classList.add('is-active');
    techPanel.classList.remove('is-active');
  });
}

