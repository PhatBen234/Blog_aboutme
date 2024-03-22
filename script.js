document.getElementById("scrollButton").addEventListener("click", function () {
  var element = document.querySelector(".about-me");
  element.scrollIntoView({ behavior: "smooth" });
});

var contactInfoModal = document.getElementById("contactInfoModal");
var closeBtn = document.getElementsByClassName("close")[0];

document.getElementById("scrollButton23").onclick = function() {
  contactInfoModal.style.display = "block";
  contactInfoModal.classList.add("fade-in"); 
};


closeBtn.onclick = function() {
  contactInfoModal.style.display = "none";
  contactInfoModal.classList.remove("fade-in"); 
};


window.onclick = function(event) {
  if (event.target == contactInfoModal) {
    contactInfoModal.style.display = "none";
    contactInfoModal.classList.remove("fade-in"); 
  }
};

