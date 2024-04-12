//working with Arrays and objects in react is little different we use spread operator to make the copy of the array
import { useState } from "react";
import {v4 as uuid} from "uuid";
export default function (){
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😒"}]);
    const addEmoji = () => {
        // setEmojis([...emojis, "😁"]) this is not the best way to perform, the best way is to use callback which is more react way
        setEmojis((oldEmojis) => [...oldEmojis, {id: uuid(), emoji: "😁"}]) // this is the conventional way
    }

    const deleteEmoji = (id) => {
        //to delete the emoji we will use id to identify the emoji needs to be deleted
        setEmojis((oldEmojis) => {
            return oldEmojis.filter(e => e.id!== id)
        })
    }

    return (
        <div>
            {emojis.map((e) => {
                return <span key={e.id} style={{fontSize: "4rem"}} onClick={() => deleteEmoji(e.id)}>{e.emoji}</span>
            })}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}