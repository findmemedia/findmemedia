import React from "react";

function addDefaultSrc(e) {
        e.target.src = "https://media.discordapp.net/attachments/192431179876532226/961744120248930404/NoMedia.png?width=600&height=900"
}

export default function Card(props) {
    return (
        <div className="movie-card">
            <img onError={addDefaultSrc} src={props.imgSrc} />
        </div>
    );
}
