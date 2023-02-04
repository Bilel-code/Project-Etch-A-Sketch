
window.onload = function() {
    var squares = document.querySelectorAll(".grid-item");
      for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", function(event) {
          event.target.style.backgroundColor = "black";
        });
      }

      document.querySelector("#new-grid-button").addEventListener("click", function() {
        var size = parseInt(prompt("Enter the number of squares per side (maximum 100):"));
        if (isNaN(size) || size <= 0 || size > 100) {
          alert("Invalid input. Please enter a positive integer between 1 and 100.");
        } else {
          while (document.querySelector(".grid-container").firstChild) {
            document.querySelector(".grid-container").removeChild(document.querySelector(".grid-container").firstChild);
          }
          for (var i = 0; i < size * size; i++) {
            var div = document.createElement("div");
            div.setAttribute("class", "grid-item");
            div.addEventListener("mouseover", function(event) {
              event.target.style.backgroundColor = "black";
            });
            document.querySelector(".grid-container").appendChild(div);
          }
          document.querySelector(".grid-container").style.gridTemplateColumns = `repeat(${size}, 1fr)`;
          document.querySelector(".grid-container").style.gridTemplateRows = `repeat(${size}, 1fr)`;
        }
      });

      document.querySelector("#change-color-button").addEventListener("click", function() {
        var color = prompt("Enter the new color:");
        var squares = document.querySelectorAll(".grid-item");
        for (var i = 0; i < squares.length; i++) {
          squares[i].style.backgroundColor = color;
        }
      });

      
    }
