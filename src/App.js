import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './static/css/bootstrap.min.css'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
          
//           <h1 className="App-title">PORTFOLIO</h1>
//         </header>
//         <p className="App-intro">
//           Name : Ravitsara Ketkaew
//         </p>
//         <p className="App-intro">
//           Was born on July, 28. 1999
//         </p>
//       </div>
//     );
//   }
// }

const App = () => (
  <div className="App">
    <header className="App-header"> 
      <h1 className="App-title">PORTFOLIO</h1>
    </header>
    <p className="App-intro">
      Name : Ravitsara Ketkaew
    </p>
    <p className="App-intro">
      Was born on July, 28. 1999
    </p>
  </div>
)

export default App;
