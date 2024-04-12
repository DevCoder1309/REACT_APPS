import { useState } from "react";

export default function({size, target}){

    const [scores, setScores] = useState(new Array(size).fill(0));

    const changeValue = (idx) => {
        setScores(oldScores => {
            const copy = [...oldScores];
            copy[idx] += 1
            return copy
        })
    }
    const Reset = () => {
        setScores(new Array(size).fill(0))
    }

    return (
        <>
        {scores.map((e, idx) => {
            return (
                <>
                Player {idx + 1} : {e===target ? "You are the winner" : e}
                <button onClick={() => changeValue(idx)} disabled = {e===target ? true : false}>+1</button>
                </>
                )
                
        })}
        <button onClick={Reset}>Reset</button>
        </>
    )

}

