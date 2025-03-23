document.addEventListener("DOMContentLoaded", function () {
  // Scroll header effect
  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Form submission
  const demoForm = document.getElementById("demo-form");
  const successMessage = document.getElementById("success-message");
  const submitBtn = document.getElementById("submit-btn");
  const backBtn = document.getElementById("back-btn");

  demoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Add loading state to button
    submitBtn.innerHTML = "Processing...";
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(function () {
      successMessage.classList.add("active");
    }, 1500);
  });

  backBtn.addEventListener("click", function () {
    window.location.href = "#"; // In a real implementation, redirect to homepage

    // For demo purposes, reset the form
    successMessage.classList.remove("active");
    demoForm.reset();
    submitBtn.innerHTML = "Request Your Personalized Demo";
    submitBtn.disabled = false;
  });

  // Form field animations
  const formInputs = document.querySelectorAll("input, select, textarea");

  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused");
    });
  });
});
