import { useLocation } from 'react-router-dom';

export default function Info() {
    const media = useLocation().state;
    return (
        <div>
            <h1>{media.title}</h1>
        </div>
    )
}