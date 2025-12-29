const form=document.getElementById("myform");
const submit=document.getElementById("submit");
const display=document.getElementById("display");
form.addEventListener("submit",function(event){
    event.preventDefault();
    display.textContent='YOUR BOOKING IS SUCCESSFUL, YOU WILL RECEIVE A CONFIRMATION MESSAGE';
});

    
