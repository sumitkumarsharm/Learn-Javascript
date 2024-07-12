const button = document.querySelector(".btn-1");
const card = document.querySelector(".popup-container");
const overlay = document.querySelector(".overlay");

button.addEventListener("click", () => {
  card.classList.add("popus_open");
});

const cross = document.querySelector(".cross");
cross.addEventListener("click", () => {
  card.classList.remove("popus_open");
});

overlay.addEventListener('click',()=>{
    card.classList.remove("popus_open");
})
