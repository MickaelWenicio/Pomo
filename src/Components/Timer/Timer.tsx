import Container from './Style'

interface TimerProps {
  minutes:number;
}

const Timer = ({minutes}: TimerProps) => {
  return (
    <Container>
        <div>
            <h1>
            {minutes}:00
            </h1>
        </div>
    </Container>
  )
}

export default Timer