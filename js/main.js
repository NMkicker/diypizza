var toppings = document.getElementById("toppings");
var pizza = document.getElementById("pizza");
var count = 0;
function ShowPepperoni() {
  document.getElementById("pepperoni").style.display="block";
  document.getElementById("pepperoni").style.display ="none";
};
function ShowOlive() {
  document.getElementById("olive")
};
function ShowMushroom() {
 document.getElementById("Mushroom")
};
function ShowSausage() {
  document.getElementById("Sausage")
};
function ShowBanana_pep() {
  document.getElementById("Banana_pep")
};


// var  tH document.querySelectorAll("#builder-container");

// for (var i = 0; i < tH.length; i++) {
//     var currenttH = tH[i];
//     currenttH.style.height = 'white';
// }ssList.remove("build-options");
// }



function ShowMedium() {
  var x = document.querySelectorAll(".topping");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.height = "550px";
  }
}
function ShowSmall() {
  var x = document.querySelectorAll(".topping");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.height = "450px";
  }
}

function ShowLarge() {
  var x = document.querySelectorAll(".topping");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.height = "600px";
  }
}

function ShowPepperoni(){
  var pepperoni = document.getElementById("pepperoni");
  var pepperoniImage = document.getElementById("pepperoniImage");
  if(  pepperoniImage.style.display === "none") {
  pepperoniImage.style.display = "block"
} else {
  pepperoniImage.style.display = "none"

}
}
function ShowOlive(){
  var olive = document.getElementById("olive");
  var oliveiImage = document.getElementById("oliveImage");
  if(  oliveImage.style.display === "none") {
oliveImage.style.display = "block"
} else {
  oliveImage.style.display = "none"

}
}

function ShowMushroom(){
  var mushroom = document.getElementById("mushroom");
  var mushroomiImage = document.getElementById("mushroomImage");
  if(  mushroomImage.style.display === "none") {
mushroomImage.style.display = "block"
} else {
  mushroomImage.style.display = "none"

}
}

function ShowSausage(){
  var sausage = document.getElementById("sausage");
  var sausageImage = document.getElementById("sausageImage");
  if(  sausageImage.style.display === "none") {
sausageImage.style.display = "block"
} else {
  sausageImage.style.display = "none"

}
}

function ShowBanana(){

  var bananapepper = document.getElementById("bananapepper");
  var bananapepperImage = document.getElementById("bananapepperImage");
  if(  bananapepperImage.style.display === "none") {
bananapepperImage.style.display = "block"
} else {
bananapepperImage.style.display = "none"

}
}
