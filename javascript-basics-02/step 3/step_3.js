var div = document.querySelector("#result"),
     input = document.querySelector("#name");

input.onkeyup = function(){
    div.innerHTML = input.value;
}