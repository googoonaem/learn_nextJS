"use client"

import Link from "next/link";
import styles from "../styles/movieList.module.css";
import { useRouter } from "next/navigation";

export default async function Movie({title, id, poster_path}) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`);
    };
    return (
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onClick} />
            <Link href={`/movies/${id}`}>
                {title}
            </Link>
        </div>
    )
}