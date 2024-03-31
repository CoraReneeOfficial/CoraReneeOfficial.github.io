

// Add your preferred loading animation element inside #loading-animation (e.g., spinner) 

// JavaScript to show/hide animation
window.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') { // Check if clicked element is a link 
    loadingContainer.style.display = 'flex'; // Show loading animation
  }
});

window.addEventListener('load', () => {
  loadingContainer.style.display = 'none'; // Hide animation when new page loads
});

const showMoreBtns = document.querySelectorAll('.show-more-btn');

showMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const expandableText = btn.previousElementSibling;
    expandableText.classList.toggle('show-all');

    // Change button text
    if (btn.textContent === 'Show More') {
      btn.textContent = 'Show Less';
    } else {
      btn.textContent = 'Show More';
    }
  });
});
