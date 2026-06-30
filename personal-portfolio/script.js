document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const confirmation = document.getElementById("confirmation");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const firstName = document.getElementById("first-name").value.trim();
      const lastName = document.getElementById("last-name").value.trim();
      const message = document.getElementById("message").value.trim();

      if (firstName && lastName && message) {
        confirmation.textContent = `Thank you, ${firstName} ${lastName}. Your message has been sent!`;
        form.reset();
      } else {
        confirmation.textContent = "Fill in all fields.";
        confirmation.style.color = "orange";
      }
    });
  }
});
