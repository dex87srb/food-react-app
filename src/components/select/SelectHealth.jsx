const SelectHealth = ({ name, value, handleChangeHealth }) => (
    <select name={name} value={value} onChange={handleChangeHealth} id="health">
        <option disabled >HEALTH</option>
        <option value="alcohol-free">Alcohol free</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="peanut-free">Peanuts</option>
    </select>

)

export default SelectHealth;