import { useState } from 'react'

import './App.css'
import ColorFilter from './ColorFilter';
import CarDetails from './CarDetails';

function App() {
  const [cars] = useState([
    {mark: 'Toyota Corolla', year_of_manufacture: '2022', color: 'red', volume: '1077-1987 см3 ', price: '952 085₴ '},
    {mark: 'Honda Civic Hatch', year_of_manufacture: '2021', color: 'blue', volume: '1993 см3 ', price: '974 310₴ '},
    {mark: 'Mersedes', year_of_manufacture: '2019', color: 'black', volume: '1874 см3 ', price: '894 310₴ '},

  ]);

  
  const [selectedColor, setSelectedColor] = useState('all');
  const filteredCars = selectedColor === 'all'
  ? cars
  :cars.filter(car => car.color === selectedColor)



  return (
    <div>
      <ColorFilter selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      <p>{filteredCars.length} car(s) found</p>
      <div>
        
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <CarDetails key={index} car={car}/>
          ))
        ) : (
          <p>No cars found for selected color</p>
        )}
        
      </div>


    </div>
  )


  
}

export default App
