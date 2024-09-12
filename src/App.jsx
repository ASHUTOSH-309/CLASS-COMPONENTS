import React, { useState } from 'react'

import './App.css'

function App() {

  //Hooks like useState and useEffect allows to hook into react state and give access to life cycle features
  // without creating any class compoent 
  
  const [count, setCount] = useState(0)

  return (
    <>
      <MyClassComponent />


    </>
  )
}


class MyClassComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
    //this.state will be the object containing the state
  }

  incrementCount = () => {
    this.setState({count:this.state.count + 1});
  }

  render() {
    return <div>
      <p>{this.state.count}</p>
      <button onClick={this.incrementCount}>Increment but from class</button>
    </div>
  }
}




function MyComponent() {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Click Me</button>
    </div>
  )
}

export default App
