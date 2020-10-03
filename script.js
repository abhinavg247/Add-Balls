var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];
var capacity = 32;
var balls = 0;
const initial = $("#container").height();

$("button").on("click", function()
{
    if(balls == capacity)
    {
        capacity += 32;
        var h = $("#container").height() + initial;
        $("#container").height(h);
    }
    balls++;
    var colorball = colors[Math.floor(Math.random()*colors.length)];
    var temp = $("<div class='ball' style='background-color: red;'></div>")
    temp.appendTo("#container");
    temp.css("background-color", colorball);
});
