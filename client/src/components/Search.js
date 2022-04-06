import { useState } from 'react';

export default function Search() {
    const [mediaResponse, setMediaResponse] = useState();
    const [query, setQuery] = useState(['']);

    return (
        <div>
            <input type='text' onChange={e => setQuery(e.target.value)} />
            <button title='Click' onClick={() => {
                fetch(`/algorithm/?title=${query}`)
                    .then(response => response.json())
                    .then(setMediaResponse);
            }}>Click</button>
            <p>{JSON.stringify(mediaResponse)}</p>
        </div>
    )
}