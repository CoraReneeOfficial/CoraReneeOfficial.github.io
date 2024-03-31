/* paste this line in verbatim */
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
/* customize formbutton below*/     
formbutton("create", {
  action: "https://formspree.io/f/xzbnjjvl",
  title: "How can we help?",
  fields: [
    { 
      type: "email", 
      label: "Email:", 
      name: "email",
      required: true,
      placeholder: "your@email.com"
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "What's on your mind?",
    },
    { type: "submit" }      
  ],
  styles: {
    title: {
      backgroundColor: "gray"
    },
    button: {
      backgroundColor: "gray"
    }
  }
});

//alert("Welcome to Cora Renee Kirkpatrick's Portfolio")
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (validateForm(name, email, message)) {
        // If validation passes, you'd typically send the form data to the server here
        alert('Form submitted! (Data would be sent to the server here)'); 
        contactForm.reset(); // Reset the form
    }  
});

function validateForm(name, email, message) {
    // Implement your basic validation logic here
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }

    // Add more advanced email validation with a regular expression if needed

    return true;
}



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
