const StarshipCard = ({ starship }) => {
    return (
        <div>
            <h3>{starship.name}</h3>
            <p>Class: {starship.class}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Model: {starship.model}</p>
        </div>
    );
};

export default StarshipCard;