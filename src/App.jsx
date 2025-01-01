import React from 'react'
import Demo from './Demo.jsx'

const Compo =() => React.createElement('h1',null,'Hello')

function App() {
  return (
    <div>
      {/* <h1>Hello, world!</h1> */}
      {/* Using HOC to wrap the Demo component */}
     {/* <HOC Component={Demo} /> */}
      <Compo/>
    </div>
  );
}

 function HOC(Component)
{
  return(
    <h1 style={{color:"green",background:"black"}}><Component.Component/></h1>
  )
}

export default App;