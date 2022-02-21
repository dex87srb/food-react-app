export function Recipes(props) {
    const { recipe } = props.data;
    return (
        <div className="recipe-element" >

            <img src={recipe.image.toString()} alt="" />
            <label className="calories">{recipe.calories.toFixed(2)}</label>
            <label className="mainLabel">{recipe.label}</label>
            <div className="labels">
                {recipe.healthLabels.map((element, j) => {
                    return <label className="label" key={element + j}>{element}</label>
                })}

            </div>
        </div>

    );
}