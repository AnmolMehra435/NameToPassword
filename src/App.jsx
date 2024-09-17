import { useState, useCallback, useEffect } from 'react'

function App() {

  const [length, setLength] = useState(0);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let count = length;

    if(numbers){
      str += "1234567890"
    }

    if(characters){
      str += "!@#$%^&*.,/+"
    }

    for(let i = 0; i < count; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    setResult(userName + pass);
    

  }, [length, numbers, characters, userName]);

  useEffect(() => {passwordGenerator()}, [length, numbers, characters,])

  return (
    <>
      <div className="container">
        <h1>Name To Password</h1>
        <div className="input">
          <input type="text" className="user-input" placeholder="Enter Your Name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}/>
          <button id="submit" type="button" 
          onClick={() => {
            passwordGenerator();
          }}>Create</button>
        </div>
        <div className="function">
          <input className="range" type="range" max="20" min="0" value={length} onChange={(e) => setLength(e.target.value)}/>
          <label>Length: {length}</label>
          <label><input className="checkbox" type="checkbox" 
          onChange={() => {
            if(numbers){
              setNumbers(false);
            }else{
              setNumbers(true);
            }
          }} />
          Numbers</label>
          <label><input className="checkbox" type="checkbox" 
           onChange={() => {
            if(characters){
              setCharacters(false);
            }else{
              setCharacters(true);
            }}} />
          Characters</label>
        </div>
         <div className="result">
          <p>{result}</p>
         </div>
      </div>
    </>
  )
}

export default App
