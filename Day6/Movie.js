// //he class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String 
//representing the title of the movie, a String representing the studio, 
//and a String representing the rating as its arguments, and sets the 
//respective class properties to these values.

//b) The constructor for the class Movie will set the class property 
//rating to "PG" as default when no rating is provided

//c) Write a method getPG, which takes an array of base type Movie as its 
//argument, and returns a new array of only those movies in the input 
//array with a rating of "PG". You may assume the input array is full 
//of Movie instances. The returned array need not be full.

//d) Write a piece of code that creates an instance of the class Movie 
//with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {

constructor(title, studio, rating = "PG") {

this.title = title;

this.studio = studio;

this.rating = rating;

}

static getPG(movies) {

return movies.filter(movie => movie.rating === "PG");

}

}

const casinoRoyale = new Movie("Casino Royale”, “Eon Productions”, “PG-13”);

console.log("Title:", casinoRoyale.title);

console.log(“Studio:”, casinoRoyale.studio);

console.log(“Rating:”, casinoRoyale.rating);

const moviesArray = [

new Movie(“Movie1”, “Studio1”, “PG”),

new Movie(“Movie2”, “Studio2”, “PG-13”),

new Movie(“Movie3”, “Studio3”, “R”),

];

const pgMovies = Movie.getPG(moviesArray);

console.log(“PG Rated Movies:”);

pgMovies.forEach(movie => {

console.log(“Title:”, movie.title, “| Studio:”, movie.studio, “| Rating:”, movie.rating);

});

class Person {

constructor(name, age, occupation) {

this.name = name;

this.age = age;

this.occupation = occupation;

}

}

const person = new Person(“John Doe”, 30, “Software Engineer”);

console.log(“Name:”, person.name);

console.log(“Age:”, person.age);

console.log(“Occupation:”, person.occupation);