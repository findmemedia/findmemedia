import { Link } from 'react-router-dom';
import '../carousel.css';

export default function Card(props) {
    if (!props.imgSrc) props.imgSrc = props.backupSrc;
    return (
        <div className='card'>
            <Link to={'/info'} state={props.data}>
                <img src={props.imgSrc} onError={img => img.target.src = props.backupSrc} />
            </Link>
        </div>
    );
}