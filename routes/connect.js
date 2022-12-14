function checkAdminRights(){
  var adminEmail = "diellonbytyqi14@gmail.com"
  var adminPassword = "h72hn4dnqx"
  let a = document.forms["myForm"]["email"].value;
  let b = document.forms["myForm"]["password"].value;
  if(a = adminEmail){
    if(b = adminPassword){
    // Set the new URL to redirect the user to
    var newUrl = 'http://127.0.0.1:3000/index.html';
    // Redirect the user to the new URL
    window.location.replace(newUrl);
    }else{
      return validateForm();
    }
  }
}
function validateForm() {
  let x = document.forms["myForm"]["email"].value;
  let y = document.forms["myForm"]["password"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }else{
    if(y=="") {
      alert("Password must be filled out");
      return false
    }else{
    // Set the new URL to redirect the user to
    var newUrl = 'http://127.0.0.1:3000/index.html';
    // Redirect the user to the new URL
    window.location.replace(newUrl);
    }
  }
}