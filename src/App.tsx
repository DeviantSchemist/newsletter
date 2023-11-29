import Header from "./Header";
import Description from "./Description";
import Email from "./Email";
import Thanks from "./Thanks";
import './App.css';

import { useState } from "react"

function App() {
  const [press, setPress] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setPress(!press);
  }

  if (press) {
    return <Thanks handleClick={handleClick} />
  }

  return (
    <div className="lg:bg-[#36384D] lg:pl-[256px] lg:pr-[256px] lg:pt-[219px] lg:pb-[220px]">
      <div className="lg:bg-white lg:rounded-[36px] lg:flex lg:flex-row-reverse lg:justify-evenly">
        <Header />
        <div className="pl-[24px] pr-[24px] pt-[40px] pb-[40px]">
          <Description />
          <Email handleClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default App
