var myInput=document.querySelector("#myinput");
var myButton=document.querySelector("#btn");


myButton.addEventListener('click', togglePassword);

function togglePassword() {
    if(myButton.getAttribute('data-text')=="show")
    {
        myInput.setAttribute('type', 'text');
        this.setAttribute('data-text', 'hide');
        this.innerHTML="Hide";

    }else
    {
        myInput.setAttribute('type','password');
        this.setAttribute('data-text','show');
        this.innerHTML="Show";
    }
}

/*btn.addEventListener("click", function() {
    if (btn.textContent == "show") {
        btn.textContent = "hide";
        password.type = "text";
    } else {
        btn.textContent = "show";
        password.type = "password";
    }
});*/