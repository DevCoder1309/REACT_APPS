import { useState } from "react";
import './BackgroundColor.css';
export default function({colors}){
    const generateColor = () => {
        let random_color_index = Math.floor(Math.random() * 5) + 1
        return random_color_index;
    }
    const [color, setColor] = useState(colors[0])
    const colorChanger = () => {
        let p = generateColor()
        setColor(colors[p])
    }
    return (
        <>
            <div className="column">
                <div className="row" style={{border: '2px solid white', backgroundColor: color}} onClick={colorChanger}>
                </div>
                <div className="row" style={{border: '2px solid white', backgroundColor: color}} onClick={colorChanger}>
                </div>
            </div>
        </>
    )
}