// Favicon
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      document.title = "Project | Portfolio Gilbert Hutapea";
      $("#favicon").attr("href", "../asset/image/foto/logo.png");
    } else {
      document.title = "Welcome to My Portfolio";
      $("#favicon").attr("href", "../asset/image/foto/favicon.png");
    }
  });
  
  // script hamburger untuk mobile responsive
  const menuToggle = document.querySelector(".menu-toggle input");
  const nav = document.querySelector("nav ul");
  
  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
  });