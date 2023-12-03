import { useRef, useState } from 'react';

import './App.css';
import { Button } from './components/button/index.jsx';
import { Message } from './components/message/index.jsx';

function App() {
  const [inputValue, setInputValue] = useState("")
  const [input2Value, setInput2Value] = useState("")
  const [messages, setMessages] = useState([])
  const inputRef = useRef()

  const inputText = document.getElementById("text")

  function addMessage () {
    console.log(input2Value + ": ", inputValue)
    if (!inputValue || !input2Value) {
      return;
    }else if(inputValue.includes(")") || inputValue.includes("(")) {
      inputText.placeholder = "U cant use symbols like ')'"
      setInputValue("")
      return;
    }
    const newMessage = {mainText: inputValue, userName: input2Value}
    setMessages((prevVal) => [...prevVal, newMessage])
    setInputValue("")
  }

  return(
    <div className='container'>
      <div>
        {messages.map((text) => (
          <Message mainText={text.mainText} userName={text.userName}/>
        ))}
      </div>
      <form action='#' onSubmit={(e) => {
        e.preventDefault();
        addMessage();
      }}>
        <input id='name' placeholder='Name' required onChange={(e) => {setInput2Value(e.target.value)}} value={input2Value}></input>
        <input id='text' placeholder='Text' required onChange={(e) => {setInputValue(e.target.value)}} value={inputValue}></input>
        <input type='file' ref={inputRef}></input>
        <Button value={"send"}/>
      </form>
    </div>
  )
}

export default App;
