// current date
var currentDay = moment().format("MMMM Do YYYY");
("#currentDay").text(currentDay);

// Color-code time blocks relative to current time 
    // Create variable for times
var hourDisplay = document.querySelector(
    "#9AM #10AM #11AM #12PM #1PM #2PM #3PM #4PM #5PM"
);

var getIndex;
var currentTimeIndex;

// Create function to read time 
function currentTimeFormat(){
    getIndex = hourDisplay.indexOf(currentTimeFormat);
    currentTimeIndex = hourDisplay.indexOf(time);

    if (currentTime === time) {
        inputEl = `<input type='text' class='bg-danger col border p-3 note text-light' value=''/>`;
        } else {
        if (getIndex !== -1 && getIndex < currentTimeIndex) {
        } else {
            inputEl `<input type='text' class='bg-secondary col border p-3 note text-dark' value=''/>`;
        }
        }
};


// Save logged event to local storage
    // Read text input 
    // Link save button to local storage

// Create input variable 
var newEvent = document.querySelector ("#new-event");
// Create button variable 
var saveButton = document.querySelector("#save-btn");
// Create event listener 
saveButton.addEventListener("click") {
    // event.preventDefault();
    // Create saved input var
    var savedEvent = {
        input: newEvent.value.trim()
    };
    // Save to local storage
    localStorage.setItem("savedEvent", JSON.stringify(savedEvent));
};

    

// Refresh page and saved event persists
    // **I think this would be done with: init()**
init()


