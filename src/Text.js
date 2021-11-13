import React, {useState} from 'react'


export default function Text(props) {
 const updateText = () => {
   let newText = text.toUpperCase();
   setText(newText);
   props.showAlert('Convert to Upper case', 'success');
 }
 const hendalOnChange = (e) => {
    setText(e.target.value)
 }
 const convertToLowerCase = () => {
  let newUpperText = text.toLowerCase();
  setText(newUpperText)
  props.showAlert('Convert to Lower case', 'success');

 }
  const [text, setText] = useState("this is my first app")
  return (
    <div>
      <div className="container" style={{color: props.mode=== 'light' ? 'black' : 'white' }}>
        <h2 className="mb-5">{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={hendalOnChange} style={{backgroundColor: props.mode=== 'light' ? 'white' : 'grey', color: props.mode=== 'light' ? 'black' : 'white'}} id="textareatid" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={updateText}>upper case</button>
        <button disabled={text.length===0} className="btn btn-success" onClick={convertToLowerCase}>lower case</button>
      </div>
      <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1>Digit count</h1>
        <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} words  {text.length}  letter</p>
        <p>{0.008* text.split(' ').filter((e)=>{return e.length!==0}).length} Minustes to read the paragraph</p>
        <h4>text</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}
