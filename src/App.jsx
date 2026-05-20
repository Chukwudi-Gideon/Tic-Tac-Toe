import { useState } from 'react'

import './App.css'

function App() {
  const [board, setBoard] = useState([null,null,null,
    null,null,null,
    null,null,null]);

      const [winner, setWinner] = useState(null)
      const [status, setStatus] = useState("Next Player: ")
    const copyBoard = [...board];
let [currentPlayer, setCurrentPlayer] = useState(true);

const gewinnenKombo = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2, 5, 8], [0,4,8], [2,4,6]]

    const handleClick = (index)=>{
      const shadowBoard = [...board]
         if(shadowBoard[index] || winner)return;
   currentPlayer?  shadowBoard[index] = "X":  shadowBoard[index] = "O";
    setCurrentPlayer(!currentPlayer);
    setBoard(shadowBoard)
    handleWinner(shadowBoard)
    }



    const handleWinner = copyB => {
      for(let i =0; i < gewinnenKombo.length; i++){
        const [a,b,c] = gewinnenKombo[i]; 
         if(copyB[a]){
            if(copyB[a] === copyB[b] && copyB[a] === copyB[c]){
          setWinner(copyB[a]);
          return
         }
      
      }
     
    }
    const isDraw = copyB.every(square => square !== null );

if(isDraw){
  setWinner("tie");
  return;
}
     return
    }



    const handleResetBtn = ()=>{
 setBoard([null,null,null,
    null,null,null,
    null,null,null]);
    setWinner(null)
    }

  return (
    <>
      <div className="game-container">
        <h1>Tic-Tac-Toe</h1>
         <div className="status">
         { 
         
         winner === "tie"? "It's a draw!":
         winner? `Winner: ${winner}`: `${status} ${currentPlayer? 'X' : 'O'}  `}
          
          </div>
         <div className="board">
 {     board.map((value, index) => (
<button key={index} className="square"  onClick={()=>handleClick(index)}>{value} </button>
      ))
      }
      </div>
        <button className="reset-btn" onClick={()=>handleResetBtn()}>Reset Game</button>
      </div>
    </>
  )
  
}
//
export default App
