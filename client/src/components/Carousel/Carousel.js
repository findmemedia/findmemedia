import Card from './Card/Card';
import './carousel.css';

export default function Carousel(props) {
    return (
        <div className='carousel'>
            {props.res.map((item) => <Card data={item} imgSrc={item[props.imgProp]} backupSrc={props.backupSrc} />)}
        </div>
    );
}