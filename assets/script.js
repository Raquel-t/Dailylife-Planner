// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

(function ($) { 
var today = dayjs().format()
$("#currentDay").text(today)
  console.log("Banana");
  var storage = localStorage.getItem("dailySchedule") ? JSON.parse(localStorage.getItem("dailySchedule")) : [] 

  function creatCalender (){
    for (let index = 9; index < 18; index++) {
      var timeBlock = $("<div>")
      timeBlock.addClass("row time-block")
      timeBlock.attr("id", "hour-" +index)

      var hourBlock = $("<div>")
      hourBlock.addClass("col-2 col-md-1 hour text-center py-3")
      hourBlock.text(dayjs().hour(index).format("h A"))

      var textBlock = $("<textarea>")
      textBlock.addClass("col-8 col-md-10 description")

      var button = $("<button>")
      button.addClass("btn saveBtn col-2 col-md-1")
      button.html('<i class="fas fa-save" aria-hidden="true"></i>')

      timeBlock.append(hourBlock).append(textBlock).append(button)
      $(".container-lg").append(timeBlock)
    }
  } creatCalender()
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $('.time-block .saveBtn').on('click', function() {
      var textarea = $(this).closest('.time-block').find('textarea');
      var key = $(this).closest('.time-block').attr('id');
      var value = textarea.val();
      localStorage.setItem(key, value);
    });
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    var currentTime = dayjs().hour();
    $(".time-block").each(function() {
      var blockTime = parseInt($(this).attr("id").split("-")[1])
      console.log ($(this))

      if (currentTime > blockTime){
        $(this).addClass("past")
      }else if (currentTime === blockTime) {
        $(this).removeClass("past")
        $(this).addClass("present")
      }else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }
    });
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    $(document).ready(function() {
      $('.time-block textarea').each(function() {
        var key = $(this).closest('.time-block').attr('id');
        var value = localStorage.getItem(key);
        if (value) {
          $(this).val(value);
        }
      });
    });
    // TODO: Add code to display the current date in the header of the page.
    document.addEventListener("click", function(event) {
    console.log(event.target.value);
    } )
  })(jQuery)
  
  // 

