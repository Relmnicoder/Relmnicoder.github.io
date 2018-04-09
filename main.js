$("#btnSearch").click(function () {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b34df3818e00c38fd96d86faf15835d4",
        success: function (data) {
            console.log(data)
          }
    })
  })