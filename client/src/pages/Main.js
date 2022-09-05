import { useState } from 'react';
import Card from '../components/Card'
import Searchbar from '../components/Searchbar';

export default function Main() {
const [mediaResponse, setMediaResponse] = useState([]);
const [query, setQuery] = useState('');

    return (
        <div>
            <input type='text' onChange={text => setQuery(text.target.value)} />
            <button title='Click' onClick={() => {
                fetch(`http://localhost:8080/api/algorithm?title=${query}`)
                .then(response => response.json())
                .then(setMediaResponse)
            }}>Search</button>
            {mediaResponse.map((item) => <Card imgSrc={item.poster}/>)}
        </div>
    );
}