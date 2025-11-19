import MessageBox from "./components/MessageBox";
import Rocket from "./components/Rocket";
import Stars from "./components/Stars";
import StarsRight from "./components/StarsRight";
import "./style.css"

function App() {
  return (
    <>
    <div className="animationHolder">
      <Stars />
      <StarsRight />
      <Rocket />
      <MessageBox />
    </div>
    </>
  );
}


export default App;
