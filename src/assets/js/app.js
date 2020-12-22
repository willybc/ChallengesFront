// (function() {

// Start the countdown at 14 days in seconds (60*60*24*14)
var count = 1209600;
var time = [14, 0, 0, 0]; //Days, hours, minutes, seconds
var labels = ["days", "hours", "minutes", "seconds"];

// Update the count down every 1 second
var x = setInterval(function() {

  // Time calculations for days, hours, minutes and seconds
  var newTime = [];
  newTime[0] = Math.floor(count / (60 * 60 * 24));
  newTime[1] = Math.floor((count % (60 * 60 * 24)) / (60 * 60));
  newTime[2] = Math.floor((count % (60 * 60)) / (60));
  newTime[3] = Math.floor(count % 60);

  // Decrement the count by 1 second
  count--;
  // console.log(count);

  // Check for changes and execute animation
  time.forEach(function(v, k) {
    if (time[k] != newTime[k]) {
        // console.log(time[k]);
        // console.log(newTime[k]);
        time[k] = newTime[k];
        var element = document.getElementById("js-" + labels[k]);
        // console.log(element);
        element.textContent = time[k].toString();
        element.classList.toggle('js-flip');

        element.onanimationend = () => {
            element.classList.toggle('js-flip');
        };
    }
  })

  // If the count down is finished, clearInterval
  if (count < 0) {
    clearInterval(x);
  }
}, 1000);

// })();