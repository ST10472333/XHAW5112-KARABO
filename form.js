document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const venue = document.getElementById("venue").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !venue || !message) {
    document.getElementById("formStatus").innerText = "Please fill in all fields.";
    return;
  }

  document.getElementById("formStatus").innerText = "Thank you! Your message has been sent.";
  document.getElementById("contactForm").reset();
});
