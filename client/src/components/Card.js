import React from "react";

function addDefaultSrc(e) {
}

export default function Card(props) {
    return (
        <div className="movie-card">
            <img onError={img => img.target.src = props.NO_MEDIA} src={props.imgSrc} />
        </div>
    );
}
