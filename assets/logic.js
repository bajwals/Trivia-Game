var vehicleList = [
    {
        make: "mitsubishi",
        origin: "japanese",
        src: "./assets/images/mistubishi.jpeg"
    },
    
    {
        make: "bmw",
        origin: "german",
        src: "./assets/images/bmw.jpg"
    },

    {
        make: "porsche",
        origin: "german",
        src: "./assets/images/porsche.jpg"
    },
    {
        make: "ford",
        origin: "american",
        src: "./assets/images/ford.jpg"
    },
    {
        make: "subaru",
        origin: "japanese",
        src: "./assets/images/subaru.jpg"
    },
    {
        make: "toyota",
        origin: "japanese",
        src: "./assets/images/toyota.jpg"
    },
    {
        make: "volvo",
        origin: "swedish",
        src: "./assets/images/volvo.jpg"
    }
];
var currentMake = "";
var currentOrigin = "";
var currentVehicleSRC = "";
function logMake(){
    for (var i = 0; i < vehicleList.length; i++) {
    var currentMake = vehicleList[i].make;
    console.log(currentMake)
    }
}

function logOrigin(){
    for (var i = 0; i < vehicleList.length; i++) {
    var currentMake = vehicleList[i].make;
    console.log(currentMake)
    }
}

function logSRC(){
    for (var i = 0; i < vehicleList.length; i++) {
    var currentVehicleSRC = vehicleList[i].src;
    console.log(currentVehicleSRC)
    }
}

logMake();

window.onload = function() {
  $("#stop").on("click", stopwatch.stop);
  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {
    time: 0,
    lap: 1,
    reset: function() {
    stopwatch.time = 0;
    // DONE: Change the "display" div to "00:00."
    $("#countdown-timer").text("00:00");
},
start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
},
stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
},
count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time++;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#countdown-timer").text(converted);
},
timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}
};