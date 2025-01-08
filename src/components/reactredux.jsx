import {useDispatch} from 'react-redux'
import Count from './count';
const Reactredux = () => {
    const dispatch = useDispatch();
    return (
      <>
        <input type="button" value="increment" onClick={(event)=>dispatch({type:"INCREMENT"})}/>
        {<Count/>}
        <input type="button" value="decrement" onClick={(event)=>dispatch({type:"DECREMENT"})}/>
      </>
    );
  };
  
  export default Reactredux;


//   
// 