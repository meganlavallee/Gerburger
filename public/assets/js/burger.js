// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function(){

    $(".delquote").on("click", function (event) {
      event.preventDefault();

      const id  = $(this).data("id");

  
// DELETE request.
      $.ajax( {
        url: "/api/delete-burger/" + id,
        method: "DELETE",
      }).then(function () {
        console.log("Deleted the Burger");
        location.reload();
      });
    });

  $(".devour").on("click", function (event) {
    event.preventDefault();
    let id = $(this).data("id");


// PUT request.
    $.ajax( {
      url: "/api/eat-burger/" + id,
      method: "PUT",
    }).then(function () {
      console.log("Nom Nom");
      location.reload();
    });
  });

//   Putting Entries On Form
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

// Defining New Burgers
    let  newBurger  = {
      burger_name: $("#auth").val().trim(),
      burger_name: $("#quo").val().trim(),
    };
    console.log(newBurger);

// POST request.
    $.ajax({
      url: "/api/add-burger",
      method: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Added for consumption!");
      location.reload();
    });
  });
});
