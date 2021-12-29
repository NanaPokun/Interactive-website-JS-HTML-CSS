document.querySelector('#submit').addEventListener('click', validateForm);

function validateForm(){
  var username = document.querySelector('#username').value;
  var password = document.querySelector('#password').value;
  if (username === 'username' && password === 'password') {
    document.querySelector('#sucess').onclick = function () {
      location.href = "welcome.html";
    };
    // redirect or submit 
  }
  else {
    document.querySelector('#error').textContent = 'invalid credentials';    
  }
}

// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// if ( username == "Micadu" && password == "miCadu123#"){
// alert ("Successfully signed in");
// // Redirecting to other page.
// window.location = "welcome.html"; 
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").onclick = function () {
//   location.href = "welcome.html";
// };

// return false;
// }
// }
// }

// document.getElementById("submit").onclick = function () {
//   location.href = "welcome.html";
// }; 