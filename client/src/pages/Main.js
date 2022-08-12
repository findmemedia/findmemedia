import Card from '../components/Card'
import movie from '../movie.json'

export default function Main() {
    return (
        <div>
            <h1>tes</h1>
            <Card imgSrc={movie.poster}/>
        </div>
    );
}