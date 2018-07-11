/* Login */
function login() {
    var login = prompt("Login");
    var pass = prompt("Password");
    
    var loginName = "sitelite";
    var passName = "password";

    if(login == loginName && pass == passName) {
        document.getElementById("usrName").innerHTML = "Hello, " + loginName + "!";
    }
    else{
        alert("Wrong username or password!");
    }
}
