$(document).ready(function() {

	var sizes = [1,2,4,6];
	             //red,       green,     blue,      yellow,    gray,      white
	var colors = ['#FF9999', '#99FF99', '#9999FF', '#FFFF4D', '#CCCCCC', '#FFFFFF'];

	var width = screen.width;
	var height = screen.height;

	for (var i = 0; i < 500; i++) {
		var left = randomIntFromInterval(0, width - 100);
		var top = randomIntFromInterval(0, height - 100);

		var color = colors[Math.floor(Math.random()*colors.length)];
		var size = sizes[Math.floor(Math.random()*sizes.length)];

		var star = "<div class='star' style='top:"+ top +"px; left:"+ left + "px;background-color:"+ color +";width:"+ size +"px;height:"+ size +"px;'></div>";

		$('body').append(star);
	};
});

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}