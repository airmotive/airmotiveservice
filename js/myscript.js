function validateForm() {
    var x = document.forms["myForm"]["answer"].value.toLowerCase();	
    alert("validate...");									
    if (x !== "sky") {
        alert("Try Again! Where do we fly?");
        return false;
    }
}