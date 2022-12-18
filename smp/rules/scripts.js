function getUserTimezone() {
    var now = new Date();
    var a = now.toString().split(" ");
    var timezoneString = "";
    for (var i = 6; i<a.length; i++) {
        timezoneString += (a[i] + " ");
    }
    timezoneString = timezoneString.replace("(", "").replace(")", "");
    document.getElementById("timezone").innerHTML = timezoneString;
}
function getTimeOffset() {
    var now = new Date();
    var offset = now.getTimezoneOffset();
    startTime = 24 * 60;
    startTime -= offset;
    startTime /= 60;
    startTime = Math.floor(startTime);
    console.log(startTime);
    while (startTime >= 24) startTime -= 24;
    while (startTime < 0) startTime += 24;

    if (startTime >= 12 && startTime < 24) {startTime -= 12; startTime += " p.m.";}
    else startTime += " a.m.";

    endTime = 26 * 60;
    endTime -= offset;
    endTime /= 60;
    endTime = Math.floor(endTime);
    console.log(endTime);
    while (endTime >= 24) endTime -= 24;
    while (endTime < 0) endTime += 24;

    if (endTime >= 12 && endTime < 24) {endTime -= 12; endTime += " p.m.";}
    else endTime += " a.m.";

    document.getElementById("start-time").innerHTML = startTime;
    document.getElementById("end-time").innerHTML = endTime;
}
getUserTimezone();
getTimeOffset();