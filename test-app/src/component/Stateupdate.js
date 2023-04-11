import React, {useState} from 'react'
import Button from '@mui/material/Button';

function Stateupdate() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  const decrementCount = () => {
    // Update state with incremented value
    setCount(count - 1);
  };
  return (
    <div>
      Click on the Button to Update the State

      <div><Button onClick={incrementCount} variant="contained">Click Here to add</Button>
      <Button onClick={decrementCount} variant="contained">Click Here to subtract</Button></div>
      <div>{count}</div>
</div>
  )
}

export default Stateupdate;