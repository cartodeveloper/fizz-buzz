// your code here
// Function to render and call my game.
$(function () {
  $("#number-chooser").submit((event) => {
    // first event to prevent default
    event.preventDefault();

    $(".js-results").empty();
    const num = parseInt(
      $(event.currentTarget).find('input[name="number-choice"]').val()
    );

    // declaring teh variable on what I'm working on.
    let results = [];

    for (let i = 1; i <= num; i++) {
      // this loop is to know if the input num is divisible by 3 and 5,
      if (i % 15 === 0) {
        results.push(
          $('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>')
        );
      }

      // create a conditional to see if the input num is divisible just by 5.
      else if (i % 5 === 0) {
        results.push(
          $('<div class="fizz-buzz-item buzz"><span>buzz</span></div>')
        );
      }

      // create a conditional to see if the input num is divisible just by 3 and create a new fizz buzz element.
      else if (i % 3 === 0) {
        results.push(
          $('<div class="fizz-buzz-item buzz"><span>buzz</span></div>')
        );
      } else {
        results.push(
          $(
            `<div class="fizz-buzz-item"><span>${i}
       </span></div>`
          )
        );
      }

      $(".js-results").append(results);
    }
  });
});
