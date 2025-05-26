window.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section");
  
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
});
document.getElementById("closeBanner").addEventListener("click", function() {
  document.querySelector(".banner").style.display = "none";
});