import Header from "./Header";
import Description from "./Description";
import Email from "./Email";
import Thanks from "./Thanks";
import './App.css';

import { useState } from "react"

function App() {
  const [press, setPress] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState(null); // this state value is null on the first render

  const emailValidation = () => {
    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return regex.test(text);
  }

  const handleEmailClick = (event) => {
    event.preventDefault();
    console.log(`Error value: ${error}, Press value: ${press}`)
    if (!emailValidation()) {
      setError("Valid email required")
    }
    else {
      console.log(`Error will be set to empty string`);
      setError("")
      setPress(!press)
    }
  }

  const handleThanksClick = (event) => {
    event.preventDefault();
    console.log(`Thanks clicked, press value: ${press}`)
    setPress(!press);
  }

  const handleChange = (event) => {
    setText(event.target.value);
  }

  if (press) {
    return <Thanks handleClick={handleThanksClick} />
  }

  return (
    <div className="lg:bg-[#36384D] lg:pl-[256px] lg:pr-[256px] lg:pt-[219px] lg:pb-[220px] lg:flex lg:justify-center">
      <div className="lg:bg-white lg:rounded-[36px] lg:flex lg:flex-row-reverse lg:justify-evenly lg:w-[928px]">
        <Header />
        <div className="pl-[24px] pr-[24px] pt-[40px] pb-[40px]">
          <Description />
          <Email handleClick={handleEmailClick} handleChange={handleChange} value={text} />
          {error}
        </div>
      </div>
    </div>
  )
}

export default App
