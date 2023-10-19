import React, {useState} from 'react';
import './App.css';
import Child from './Components/Child';

function App (){
    const [color, setColor] = useState('black');
    return (
        <div className='App'>
            <button 
            onClick={() => {
                setColor(color === 'black'? 'red': 'black');
            }} 
            >
                changecolor
                
            </button>
            <h1 style={{color: color}}>SAMPLE TEXT</h1>

            <Child />
    
        </div>
      );
    
};

 

export default App;