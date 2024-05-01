import Day from "./Day";
import Hour from "./Hour";
import Min from "./Min";
import Seconds from "./Second";

const Counter =({timeObject})=>{
    return(
        <>
        <section class="counterContainer">
            <Day day={timeObject.day}/>       
            <Hour hour={timeObject.hour}/>       
            <Min min={timeObject.min}/>       
            <Seconds seconds={timeObject.seconds}/>    
        </section>
        </>
    );
};

export default Counter;