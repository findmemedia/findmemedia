import { useLocation } from 'react-router-dom'

export default function Info(props) {
    const info = useLocation().state

    return (
        <div>
            <h1>{info.title}</h1>
        </div>
    )
}