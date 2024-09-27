
  // Google search function
  function searchGoogle() {
    const query = prompt("Enter search query:");
    if (query) {
      window.open(`https://www.google.com/search?q=${query}`, "_blank");
    }
  }
  // Function to toggle the menu
document.getElementById("toggle-btn").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
  });
  