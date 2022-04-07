import { useState } from 'react';
import Card from './Card';

const NO_MEDIA = "https://media.discordapp.net/attachments/192431179876532226/961744120248930404/NoMedia.png?width=600&height=900";

export default function Search() {
    const [mediaResponse, setMediaResponse] = useState([]);
    const [query, setQuery] = useState(['']);
    return (
        <div>
            <input type='text' onChange={e => setQuery(e.target.value)} />
            <button title='Click' onClick={() => {
                fetch(`/algorithm/?title=${query}`)
                    .then(response => response.json())
                    .then(setMediaResponse);
            }}>Click</button>
            {mediaResponse.map((item) => item.poster ? <Card imgSrc={item.poster} /> : <Card imgSrc={NO_MEDIA} />)}
        </div>
    );
}