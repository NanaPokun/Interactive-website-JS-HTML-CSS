function myFunction(){
  const uname = document.getElementById("username").value;
  const pwd = document.getElementById("pwd1").value;
  if (uname == "" || pwd == ""){
    alert("Please enter username or password")
    return false;
  }
  else if (pwd == "" || pwd.lenght < 8 || pwd.lenght > 8){
    alert("Please enter a password")
    return false;
  }
  else{
    alert("Successfully logged-in, Redirecting to home page")
    document.getElementById("myButton").onclick = function(){
      window.location.href = "welcome.html"
    };
  } 
}

function clearFunc()
{
  document.getElementById("username").value="";
  document.getElementById("pwd1").value="";
}
