var show = document.querySelector("#show");
var hide = document.querySelector("#hide");
var texte = document.querySelector("#texte");

function showHide(){
    hide.addEventListener("click", function(){
        texte.style.display = "none";
    });

    show.addEventListener("click", function(){
        texte.style.display = "block";
    });
}

showHide(); 
