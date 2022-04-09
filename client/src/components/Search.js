import { useState } from 'react';
import Card from './Card';
import QueryFill from './QueryFill';

export default function Search() { //TODO: Split Search into more components, and make everything more reusable
    const [mediaResponse, setMediaResponse] = useState([]);
    const [query, setQuery] = useState(''); //query not needed unless enter/button is functioning
    const [autofill, setAutofill] = useState([]);
    return (
        <div>
            <input type='text' onChange={(text) => {
                setQuery(text.target.value);
                fetch(`/autofill?input=${text.target.value}&limit=${5}`) //TODO: Update limit based on how much of screen is visible?
                    .then(res => res.json())
                    .then(setAutofill);
            }} />
            {autofill.map((item) => <QueryFill title={item.title} setResponse={setMediaResponse} />) /* TODO: Break autofill stuff into 1-2 components */} 
            {mediaResponse.map((item) => <Card media={item} />)}
        </div>
    );
}