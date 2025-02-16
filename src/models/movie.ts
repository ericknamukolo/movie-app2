type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  runtime?: number | null;
  imdbRating?: number | null;
  userRating?: number | null;
};

export default Movie;
