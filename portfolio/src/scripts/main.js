// This file contains JavaScript code for the portfolio website. 
// It includes functionality for interactive elements such as smooth scrolling and form validation.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function(e) {
        const name = form.querySelector('input[type="text"]:nth-child(1)').value;
        const email = form.querySelector('input[type="text"]:nth-child(2)').value;
        const mobile = form.querySelector('input[type="text"]:nth-child(3)').value;

        if (!name || !email || !mobile) {
            e.preventDefault();
            alert('Please fill in all fields.');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  // Array of roles to rotate
  const roles = ["Software Engineer", "Web Developer", "Data Analyst", "Problem Solver"];
  let roleIndex = 0;

  function rotateText() {
    console.log("Rotating text...");
    const dynamicText = document.querySelector(".dynamic-text");
    if (dynamicText) {
      dynamicText.textContent = roles[roleIndex];
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  // Change text every 2 seconds
  setInterval(rotateText, 2000);

  // Initialize the first text
  rotateText();
});