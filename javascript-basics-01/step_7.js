var shoeSize = prompt("What is your shoe size ? ");
var birthYear = prompt("What year were you born in ?")

function calc(){
    shoeSize =(((((shoeSize * 2)+5)*50)-birthYear)+1766);

    alert("The answer is : " + shoeSize);
}

calc(); 