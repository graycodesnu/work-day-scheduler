// current date
var currentDay = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDay);

// Color-code time blocks relative to current time 

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


