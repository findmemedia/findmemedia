import FillItem from './FillItem/FillItem';
import '../search.css';

export default function SearchBox(props) {
    return (
        <div className='searchbox'>
            {props.autofill.map((item) => <FillItem text={item[props.textProp]} setRes={props.setRes} apiStr={props.apiStr} />)}
        </div>
    );
}