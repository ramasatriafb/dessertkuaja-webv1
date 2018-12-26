import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux' 
import { firestoreConnect } from 'react-redux-firebase';


const RecipeDetails = (props) => {
  // const id = props.match.params.id;
  const { recipe } = props;
  if (recipe) {
    return (
    <div className="container section project-details" >
      <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title">{recipe.namaResep} </span>
            <p> {recipe.nutrisi}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <div> Posted by {recipe.namadepanAuthor} {recipe.namaBelakangAuthor}</div>
            <div> 24 Desember 2018</div>
        </div>
      </div>
    </div>
    )
  }
  // console.log(props);
  else{
    return (
      <div className="container recipe">
        <p> Loading recipe ...</p>
      </div>
    )
  }
  
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id ;
  const recipes = state.firestore.data.recipes;
  const recipe = recipes ? recipes[id] : null;
  return {
    recipe: recipe
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'recipes'}
  ]) 
)(RecipeDetails)
