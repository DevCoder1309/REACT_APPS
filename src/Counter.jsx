import { useState } from "react";
import './Counter.css';
export default function(){
    let [isHappy, setIsHappy] = useState(true);
    let [count, setCount] = useState(0);
    const toggleSetIsHappy = () => {
        setCount(++count);
        if(isHappy){
            setIsHappy(false);
        }else{
            setIsHappy(true);
        }
    }
    const NullValue = () => {
        setIsHappy(true)
        setCount(0)
    }

    return (
    <>
    <button onClick={toggleSetIsHappy}>
        {isHappy? '😁' : '😢'} <br /> <br />
        {count}
    </button>
    <br /> <br />

    <button style={{border: '2px solid black'}} onClick={NullValue}>
        Null the values
    </button>    
    </>
)
}