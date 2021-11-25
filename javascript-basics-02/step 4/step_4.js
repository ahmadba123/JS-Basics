var button = document.querySelector("button"),
    namee = document.querySelector("#name"),
    surname = document.querySelector("#surname"),
    city = document.querySelector("#city");

button.addEventListener("click", function(){
   var  answer = confirm("Are you sure");
   if(answer == true){
    namee.value = '';
    surname.value = '';
    city.value = '';
   } 
}); 