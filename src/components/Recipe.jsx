const Recipe = (props) => {
    return (
        <div className='Recipe'>
            <h1>{props.label}</h1><br/>
            <ul>
                {
                    props.ingredients.map((element, id) => {
                        return <li key={id}>{element}</li>
                    })
                }
            </ul><br/>
            <div>Calories: {props.calories}</div><br/>
            <img src={props.image} alt='recipeImage' />
        </div>
    )
}

export default Recipe;
