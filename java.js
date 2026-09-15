
const input = document.getElementById("searchInput");
const content = document.getElementById("content");

input.addEventListener("keyup", function () {
  let filter = input.value.toLowerCase();
  let elements = document.querySelectorAll("p, h1, h2, h3, li, a");

  elements.forEach(el => {
    if (el.innerText.toLowerCase().includes(filter)) {
      el.style.display = "";
    } else {
      el.style.display = "none";
    }
  });

  if (filter === "") {
    elements.forEach(el => el.style.display = "");
  }
})

function togglePanel() {
  const panel = document.getElementById("menuPanel");
  panel.style.display = (panel.style.display === "block") ? "none" : "block";
}