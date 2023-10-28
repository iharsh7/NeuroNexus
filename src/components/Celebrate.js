import React from 'react'
import ReactConfetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';
const Celebrate = () => {
    const navigate = useNavigate();
  return (
    <div className='celebrate'>
 <ReactConfetti
            width={window.innerWidth}/>
            <div className='message'>Congratulations! You Guessed It Right</div>
            <button onClick={()=>{
                navigate('/play')
            }} className='finish'>Play Again</button>

    </div>
  )
}

export default Celebrate