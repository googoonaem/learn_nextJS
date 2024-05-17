import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export async function generateMetadata({params: {id}}) {
    const movie = await getMovie(id);
    return {
        title: `MOVIE: ${movie.title}`,
    }
}

export default async function MovieDetail({params:{id}}) {
    return (
        <div>
            <Suspense fallback={<h2>Loading movie poster...</h2>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h2>Loading movie videos...</h2>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}