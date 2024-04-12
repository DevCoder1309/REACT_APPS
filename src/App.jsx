import './App.css'
import DoubleDice from './DoubleDice';
import Colors from './Colors';
import Slots from './Slots';
import ShoppingList from './ShoppingList';
import Clicker from './Clicker';
import Counter from './Counter';
import BackGroundColor from './BackGroundColor';
import Arrays from './Arrays';
import ScoreKeeper from './ScoreKeeper';
// import Chicken from "./Chicken";

const colors = [
  "red",
  "orange",
  "blue",
  "pink",
  "green",
  "brown"
]
function App() {
  return (
    <div>
      <ScoreKeeper size = {2} target = {4}/>
      {/* <BackGroundColor colors={colors}/> */}
      {/* <Arrays /> */}
      {/* <Counter /> */}
      {/* <Clicker message = "Hi there" buttonText = "Click me please" /> */}
      {/* <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}
      {/* <Colors colors = {["red", "pink", "purple"]} />
      <Colors colors = {["red", "pink", "purple"]} />
      <Colors colors = {["red", "pink", "purple"]} /> */}
      {/* <Slots val1= {3} val2 = {3} val3 = {3} /> */}
      {/* <ShoppingList data={data}/> */}
    </div>
  )
}

export default App
