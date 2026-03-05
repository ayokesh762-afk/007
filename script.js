function registerUser(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let user = {
name:name,
email:email,
password:password
};

localStorage.setItem(email, JSON.stringify(user));

alert("Account created successfully!");

window.location.href="login.html";
}



function loginUser(e){

e.preventDefault();

let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

let storedUser = JSON.parse(localStorage.getItem(email));

if(storedUser && storedUser.password === password){

alert("Login successful!");

window.location.href="index.html";

}else{

alert("Invalid email or password");

}

}
