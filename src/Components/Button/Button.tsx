import { useState } from 'react';
import Container from './Style.ts';

interface ButtonProps {
  onClickFunc: () => void;
}

const Button = ({onClickFunc}:ButtonProps) => {
    const buttonClass = 'button';
    const [isPressed, setIsPressed] = useState(false);
    const [isActive, setIsActive] = useState(false);
    
    const handleClick = () => {
      setIsActive(prevState => !prevState);
      onClickFunc();
    }

  return (
    <Container>
        <button 
            className={`${buttonClass} ${isPressed ? 'down' : ''}`} 
            onMouseDown={() => setIsPressed(true)} 
            onMouseUp={() => setIsPressed(false)}
            onClick={handleClick}
        >
            {isActive ? "Parar" : "Iniciar"}
        </button>
    </Container>
  );
};

export default Button;
