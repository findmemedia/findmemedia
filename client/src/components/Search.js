import { useState } from 'react';
import Card from './Card';

export default function Search() { //TODO: Split Search into more components, and make everything more reusable
    const [mediaResponse, setMediaResponse] = useState([]);
    const [query, setQuery] = useState('');
    const [autofill, setAutofill] = useState([]);
    return (
        <div>
            <input type='text' onChange={(text) => {
                setQuery(text.target.value);
                fetch(`/autofill?input=${text.target.value}&limit=${5}`) //TODO: Update limit based on how much of screen is visible?
                    .then(res => res.json())
                    .then(setAutofill);
            }} />
            <button title='Click' onClick={() => {
                fetch(`/algorithm?title=${query}`)
                    .then(res => res.json())
                    .then(setMediaResponse);
            }}>Search</button>
            {autofill.map((item) => <h1>{item.title}</h1>) /* TODO: Break autofill stuff into 1-2 components */} 
            {mediaResponse.map((item) => <Card media={item} />)}
        </div>
    );
}