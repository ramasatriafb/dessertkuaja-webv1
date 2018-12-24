import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/layout/Navbar'

class App extends Component {
  componentDidMount(){
    document.title = "DessertKuAja"
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App"> 
         <Navbar />
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
