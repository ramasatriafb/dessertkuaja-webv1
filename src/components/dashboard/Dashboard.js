import React, { Component } from 'react'
import Notifications from './Notifications'
import RecipeList from '../recipes/RecipeList'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { recipes } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
            <div className="col s12 m6">
              <RecipeList  recipes = {recipes}/>
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications />
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipe.recipes
  }
}

export default connect(mapStateToProps)(Dashboard)
