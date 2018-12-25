import React from 'react'

const RecipeSummary = ({recipe}) => {
    return (
        <div className="card z-depth recipe-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{recipe.nama}</span>
                <p> {recipe.nutrisi}</p>
                <p className="grey-text"> 24 Desember 2018</p>
            </div>
        </div>
    )
}

export default RecipeSummary