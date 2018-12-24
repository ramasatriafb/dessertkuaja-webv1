import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import RecipeDetails from './components/recipes/RecipeDetails'

class App extends Component {
  componentDidMount(){
    document.title = "DessertKuAja"
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App"> 
         <Navbar />
         <Switch>
           <Route exact path='/' component={Dashboard} />
           <Route path='/recipe/:id' component={RecipeDetails} />
         </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}
export default App;

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
