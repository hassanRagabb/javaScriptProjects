let myImage=document.getElementById("slideshow");
let images=["picture/1.jpg","picture/d.jpg","picture/dd.jpg"];   
let i=0; 


function slideshow(){

    myImage.setAttribute('src',images[i]);
    
    if(i==images.length-1){   i=0;  }
    else
    { i++;}
    setTimeout(function(){ slideshow(); },2000)
}


slideshow();