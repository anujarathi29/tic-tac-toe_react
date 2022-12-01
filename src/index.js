import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

class Square extends React.Component{
  render(){
    return(
    <button className="Square">
      {this.props.value}
    </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i){
    return <Square value={i}/>;
  }
  render(){
    const status = "Next Player : X";
    return(
      <div>
        <div className='status'>{status}
        </div>
        <div className='board-now'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-now'>
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className='board-now'>
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </div>
    );    
  }
}

