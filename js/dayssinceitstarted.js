let firstTime = new Date("2017-08-09");
let current = new Date();
let diffrence = current.getTime() - firstTime.getTime();
let days = Math.floor(diffrence / (1000 * 60 * 60 * 24));
document.write(days);
