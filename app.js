// var newDate = new Date();
// var a =newDate.toString();
// var x = a.slice(0,3);
// document.write(x)

// var newDate = new Date();
// newDate.setDate(20)
// document.write(newDate)
// document.write(newDate.getMilliseconds())
// document.write(newDate)

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write(nameOfToday)

var today = new Date();
var todaymili  = today.getTime()

var dob = new Date("Oct 8, 2007")
var dobmili = dob.getTime()

var minus = todaymili - dobmili

var cmp = minus / (1000 * 60 * 60 * 24 * 30 * 12)
var acha = Math.floor(cmp)

document.write(acha)