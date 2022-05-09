const SelectDiet = ({ name, value, handleChangeDiet }) => (
    <select name={name} value={value} onChange={handleChangeDiet} id="diet">
        <option disabled >DIET</option>
        <option value="balanced">Balanced</option>
        <option value="high-protein">High-Protein</option>
        <option value="low-carb">Low-Carb</option>
        <option value="low-fat">Low-Fat</option>
    </select>

)

export default SelectDiet;