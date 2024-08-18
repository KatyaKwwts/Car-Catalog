

const ColorFilter = ({ selectedColor, setSelectedColor}) => {
    const colors = ['all', 'red', 'blue', 'black', 'grey'];

    return (
        <div>
            <label>Filter by color:</label>
            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                {colors.map((color)=>(
                    <option key={color} value={color}>
                        {color}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default ColorFilter;