
$(function () {
  // Add a listener for click events on the save button.
  $('.saveBtn').on('click', function() {
    // Get the description from the textarea in the same time-block.
    const description = $(this).siblings('.description').val();
    // Get the id of the containing time-block.
    const timeBlockId = $(this).parent().attr('id');
    // Save the user input in local storage using the time-block id as the key.
    localStorage.setItem(timeBlockId, description);
  });


 var currentHour = dayjs().hour();
 
  // Loop through each time block
  $(".time-block").each(function() {
    var blockHour = $(this).data("hour");
    console.log(blockHour)
    // Add classes based on the current hour
    if (blockHour === currentHour) {
      $(this).addClass("present");
    } else if (blockHour < currentHour) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  });



  // Get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  $('.description').each(function() {
    const timeBlockId = $(this).parent().attr('id');
    const savedDescription = localStorage.getItem(timeBlockId);
    $(this).val(savedDescription);
  });

  $(".saveBtn").on("click", function() {
    var $textarea = $(this).siblings(".description");
    var userInput = $textarea.val().trim();
    var blockId = $textarea.closest(".time-block").attr("id");

    if (userInput !== "") {
      localStorage.setItem(blockId, userInput);
      // Display appointment added message
      $(".local-store").text("Appointment added to local storage✅").show();
  }
  
  });




  // Display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('MMMM D, YYYY hA'));
});


