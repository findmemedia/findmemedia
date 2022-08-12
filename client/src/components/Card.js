export default function Card(props) {
    return (
        <div className='card'>
            {/* <Link to={'/info'} state={props.data}> */}
                <img src={props.imgSrc} alt=""/>
            {/* </Link> */}
        </div>
    );
}
