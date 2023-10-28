import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
// import '.'
const Home = () => {
    const navigate = useNavigate();
   const [typeEffect] = useTypewriter({
    words: ['GUESS','GUESSING',"'?'"],
    loop:{},
    typeSpeed: 410,
    delaySpeed: 190
   })
  return (
    <div className='main'>
        <h1>
            WELCOME TO
            <span> </span>
            <span className='type'>
                {typeEffect}
            </span>
            <span> </span>
            GAME
             
        </h1>
        <button onClick={()=>{
            navigate("/play")
        }} className="button1">PLAY</button>
    </div>
  )
}

export default Home