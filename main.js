$(".toggleBtns").hover(function () {
    $(this).addClass("highlightedBtn");
}, function () {
    $(this).removeClass("highlightedBtn");
  });   
$(".toggleBtns").click(function() {
    $(this).toggleClass("active");
    $(this).removeClass("highlightedBtn");
    var panelId = $(this).attr("id") + "Panel";
    $("#" + panelId).toggleClass("hidden");
    var numberOfActivePanels = 4 - $('.hidden').length;
    $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
});
$(".panel").height($(window).height() - $("#header").height());
$(".panel").width(($(window).width() / 2) - 10);
$("iframe").contents().find("html").html($("#htmlPanel").val());

$("textarea").on('change keyup pase', function(){
    $("iframe").contents().find("html").html($("#htmlPanel").val());
});