import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

async function getMovie(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}
function vote_average(val) {
    let star = "";
    for (let i=0;i<=val;i++) {
        star += "🔥";
    }
    return star;
}

export default async function MovieInfo({id}) {
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img src={movie.poster_path} className={styles.poster} alt={movie.title}/>
            <div>
                <span>info</span>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>{vote_average(Math.floor(movie.vote_average))}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target="_blank">homepage&rarr;</a>
            </div>
        </div>
    )
}
