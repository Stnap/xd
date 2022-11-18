import { Text } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Ticker from "react-native-ticker";
const Timer = (props, key) => (
  
  <CountdownCircleTimer
    key={key}
    isPlaying={props.isPlaying}
    duration={9}
    colors={["#004777", "#F7B801", "#A30000", "#000000"]}
    colorsTime={[9, 5, 2, 0]}
    initialRemainingTime={9}
    updateInterval={0}
    size={180}
    strokeWidth={15}
    trailStrokeWidth={15}
    strokeLinecap="round" // "round" | "square" | "butt"
    rotation="clockwise" // "clockwise" | "counterclockwise"
    trailColor="#808080"
    isSmoothColorTransition={true}
    onComplete={() => ({
      shouldRepeat: true,
      delay: 2,
      newInitialRemainingTime: 9,
      
    })}
    //onUpdate={(time) => console.log(time)}
  >
    {({ remainingTime,color }) =>(

 <Text style={{ color, fontSize: 30 }}>{remainingTime}</Text>)}


  </CountdownCircleTimer>
);

function alerta(){
  alert("alerta")
}




export default Timer;


//Ticker  