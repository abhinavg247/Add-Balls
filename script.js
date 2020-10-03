var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];
var capacity = 32;
var balls = 0;

$("button").on("click", function()
{
    if(balls == capacity)
    {
        capacity *= 2;
        var h = $("#container").height();
        $("#container").height(2*h);
    }
    balls++;
    var colorball = colors[Math.floor(Math.random()*colors.length)];
    var temp = $("<div class='ball' style='background-color: red;'></div>")
    temp.appendTo("#container");
    temp.css("background-color", colorball);
});