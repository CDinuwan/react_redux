import myData from "../Data/myData";

const name = "Chanuka Dinuwan"; //This will be valida even this locate in out of the function
const position = "Software Engineer"

const myObj = {
    name: `${name}`,
    position: `${position}`,
    city: "Matara",
}

function Main({children, name, city, position}) {

    return(
        <div>
        <div>This is main component!</div>
        <p>{myObj.name}</p>
        <p>{myObj.position}</p>
        <p> {children} </p>
        <p> {myData?.city} </p>
        <p> {city} </p>

        <p> Chanuka Dinuwan </p>
        {MediaKeyStatusMap?.map(({name, city, position}, index) => {
            return <Main key={index} name={name} city={city} position={position} />
        })};
        </div>
    )
}

export default Main;