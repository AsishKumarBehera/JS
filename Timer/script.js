const endDate = new Date("5 march, 2025 21:05:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
    const currentTime = new Date().getTime();
    // console.log(currentTime)
    const distanceCovered = currentTime - startDate;
    const distancePending = endDate - currentTime;


    const days = Math.floor(distancePending / (24 * 60 * 60 * 1000));
    const hrs =  Math.floor(distancePending % (24 * 60 * 60 * 1000)/(60 * 60 * 1000));
    const mins =  Math.floor(distancePending % (60 * 60 * 1000)/(60 * 1000));
    const secs =  Math.floor(distancePending % (60 * 1000)/(1000));


    // display in website

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs ;

    const totalDistance = endDate - startDate;

    const percentageDistance = (distanceCovered/totalDistance) * 100;

    // set width for progress bar 
    document.getElementById('progress-bar').style.width = percentageDistance + '%';

    if(distancePending < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = 'EXPIRED';
        document.getElementById("progress-bar").style.width = '100%';
    }
}
, 1000);