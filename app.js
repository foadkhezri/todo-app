// declarations
let body = document.querySelector("body");
let toDoStrings = [];

// functions

function initialize() {
  $("#input-to-do").css("display", "none");
  $("#toggler").on("click", setInputDisplay);
  $("#input-to-do").on("keyup", function(event) {
    addContent(event);
  });
  $(".content-container").on("click", ".content", doneTodo);
  $(".content-container").on("click", ".delete-btn", deleteToDo);
  $(".content-container").on("mouseout", ".content", displayDeleteBtn);
  $(".content-container").on("mouseover", ".content", displayDeleteBtn);
}

function setInputDisplay() {
  $("#input-to-do").slideToggle(500);
}

function addContent(event) {
  let resultContent = "";
  let description = validation(event);
  if (description) {
    resultContent = createContent(description);
    $(".content-container").append(resultContent);
  }
}

function doneTodo() {
  $(this).toggleClass("done");
}

function displayDeleteBtn() {
  $(this)
    .children()
    .first()
    .toggleClass("block");
}

function validation(event) {
  let value;
  let length = toDoStrings.length;
  if (event.keyCode === 13 && $("#input-to-do").val() != "") {
    for (let i = 0; i < length; i++) {
      if (toDoStrings[i] === $("#input-to-do").val()) {
        return "";
      }
    }
    value = $("#input-to-do").val();
    toDoStrings.push(value);
    $("#input-to-do").val("");
    return value;
  }
}

function createContent(desc) {
  return (
    '<div class="content"><a href="#" class="delete-btn"><i class="fas fa-trash-alt"></i></a><p>' +
    desc +
    "</p></div>"
  );
}

function deleteToDo() {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
}

// main

$(document).ready(initialize);
