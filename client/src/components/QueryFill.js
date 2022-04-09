export default function QueryFill(props) {
    return (
        <div onClick={() => {
            fetch(`/algorithm?title=${props.title}`)
                .then(res => res.json())
                .then(props.setResponse);
        }} ><h1>{props.title}</h1></div>
    );
}