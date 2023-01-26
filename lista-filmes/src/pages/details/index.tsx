import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_KEY } from "../../config/config";
import { Container } from "../details/components/styles";


export default function Details(){

    const image_path = "https://image.tmdb.org/t/p/w500/";
    const [movie, setMovie] = useState<any>({});

    const { id } = useParams()    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
        .then(response => response.json())
        .then(data => setMovie(data))
    }, [id])

    

    return (
        <Container>
            <div className="movie">
                <img src={`${image_path}${movie.poster_path}`} alt={movie.overview}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.overview}</span>
                    <span className="release-date">Release date: {movie.release_date}</span>
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            </div>
        </Container>
    )
}