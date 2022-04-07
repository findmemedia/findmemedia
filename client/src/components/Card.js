import React from "react";

export default function Card(props) {
    return (
        <div className="movie-card">
            <img src={props.imgSrc} />
        </div>
    );
}
