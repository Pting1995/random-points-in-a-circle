var canvas = document.getElementById("bellCanvas");
var ctx = canvas.getContext("2d");

var originX = 250;
var originY = 250;

function randomPointInCircle(originX, originY, radius, timesToRepeat) {
    for (var i = 0; i < timesToRepeat; i++) {
        var angle = Math.random() * Math.PI * 2;
        var distance = Math.random() * radius;
        var pointX = originX + distance * Math.cos(angle);
        var pointY = originY + distance * Math.sin(angle);

        console.log(pointX)
        console.log(pointY)
        // make a dot at x,y
        ctx.beginPath();
        ctx.arc(pointX, pointY, 1, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
    }

}

randomPointInCircle(originX, originY, 200, 1000)