//Business logic 
/*function Ticket
  this.movies =;
  this.movieId = 0
*/

function Movie(movieTitle, movieDescription, movieShowTime, movieRating) {
  this.movieTitle = movieTitle;
  this.movieDescription = movieDescription;
  this.movieShowTime = movieShowTime;
  this.movieRating = movieRating;
}

//Array with  individual movies objects
var movies = [
new Movie ("BladeRunner", "sci-fi", ["11 am", "1 pm",  "4 pm", "6 pm"], "R"),
new Movie ("theAvengers", "sci-fi", ["11 am", "1 pm",  "4 pm", "6 pm"], "PG-13"),
new Movie ("harryPotter", "fantasy", ["11 am", "1 pm", "4 pm", "6 pm"], "PG")
];
console.log(movies[1].movieTitle)

//can call a function in an object like this: 
//console.log(courses[1].updateViews());





  $(document).ready(function() {
    $("#avengers-img").click(function() {
      $("#movieSelection").text( movies[1].movieDescription +", " + movies[1].movieShowTime + ", " + movies[1].movieRating )
      
      console.log(movies[1].movieDescription)
    });
  });

