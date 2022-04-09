import { useState } from 'react';
import SearchBar from '../components/Search/SearchBar';
import Carousel from '../components/Carousel/Carousel';

export default function Main() {
    const [mediaResponse, setMediaResponse] = useState([]);
    return (
        <div>
            <SearchBar setRes={setMediaResponse} apiStr='/algorithm?title=' textProp='title' fillBehavior={
                (val, set) => {
                    fetch(`/autofill?input=${val}&limit=${5}`) //TODO: Change limit based on page height
                        .then(res => res.json())
                        .then(res => set(res));
                }
            } />
            <Carousel res={mediaResponse} imgProp='poster' backupSrc='https://i.imgur.com/4Bnxfak.png' />
        </div>
    );
}