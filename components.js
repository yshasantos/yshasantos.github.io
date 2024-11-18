const navbar = `
    <div class="container mx-auto px-5 py-3 flex justify-between items-center">
          <a href="index.html" class="text-xl font-semibold text-gray-900">Patricia's Portfolio</a>
          <a href="index.html" class="navbar-text">Return to Main Page</a>
     </div>
`;

const navbarContainer =  document.getElementById('navbar');
if (navbarContainer) {
    navbarContainer.innerHTML = navbar;
}