import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

//class Square extends React.Component{
  function Square(props){
    return(
      <button className="square" 
      onClick= {props.onClick}>
      {props.value}
      </button>
    );
  }
  
class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i){
    return (
      <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />
    );
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

class Game extends React.Component{
  render(){
    return (
      <div className='game'>
        <div className='game-board'>
          <Board/>
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO*/}</ol>
        </div>
      </div>
    );
  }
}

const root = 
ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);

