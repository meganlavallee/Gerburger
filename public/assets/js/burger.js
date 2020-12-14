// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $(".delquote").on("click", function (event) {

    var id = $(this).attr("data-id");

    // Delete Request
    $.ajax("/api/burger" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted id ", id);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burgername: $("#auth").val().trim(),
      burgerauth: $("#quo").val().trim()
    };

  // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  // Send the PUT request.
  $.ajax("/api/burger/" + id, {
    type: "PUT",
    data: newBurger
  }).then(
    function () {
      console.log("burger name", newBurger);
      location.reload();
    }
  );

});