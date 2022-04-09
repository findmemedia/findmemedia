export default function FillItem(props) {
    const behavior = (apiStr) => {
        fetch(apiStr)
            .then(res => res.json())
            .then(res => props.setRes(res));
    }
    return (
        <div className='fillitem' onClick={() => behavior(props.apiStr + props.text)} >
            <div className='fillitem-text'>{props.text}</div>
        </div>
    );
}