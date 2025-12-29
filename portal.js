const myb=document.getElementById("myb");
const display=document.getElementById("display");
myb.onclick=function(event){
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value.trim();
    if(name===""|| password===""){
    display.textContent='Please fill in the details above';
    }
    else{
        display.textContent='SORRY '+ name +' YOU ARE NOT REGISTERED TO THIS SITE!';  
    }
};