// current date
var currentDay = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDay);

// timeblocks
var hourBlock = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#hourBlock").text(hourBlock);