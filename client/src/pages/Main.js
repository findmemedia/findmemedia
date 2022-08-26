import { useState } from 'react';
import Card from '../components/Card'
import Searchbar from '../components/Searchbar';

export default function Main() {
const [mediaResponse, setMediaResponse] = useState([]);

    return (
        <div>
            <button title='Click' onClick={() => {
                fetch('http://localhost:8080/api/algorithm?title=Thor')
                .then(response => response.json())
                .then(setMediaResponse)
            }}>Thor</button>
            {mediaResponse.map((item) => <Card imgSrc={item.poster}/>)}
        </div>
    );
}