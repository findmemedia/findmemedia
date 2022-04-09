import { useState } from 'react';
import SearchBox from './SearchBox/SearchBox';
import './search.css';

export default function SearchBar(props) {
    const [query, setQuery] = useState(''); //NOTE: query not needed until button/enter search is implemented
    const [autofill, setAutofill] = useState([]);
    return (
        <div className='searchbar'>
            <input type='text' onChange={(text) => {
                setQuery(text.target.value);
                props.fillBehavior(text.target.value, setAutofill);
            }} />
            <SearchBox autofill={autofill} setRes={props.setRes} apiStr={props.apiStr} textProp={props.textProp} />
        </div>
    );
}