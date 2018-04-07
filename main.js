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
    alert(isEmail($("#email").val()));
  });  

  $("#btn").click(function() {
    alert("oh wee");
  });  