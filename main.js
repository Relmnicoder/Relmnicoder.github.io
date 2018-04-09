
$(document).ready(function () {
    $("#btnSearch").click(function () {
        var searchResult = $("#usr").val();
        apiurl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchResult + "&appid=b34df3818e00c38fd96d86faf15835d4"
        var promised = promiseAjax();
        promised.done(function (data) {
            console.log(data)
        })
        promised.fail(function (data) {
            alert("Problem with connecting to API")
          })
    })
});
function promiseAjax() {
    return $.ajax({
        type: "GET",
        dataType: "json",
        url: apiurl,
    })
}