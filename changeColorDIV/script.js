var buttonEle=document.querySelector(".btn");
var divEle=document.querySelector(".divv");

var colors=["red","blue","orange"];
var i=0;
buttonEle.onclick = function()
{
    divEle.style.backgroundColor =colors[i];
    i+=1;
    if(i==3)
    {
        i=0;
    }
}

