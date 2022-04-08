export default function Card(props) {
    return (
        <div className="movie-card">
            <Link to="/info"><img onError={img => img.target.src = props.NO_MEDIA} src={props.media.poster} /></Link>
        </div>
    );
}