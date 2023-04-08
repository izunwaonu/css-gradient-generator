var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var color3 = document.querySelector('.color3');
var css = document.querySelector('p')
var body = document.getElementById('gradiant');

function displayGradient(){
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + "," + color3.value +")";
css.innerHTML = body.style.background + ";"

}

color1.addEventListener("input", function() {
 
displayGradient();

});
color2.addEventListener("input", function() {
    displayGradient();
    
   });
   
color3.addEventListener("input", function() {
    displayGradient();
   });
   
   
