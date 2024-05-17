import MovieList from "../../components/movieList";
import styles from "../../styles/home.module.css";

export const metadata = {
    title: 'HOME',
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 3000)); //억지로 지연시키기
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();

    return (
        <div className={styles.container}>
            {movies.map((movie)=>(
                <MovieList key={movie.id}
                    id={movie.id} 
                    poster_path={movie.poster_path} 
                    title={movie.title} />
            ))}
        </div>
    )
}