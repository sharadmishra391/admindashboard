document.getElementById("btn").addEventListener("click", add);

function add(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("psw").value;

  if (
    username === "" ||
    email === "" ||
    password === "" ||
    confirmpassword === ""
  ) {
    alert("All fields are mandatory");
    return;
  }

  if (password !== confirmpassword) {
    alert("Password doesnot match");
    return;
  }
 
  // set data to localstorage
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
 
  // redirect to login
  window.location.href = "login.html";
}