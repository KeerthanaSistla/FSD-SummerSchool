function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

if (document.title === "Restaurant Menu") {
  window.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to our restaurant! Browse our menu and place your order.");

    const sections = document.querySelectorAll(".menu section");
    sections.forEach(section => {
      section.addEventListener("mouseenter", () => {
        section.style.backgroundColor = "#fff0d6";
      });
      section.addEventListener("mouseleave", () => {
        section.style.backgroundColor = "transparent";
      });
    });
  });
}

if (document.title === "Order Details") {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!name || !address || !phone) {
      event.preventDefault();
      alert("Please fill in all the required fields.");
      return;
    }

    localStorage.setItem("orderName", capitalize(name));
    localStorage.setItem("orderAddress", address);
    localStorage.setItem("orderPhone", phone);
    localStorage.setItem("orderNote", document.getElementById("note").value);

    alert("Thank you! Your order details have been submitted.");
  });

  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", () => {
    const isValid = /^\d{10}$/.test(phoneInput.value);
    phoneInput.style.borderColor = isValid ? "green" : "red";
  });
}

if (document.title === "Order Confirmation") {
  window.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("orderName");
    const confirmationContainer = document.querySelector(".confirmation");

    if (name) {
      const greeting = document.createElement("p");
      greeting.textContent = `Dear ${name}, we appreciate your order! ❤️`;
      greeting.style.fontWeight = "bold";
      greeting.style.marginTop = "1rem";
      confirmationContainer.appendChild(greeting);
    }
    const backButton = document.querySelector(".btn");
    backButton.addEventListener("click", () => {
      localStorage.clear();
    });
  });
}
