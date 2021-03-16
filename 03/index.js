function validateForm() {
    var email = document.getElementById('email').value;
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return true}
        else{

        
      alert("Invalid email id");}
      
      
    }
  return false;
}