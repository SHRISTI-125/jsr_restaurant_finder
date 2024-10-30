/* eslint-disable react/prop-types */
import "./Hotel.css";
export const Serialcard = ({data}) => {
    console.log(data);
    const { img_url, name, ratings, about, location} = data;
    return (
        <li className="card">
            <div>
                <img
                    src={img_url}
                    alt={name}
                    width="40%"
                    height="40%"
                />
            </div>
            <div className="card-content">
            <h2>Name: {name}</h2>
            <h3>Ratings: {ratings}</h3>
            <p style={{margin:"1.2rem 0"}}>About: {about}</p>
            <h5>Location: {location}</h5>
            </div>
            
        </li>
    );
};
