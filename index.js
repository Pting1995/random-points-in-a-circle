var canvas = document.getElementById("bellCanvas");
var ctx = canvas.getContext("2d");

var originX = 250;
var originY = 250;

function randomPointInCircle(originX, originY, radius, timesToRepeat) {
    console.log(radius, timesToRepeat)
    for (var i = 0; i < timesToRepeat; i++) {
        // picks a random spot in the circle
        var angle = Math.random() * Math.PI * 2;
        var distance = Math.random() * radius;
        var pointX = originX + distance * Math.cos(angle);
        var pointY = originY + distance * Math.sin(angle);
        // draws a dot
        ctx.beginPath();
        ctx.arc(pointX, pointY, 1, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
}

// tells user what the value of the slider is
var radius = document.getElementById("radius");
var radiusPlaceholder = document.getElementById("radiusPlaceholder");
var radiusValue = radius.value;
radiusPlaceholder.innerHTML = radius.value;
radius.oninput = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    radiusPlaceholder.innerHTML = this.value;
    randomPointInCircle(originX, originY, radius.value, timesToRepeat.value)
}


var timesToRepeat = document.getElementById("timesToRepeat");
var timesToRepeatPlaceholder = document.getElementById("timesToRepeatPlaceholder");
var timesToRepeatValue = timesToRepeat.value
timesToRepeatPlaceholder.innerHTML = timesToRepeat.value;
timesToRepeat.oninput = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    timesToRepeatPlaceholder.innerHTML = this.value;
    randomPointInCircle(originX, originY, radius.value, timesToRepeat.value)
}


