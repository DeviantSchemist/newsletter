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
    <>
      <Header />
      <div className="pl-[24px] pr-[24px] pt-[40px] pb-[40px]">
        <Description />
        <Email handleClick={handleClick} />
      </div>
    </>
  )
}

export default App
