import { Link } from "react-router-dom";

const NO_MEDIA = "https://media.discordapp.net/attachments/192431179876532226/961744120248930404/NoMedia.png?width=600&height=900";

export default function Card(props) {
    return (
        <div className="movie-card">
            <Link to={"/info"} state={props.media}>
                <img onError={img => img.target.src = NO_MEDIA} src={props.media.poster} />
            </Link>
        </div>
    );
}