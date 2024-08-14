import { useState, useEffect } from 'react';
import Container from './Style';
import Timer from '../Timer/Timer';
import Button from '../Button/Button';

const MainComponent = () => {
    const [selectedBtn, setSelectedBtn] = useState('first');
    const [pomodoro, setPomodoro] = useState<number>(1);
    const [timerRunning, setTimerRunning] = useState(false)

    const handleButtonClick = (buttonType:string) => {
        if(buttonType == 'first'){setPomodoro(25);};
        if(buttonType == 'second'){setPomodoro(5);};
        if(buttonType == 'third'){setPomodoro(10);};
    }

    useEffect(() => {
        setTimerRunning(false);
        handleButtonClick(selectedBtn);
    },[selectedBtn]);

    const handleClickButton = () => {
        setTimerRunning(prevState => !prevState);
    }

    return (
        <Container>
            <div className='controllersDiv'>
                <button 
                    className={selectedBtn === 'first' ? "selected" : ''} 
                    onClick={() => setSelectedBtn('first')}
                >
                    Pomodoro
                </button>
                <button 
                    className={selectedBtn === 'second' ? "selected" : ''} 
                    onClick={() => setSelectedBtn('second')}
                >
                    Descanso
                </button>
                <button 
                    className={selectedBtn === 'third' ? "selected" : ''} 
                    onClick={() => setSelectedBtn('third')}
                >
                    Descanso Longo
                </button>
            </div>
            <Timer minutes={pomodoro} isRunning={timerRunning}/>
            <Button onClickFunc={handleClickButton}/>
        </Container>
    );
};

export default MainComponent;
