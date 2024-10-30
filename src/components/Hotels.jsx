import hotelData from "../api/hotelData.json";
import { Serialcard } from "./Serialcard";

const Hotels = () => {
    return (
        <ul className="grid grid-three--cols">
            {hotelData.map((hotel) => (
                <Serialcard key={hotel.id} data={hotel} /> 
            ))}
        </ul>
    );
};

export default Hotels;


/*
There are many restaurants but I have included only 20 in this project.
*/



