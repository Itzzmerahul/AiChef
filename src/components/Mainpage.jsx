import React from "react"
import ChefClaude from "./ChefClaude"
import RecipeShown from "./RecipeShown"
import { getRecipeFromMistral } from "./ai"


export default function Mainpage(){
    const [ingredients,setIngredient]=React.useState([])

    const [recipe,setrecipe]=React.useState(false)

    const recipeli=React.useRef(null)

    React.useEffect(()=>{
        if (recipe !== "" && recipeli.current !== null) {
            recipeli.current.scrollIntoView({behavior:"smooth"})
        }
    })

     const ingredientslist=ingredients.map((item)=>{
        return <li key={item}>{item}</li>
    })
    
    
    function handlesubmit(e){
        e.preventDefault()
        const formData = new FormData(e.target)
        const newIngredient=formData.get("ingredient")
        setIngredient(prevIngredient=>[...prevIngredient,newIngredient])
        
        
    }

    async function getrecipe(){
        const recipecon=await getRecipeFromMistral(ingredients)
        setrecipe(recipecon)
        console.log(recipecon)
    }

    return(
        <main >
            <form className="form" onSubmit={handlesubmit}>
                <input 
                type="text"
                placeholder="ex origano"
                aria-label="Add Ingredient"
                name="ingredient"
                >
                </input>
                <button>Add ingredient</button>
            </form>
           {ingredientslist.length>0 && <RecipeShown ref={recipeli} getrecipe={getrecipe} ingre={ingredients} il={ingredientslist} />}
            {recipe &&  <div className="chef-container"><ChefClaude recipe={recipe}/> </div>}
        </main>
    )
}
