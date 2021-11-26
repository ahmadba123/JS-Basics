var password = document.querySelector("#password"),
    confirmation = document.querySelector("#confirmation"),
    button = document.querySelector("button");

    button.addEventListener("click", function(){
        if(password.value != confirmation.value){
            password.style.border = "1px solid red";
            confirmation.style.border = "1px solid red";
        }
    });