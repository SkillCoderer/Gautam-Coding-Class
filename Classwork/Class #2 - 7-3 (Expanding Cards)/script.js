let imageConts = document.querySelectorAll(".image-cont");
imageConts.forEach(function (item) {
  item.addEventListener("click", function () {
    imageConts.forEach(function (ic) {
      ic.classList.remove("expanded");
    });
    item.classList.add("expanded");
  });
});
