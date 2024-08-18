import './CarDetails.css'

const CarDetails = ({car}) => {
    
    return (
        <table class='cars_col'>
            <thead >
                <th>Mark</th>
                <th>Year of manufacture</th>
                <th>Color</th>
                <th>Volume</th>
                <th>Price</th>
            </thead>
            <thead>
                <td>{car.mark}</td>
                <td>{car.year_of_manufacture}</td>
                <td>{car.color}</td>
                <td>{car.volume}</td>
                <td>{car.price}</td>
            </thead>
            
            
        </table>
    )
}
export default CarDetails;