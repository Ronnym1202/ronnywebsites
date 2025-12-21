let amount=document.getElementById("amount");
let confirm=document.getElementById("confirm");
let pay=document.getElementById("pay");
const display=document.getElementById("display");
pay.onclick=function(){
    amount=document.getElementById("amount").value;
    amount=Number(amount);
    confirm=document.getElementById("confirm").value;
    confirm=Number(confirm);
    if(amount&&confirm>=20000){
     display.textContent='CONGRATULATIONS!! PURCHASED SUCCESSFUL!';
    }
    // else if(amount.empty()){
    //     display.textContent='FAILED!! ENTER AMOUNT!!!';
    // }
    else{
        display.textContent='FAILED!!! WRONG AMOUNT!!';
    }
}
