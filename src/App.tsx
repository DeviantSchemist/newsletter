import Header from "./Header";
import Description from "./Description";
import Email from "./Email";
import Thanks from "./Thanks";
import './App.css';

import { useState } from "react"

function App() {
  const [press, setPress] = useState(false);
  const [text, setText] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    setPress(!press);
  }

  const handleChange = (event) => {
    setText(event.target.value);
  }

  if (press) {
    return <Thanks handleClick={handleClick} />
  }

  return (
    <div className="lg:bg-[#36384D] lg:pl-[256px] lg:pr-[256px] lg:pt-[219px] lg:pb-[220px] lg:flex lg:justify-center">
      <div className="lg:bg-white lg:rounded-[36px] lg:flex lg:flex-row-reverse lg:justify-evenly lg:w-[928px]">
        <Header />
        <div className="pl-[24px] pr-[24px] pt-[40px] pb-[40px]">
          <Description />
          <Email handleClick={handleClick} handleChange={handleChange} value={text} />
        </div>
      </div>
    </div>
  )
}

export default App
