// import fuji from "../images/fuji.jpg";
export default function Card(props) {
    return (
        <div className="card-cont">
            <img src= {props.image}></img>
        
            <div>
                <h4 class="country">📍{props.country}</h4>
                <a href={props.link}>View on Google Maps</a>
                <h1>{props.title}</h1>
                <h4>{props.fromDate} - {props.tillDate}</h4>
                <p>{props.desc}</p>
            </div>
        </div>

    )
}