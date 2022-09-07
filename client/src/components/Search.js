import { useState } from 'react'
import Card from './Card';
import Autofill from './Autofill';

export default function Search() {
    const [mediaResponse, setMediaResponse] = useState([]);
    const [autofill, setAutoFill] = useState([]);
    const [query, setQuery] = useState('');

    return (
        <div>
        <input type='text' onChange={(text) => {
            setQuery(text.target.value);
            console.log(`http://localhost:8080/api/autofill?title=${query}`)
            fetch(`http://localhost:8080/api/autofill?title=${query}`)
            .then(response => response.json())
            .then(setAutoFill);
            console.log(autofill)
        }} />
        {autofill.map((item) => <Autofill text={item.title}/>)}
        <button title='Click' onClick={() => {
            fetch(`http://localhost:8080/api/algorithm?title=${query}`)
            .then(response => response.json())
            .then(setMediaResponse)
        }}>Search</button>
        {mediaResponse.map((item) => <Card imgSrc={item.poster}/>)}
        </div>
    )}