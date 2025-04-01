import Movie from '../models/movie';

const APIKEY = '74399d7d';

async function searchMovie(query: string): Promise<Movie[]> {
  try {
    const res: Response = await fetch(
      `http://www.omdbapi.com/?s=${query}&apiKey=${APIKEY}`
    );
    const data = await res.json();

    if (data.Response === 'False') {
      return [];
    }
    const movies: Movie[] = data.Search;

    return movies;
  } catch (e) {
    throw e;
  }
}

export async function getMovieDetails(id: string): Promise<Movie | null> {
  try {
    const res: Response = await fetch(
      `http://www.omdbapi.com/?i=${id}&apiKey=${APIKEY}`
    );
    const data = await res.json();

    if (data.Response === 'False') return null;

    return data;
  } catch (e) {
    throw e;
  }
}

export default searchMovie;
