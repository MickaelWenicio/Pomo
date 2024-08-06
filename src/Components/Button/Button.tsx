import { useState } from 'react';
import Container from './Style.ts';

const Button = () => {
    const buttonClass = 'button';
    const [isPressed, setIsPressed] = useState(false);
    const [isActive, setIsActive] = useState(false);
    


  return (
    <Container>
        <button 
            className={`${buttonClass} ${isPressed && 'down'}`} 
            onMouseDown={()=>{setIsPressed(true)}} 
            onMouseUp={()=>{setIsPressed(false)}}
            onClick={()=>{setIsActive(prevState => !prevState)}}
        >{isActive?  "Parar" : "Iniciar"}</button>
    </Container>
  )
}

export default Button