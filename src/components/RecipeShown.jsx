import ReactMarkdown from 'react-markdown'

export default function RecipeShown(props){
   

    return(
        <section className="recipe1">
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{props.il}</ul>
                {props.ingre.length>3 && <div className="get-recipe-container">
                    <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getrecipe} className="get-recipe-btn">Get a recipe</button>
                </div>}
            </section>
    )
}