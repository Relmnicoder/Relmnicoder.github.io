
$(document).ready(function () {
    $("#btnSearch").click(function () {
        var searchResult = $("#usr").val();
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "http://samples.openweathermap.org/data/2.5/weather?q="+searchResult+",uk&appid=b34df3818e00c38fd96d86faf15835d4",
            success: function (data) {
                console.log(data)
            }
        })
    });
});