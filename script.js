// Form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      response.textContent = "✅ Thank you for contacting Doan Company. We'll respond soon!";
      response.style.color = "green";
      form.reset();
    });
  }

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.style.background = window.scrollY > 50 ? "#001a33" : "#001f3f";
  });
});