 import React from 'react'
 import RecipeSummary from './RecipeSummary'
import { Link } from 'react-router-dom'

 const RecipeList = ({ recipes }) => {
     return (
         <div className="recipe-list section">
            { recipes && recipes.map(recipe => {
                return (
                    <Link to={'/resep/' + recipe.id } key={recipe.id}> 
                    <RecipeSummary recipe={recipe} />
                    </Link>
                )
            })}
          
           
         </div>
     )
 } 

 export default RecipeList