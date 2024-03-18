document.getElementById("scrollButton").addEventListener("click", function () {
  var element = document.querySelector(".about-me");
  element.scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
  var hireMeButton = document.getElementById("scrollButton23");

  hireMeButton.addEventListener("click", function () {
    window.location.href = "https://www.topcv.vn/xem-cv/W1IKAwJQDgMGCgQCUAFUVlVXBVZTCQRRVFJUBgc890";
  });
});
