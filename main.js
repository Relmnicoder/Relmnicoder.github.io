var clickedOn = 1;
var wrapper = document.getElementById("wrapper");
var btn = document.getElementById("btn")
btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + clickedOn + '.json')

    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHtml(ourData);
    };

    ourRequest.send();
    clickedOn++;
    if (clickedOn > 3) {
        btn.classList.add("hidden")
    }
})

function renderHtml(data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }

        htmlString += " and dislikes "

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }
        htmlString += '.</p>';

    }
    wrapper.insertAdjacentHTML('beforeend', htmlString);
}