import { useState } from 'react';
import Container from './Style';
import Timer from '../Timer/Timer';
import Button from '../Button/Button';

const MainComponent = () => {
    const [selectedBtn, setSelectedBtn] = useState('first');

    const handleButtonClick = (buttonType:string) => {
        setSelectedBtn(buttonType);
    };

    return (
        <Container>
            <div className='controllersDiv'>
                <button 
                    className={selectedBtn === 'first' ? "selected" : ''} 
                    onClick={() => handleButtonClick('first')}
                >
                    Pomodoro
                </button>
                <button 
                    className={selectedBtn === 'second' ? "selected" : ''} 
                    onClick={() => handleButtonClick('second')}
                >
                    Descanso
                </button>
                <button 
                    className={selectedBtn === 'third' ? "selected" : ''} 
                    onClick={() => handleButtonClick('third')}
                >
                    Descanso Longo
                </button>
            </div>
            <Timer/>
            <Button/>
        </Container>
    );
};

export default MainComponent;
