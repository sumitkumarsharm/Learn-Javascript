const AllCheckBox = document.querySelectorAll(".custom_checkbox");
const Allinputs = document.querySelectorAll("input");
const Alert = document.querySelector(".Alert");
const progressbar = document.querySelector(".progressbar");
const progresvalue = document.querySelector(".proggress_color");

let AllGoals = JSON.parse(localStorage.getItem("AllGoals")) || {};

AllCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    let Allfield_filled = [...Allinputs].every((input) => {
      return input.value;
    });
    if (Allfield_filled) {
      checkbox.parentElement.classList.toggle("completed");
      progresvalue.style.width = "33%";
      AllGoals
    } else {
      progressbar.classList.add("display_Error");
    }
  });
});

Allinputs.forEach((input) => {
  input.value = AllGoals[input.id].Name;
  if(AllGoals[input.id].completed){
    input.parentElement.classList.add("completed");
  }



  input.addEventListener("focus", () => {
    progressbar.classList.remove("display_Error");
  });

  input.addEventListener("input", (e) => {
    AllGoals[input.id] = {
      Name: e.target.value,
      completed: false,
    };
    localStorage.setItem("AllGoals", JSON.stringify(AllGoals));
  });
});
