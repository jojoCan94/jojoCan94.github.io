function loadSections() {
  // Load the content of the header
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      const header = document.getElementById("header");
      header.innerHTML = data;
    });

  // Load the content of the greeting section
  fetch("greeting.html")
    .then((response) => response.text())
    .then((data) => {
      const main = document.getElementById("greeting");
      main.innerHTML = data;
    });

  // Load the content of the skills section
  fetch("skills.html")
    .then((response) => response.text())
    .then((data) => {
      const main = document.getElementById("skills");
      main.innerHTML = data;
    });

  // Load the content of the experiences section
  fetch("experiences.html")
    .then((response) => response.text())
    .then((data) => {
      const main = document.getElementById("experiences");
      main.innerHTML = data;
    });

  // Load the content of the contact me section
  fetch("contact-me.html")
    .then((response) => response.text())
    .then((data) => {
      const main = document.getElementById("contact-me");
      main.innerHTML = data;
    });

  // Load the content of the footer
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      const footer = document.getElementById("footer");
      footer.innerHTML = data;
    })
    .then(() => toggleTopButton());
}

loadSections();

// Scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Toggle the "Go to top" button based on the user's scroll position
function toggleTopButton() {
  const button = document.getElementById("goToTopButton");
  if (button) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
}

// Call the "toggleTopButton" function on scroll
window.onscroll = function () {
  toggleTopButton();
};

// Call the "scrollToTop" function when the "Go to top" button is clicked
window.onload = function () {
  document.getElementById("goToTopButton").onclick = function () {
    scrollToTop();
  };
};

document.addEventListener("DOMContentLoaded", function () {
  var goToTopButton = document.getElementById("goToTopButton");
  goToTopButton.addEventListener("click", function () {
    scrollToTop();
  });
});
