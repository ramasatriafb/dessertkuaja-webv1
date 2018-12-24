import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        namaDepan: '',
        namaBelakang: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <div>
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="namaDepan">Nama Depan</label>
                    <input type="text" id="namaDepan" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="namaBelakang">Nama Belakang</label>
                    <input type="text" id="namaBelakang" onChange={this.handleChange} />
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

export default SignUp
