function login(){
    let username=document.getElementById("user").value;
    localStorage.setItem("username",username);
    window.location.href="Company2.html";

    window.location.href = "Company2.html";
    return false;
}
