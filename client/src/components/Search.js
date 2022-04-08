import { useState } from 'react';
import Card from './Card';

const NO_MEDIA = "https://media.discordapp.net/attachments/192431179876532226/961744120248930404/NoMedia.png?width=600&height=900";

export default function Search() {
    const [mediaResponse, setMediaResponse] = useState([]);
    const [query, setQuery] = useState(['']);
    return (
        <div>
            <input type='text' onChange={text => setQuery(text.target.value)} />
            <button title='Click' onClick={() => {
                fetch(`/algorithm/?title=${query}`)
                    .then(response => response.json())
                    .then(setMediaResponse);
            }}>Search</button>
            {mediaResponse.map((item) => <Card media={item} NO_MEDIA={NO_MEDIA} />)}
        </div>
    );
}