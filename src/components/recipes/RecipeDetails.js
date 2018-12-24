import React from 'react'

const RecipeDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title"> Judul Resep - {id }</span>
            <p> Itu</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <div> Posted by Me</div>
            <div> 24 Desember 2018</div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails
