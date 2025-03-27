import Movie from '../models/movie';

const APIKEY = '74399d7d';

async function searchMovie(query: string): Promise<Movie[]> {
  try {
    const res: Response = await fetch(
      `http://www.omdbapi.com/?s=${query}&apiKey=${APIKEY}`
    );
    const data = await res.json();
    const movies: Movie[] = data.Search;

    return movies;
  } catch (e) {
    console.log(e);
  }
  return [];
}

export default searchMovie;
