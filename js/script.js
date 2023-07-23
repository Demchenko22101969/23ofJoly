const numberOfFilms = +prompt("How many films did you watch?","");
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privet : false,
};
const a=prompt("What was the last movie you watched?",""),
    b=prompt("Did you like this movie?",""),
    c=prompt("What was the last movie you watched?",""),
    d=prompt("Did you like this movie?","");
    personalMovieDB.movies[a]=b;
    personalMovieDB.movies[c]=d;
    console.log(personalMovieDB);