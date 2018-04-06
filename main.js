$.ajax("info.txt").done(function(data) {
    $("p").html(data);
})
.fail(function() {
    alert("could not get data");
  });
