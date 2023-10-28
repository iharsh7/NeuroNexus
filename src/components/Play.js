import React from 'react'
import { useState } from 'react';
// import Confetti from 'react-confetti/dist/types/Confetti';
import ReactConfetti from 'react-confetti';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
let num = Math.floor(Math.random() * 100)+1;
console.log(num);

const Play = () => {
    const [data,setData] = useState({
        guessed_number:""
    });
    const navigate = useNavigate();
    const[win,setWin] = useState();
    const[widtha,setWidtha] = useState(0);
    const[heighta,setHeighta] = useState(0);
    let [track,setTrack] = useState('');
    // track="hi"
    const checkguess = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
    
          setData({...data,[name]:value});
    
      }
      const celebrate=()=>{
        
            // setWidtha(window.innerWidth);
            navigate('/celebrate')
        
      }
      const guessanother=()=>{
         num = Math.floor(Math.random() * 100)+1;
         console.log(num);

      }
    const suggest=()=>{
        const number = data;
        const b = parseInt(number.guessed_number);
        console.log( b);
        console.log(num);
        setWin(b);
        if(b===num){
            guessanother();
            celebrate();
            // window.location.reload();

            // console.log("Done");
            setTrack('Well Done');
        }
        else if(b<num){
            setTrack(`Think Bigger Number`);
            
        }
        else{
            setTrack('Think Smaller Number');

        }
    }
  return (
    <div className='play'>   
        <div className='input1'>
    <input type="number" placeholder='Enter Number' name="guessed_number" value={data.guessed_number} onChange={checkguess} className='takeinput'/>
    </div>
    <div className='btnmanage'>
    <button onClick={suggest} className='check'>Submit</button>
    <button onClick={()=>{
        // setTrack({win});
        window.location.reload();
    }} className='playagain' >Guess another</button>
</div>
    <div className='feedback'>{track}
    
    
  
    </div>
   <div>
    <button onClick={()=>{
        navigate('/');
    }} className='back'>Go Home</button>
   </div>
    </div>
  )
}

export default Play