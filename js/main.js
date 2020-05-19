console.clear();

// show/hide hamburger on mobile
var link = document.querySelector("#hamburger");
link.addEventListener("click", function(){
  console.log("Clicked show hamburger");
  var element = document.getElementById("hbg-hide");
  element.classList.toggle("my-hbg");
});

// prevent auto-reload page when click on hamburger
document.getElementById("hamburger")
  .addEventListener("click", function(event){
  event.preventDefault()
});

