var image1 = document.querySelector("#image1"),
    image2 = document.querySelector("#image2"),
    image3 = document.querySelector("#image3"),
    image4 = document.querySelector("#image4"),
    image5 = document.querySelector("#image5");    

function change(){
    if(image1.addEventListener("mouseover", function(){
        image1.src="images/image1_2.jpg";
    }));

    if(image2.addEventListener("mouseover", function(){
        image2.src="images/image2_2.jpg";
    }));

    if(image3.addEventListener("mouseover", function(){
        image3.src="images/image3_2.jpg";
    }));

    if(image4.addEventListener("mouseover", function(){
        image4.src="images/image4_2.jpg";
    }));

    if(image5.addEventListener("mouseover", function(){
        image5.src="images/image5_2.jpg";
    }));
}

function unchange(){
    if(image1.addEventListener("mouseout", function(){
        image1.src="images/image1.jpg";
    }));

    if(image2.addEventListener("mouseout", function(){
        image2.src="images/image2.jpg";
    }));

    if(image3.addEventListener("mouseout", function(){
        image3.src="images/image3.jpg";
    }));

    if(image4.addEventListener("mouseout", function(){
        image4.src="images/image4.jpg";
    }));

    if(image5.addEventListener("mouseout", function(){
        image5.src="images/image5.jpg";
    }));
}

change();
unchange();