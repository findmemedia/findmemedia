import movie from "../movie.json"

export default function Info() {
    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.imgSrc} alt=""/>
        </div>
    );
}