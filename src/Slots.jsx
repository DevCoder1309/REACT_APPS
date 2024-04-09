export default function Slots({val1, val2, val3}){
    return (
        <div>
            <h1>{val1} {val2} {val3}</h1>
            {val1===val2 && val2===val3 ? <><h2 style={{color: "green"}}>YOU WON!</h2> <h2>congrats!!!</h2></>: <h2 style={{color: "red"}}>YOU LOSE!</h2>}
        </div>
    )
}