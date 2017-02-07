var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi"},
  { title: "The Lord of The Rings", year: "2001", length: "228", rating: "8.8", genre: "fantasy"}
];

function getMovieTitle( index ){
  return movieList[index].title;
}

console.log(getMovieTitle(3));

function addMovie( movie ){
  movieList.push(movie);
  return movieList;
}
var newMovie = {title: "La La Land", year: "2017", length: "228", rating: "9.0", genre: "romantic"};
console.log(JSON.stringify(addMovie(newMovie)));

function movieByRating(){
  movieList.sort(function(a, b) { return a.rating - b.rating });
  return JSON.stringify(movieList);
}

console.log(JSON.stringify(movieByRating()));

function findByTitle( s_title ){
	var found = [];
     var f = 0;
	for (var i = 0; i < movieList.length; i++){
          if (movieList[i].title.search(s_title) != -1){
               found[f] = movieList[i];
               f++;
  	 	}
  	}
  	return JSON.stringify(found);
}

console.log(findByTitle("Matrix"));
