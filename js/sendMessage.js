// http://jsfiddle.net/228d4snb/
var message = "";

$("#sendMessage").on("click", function() { 
    message = $("#contactform").serialize(); 
    alert(message);
    $.ajax({
        url: "https://formspree.io/mbjzwzpv", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    
    alert('Thanks for the email, we\'ll be in touch soon.');
    window.open("https://airmotiveservice.com/", "_self");
    return false;
});	