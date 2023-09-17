// var name = document.getElementById("name")
// var email = document.getElementById("email")
// var password = document.getElementById("pass")
// var cpass = document.getElementById("cpass")
// var submitbtn = document.getElementById("submitbtn")
// var errors = document.getElementById("formerror")

function setError(id, error) {
    
}

function validateForm() {
    var returnVal = true;
    var name = document.forms["myForm"]["Name"].value
    if(name.length<5){
        console.log("Error")
    }
    var name = document.forms["myForm"]["Email"].value
    console.log(name)
    var name = document.forms["myForm"]["Password"].value
    console.log(name)
    var name = document.forms["myForm"]["cPassword"].value
    console.log(name)
    return false;
}