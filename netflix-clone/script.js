document.querySelector('.input_id').addEventListener("click",()=>{
    let element = document.querySelector('.placeLabel')
    element.style.fontSize =".3em";
    element.style.top="5px";
});

let input_element = document.querySelector("#id_email_hero_fuji");
input_element.style.width = "100%"
input_element.fontSize =".3em"

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



document.querySelector("body").addEventListener("click",removeEventListener(".input_id"))