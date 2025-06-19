import React from 'react';
import './App.css'
// import MsgBox from "./components/MsgBox";
import ProductTab from './components/ProductTab';
import ProductPrice from './components/ProductPrice';
import ClickButton from './components/ClickButton';
import NonClick from './components/NonClick';
import Counter from './components/Counter';
import LikeButton from './components/LikeButton';

function handleFormSubmit(event) {
  event.preventDefault();
  console.log("form was submitted");
}
function Form(){
  return(
      <div>
      <form onSubmit={handleFormSubmit}><button>Submit here</button></form>
      
      </div>
  );
}

function App() {
  return (
    <>
      {/* <MsgBox userName="gurbani Saroy" textColor="blue" /> */}
      {/* <ProductTab/> */}
      {/* <ClickButton/> */}
      {/* <NonClick/>
      <Form/> */}
      {/* <Counter/> */}
      <LikeButton/>
    </>
  )
}
export default App
