import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRecipe } from '../../store/actions/recipeActions';


class CreateRecipe extends Component {
    state = {
        namaResep: '',
        nutrisi: '',
        bahan: '',
        tataCara: '',
        kategori:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createRecipe(this.state)
    }
  render() {
    return (
      <div>
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Rekomendasi Resep</h5>
                <div className="input-field">
                    <label htmlFor="namaResep">Nama Resep</label>
                    <input type="text" id="namaResep" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="nutrisi">Nutrisi</label>
                    <textarea id="nutrisi" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                <div className="input-field">
                    <label htmlFor="bahan">Bahan</label>
                    <textarea id="bahan" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                <div className="input-field">
                    <label htmlFor="tataCara">Tata Cara</label>
                    <textarea id="tataCara" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                <div className="input-field">
                    <label htmlFor="kategori">Rekomendasi pada Gejala</label>
                    <input type="text" id="kategori" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn green lighten-1 z-depth-0"> Login</button>
                </div>
            </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createRecipe: (recipe) => dispatch(createRecipe(recipe))
    }
}

export default connect(null, mapDispatchToProps)(CreateRecipe)
