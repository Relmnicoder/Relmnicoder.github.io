$.ajax("info.txt").done(function(data) {
    $("p").html(data);
})
.fail(function() {
    alert("could not get data");
  });

function isEmail(email) {
   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   return regex.test(email);
} 

$("#submit").click(function() {
    var errorMessage = "";
    if (isEmail($("#email").val()) == false) {
        errorMessage += "<p>Your email address is not valid </p>"
    }
    if ($.isNumeric($("#tel").val()) == false) {
        errorMessage += "<p>Your Telefon Number is not valid </p>"
    }
    if ($("#pass").val() != $("#pass2").val()) {
        errorMessage += "<p>Your passwords do not match </p>"
    }
    alert(errorMessage);
  });  