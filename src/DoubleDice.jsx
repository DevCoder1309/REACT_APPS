export default function DoubleDice(){
    const num = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;
    const styles = {color: num === num2 ? "green" : "red"};
        return <div style={styles}>
        { num === num2 ? <h1>YOU WIN HURRAY!!!!!</h1> : <h1>YOU LOSE!!!!</h1> }
        <h1>Die 1 roll: {num}</h1>
        <h1>Die 2 roll: {num2}</h1>
        </div>
    }