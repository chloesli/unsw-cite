import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import Parent from './components/Parent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Form from './components/Form'
function App() {
  let name = "Chloe";
  return (
    <div className="App">
    <Form></Form>
    <Stylesheet primary={true}></Stylesheet>
    <NameList></NameList>
    <UserGreeting></UserGreeting>
    {//<Parent></Parent>
      // <EventBind></EventBind>
    // <FunctionClick></FunctionClick>
    // <ClassClick></ClassClick>
    //   <Counter name={name}></Counter>
    //   <Greet name={name}></Greet>
    //   <Welcome></Welcome>
    }</div>
  );
}

export default App;
