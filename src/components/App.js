
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [val,setVal]=useState('');
  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
        {
          (val.length>0)?(<p>Hello {val}!</p>):(
            <p></p>
          )
        }
    </div>
  )
}

export default App
