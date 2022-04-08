import { useState } from 'react';
import Card from './Card';

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
            {mediaResponse.map((item) => <Card media={item} />)}
        </div>
    );
}