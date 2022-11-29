import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

class Board extends React.Component {
  renderSquare(i){
    return <Square value={i}/>;
  }
}

class Square extends React.Component{
  render(){
    return(
    <button className="Square">
      {this.props.value}
    </button>
    );
  }
}
