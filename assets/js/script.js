

// dayjs plugin for dayjs ordinal(1st, 2nd, 3rd, 4th) in currentDay text
dayjs.extend(window.dayjs_plugin_advancedFormat);


// This formats the #currentDay id to be this format - Tuesday 23rd January 2024 
$('#currentDay').text(dayjs().format('dddd Do MMMM YYYY'));

// Recommended to contain jquery within this document function as it will only run once the DOM is ready for Javascript to execute
$(document).ready(function() {

// Formats currentTime Variable in hours - DayJS
    var currentTime = dayjs().format("H");
    
// Function to track which blocks should be past, present or future
    function timeBlockColor() {
        $(".time-block").each(function() {
            var blockTime = parseInt(this.id);
            $(this).toggleClass("past", blockTime < currentTime);
            $(this).toggleClass("present", blockTime === currentTime);
            $(this).toggleClass("past", blockTime > currentTime);
        });
    }

// Function to save users text input in local storage when the save button is clicked
    function placeHolderText() {
        $(".saveBtn").on("click", function() {
            var key = $(this).parent().attr("id");
            var value = $(this).siblings(".description").val();
            localStorage.setItem(key, value);
        });
    }
// Function to refresh based on if it is the past future or present, it will add or remove whichever required classes defined in the function
    function colorRefresh() {
        $(".time-block").each(function() {
            var blockTime = parseInt(this.id);
            if (blockTime == currentTime) {
                $(this).removeClass("past future").addClass("present");
            } else if (blockTime < currentTime) {
                $(this).removeClass("future present").addClass("present");
            } else {
                $(this).removeClass("past present").addClass("future");
            }
        });
    }
// This ensures that the users input it still there when they come back making the save button useful.
    $(".time-block").each(function() {
        var key = $(this).attr("id");
        var value = localStorage.getItem(key);
        $(this).children(".description").val(value);
    });
    
//The functions run at the end of the code
    timeBlockColor();
    placeHolderText();
    colorRefresh();
});


