import Header from "./Header";
import Description from "./Description";
import Email from "./Email";
import Thanks from "./Thanks";
import './App.css';

import { useState } from "react"

function App(): React.JSX.Element {
  const [press, setPress] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // this state value is null on the first render
  const [invalidEmailPress, setInvalidEmailPress] = useState<boolean>(false); // used for subsequent renders if user continuously enters invalid email format

  const emailValidation = (): boolean => {
    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return regex.test(text);
  }

  const handleEmailClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    console.log(`Error value: ${error}, Press value: ${press}`)
    if (!emailValidation()) {
      setError("Valid email required")
      setInvalidEmailPress(!invalidEmailPress)
    }
    else {
      console.log(`Error will be set to empty string`);
      setError("")
      setPress(!press)
    }
  }

  const handleThanksClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    console.log(`Thanks clicked, press value: ${press}`)
    setPress(!press);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText((event.target as HTMLInputElement).value);
  }

  if (press) {
    return <Thanks handleClick={handleThanksClick} text={text} />
  }

  return (
    <div className="lg:bg-[#36384D] lg:pl-[256px] lg:pr-[256px] lg:pt-[219px] lg:pb-[220px] lg:flex lg:justify-center">
      <div className="lg:bg-white lg:rounded-[36px] lg:flex lg:flex-row-reverse lg:justify-evenly lg:w-[928px]">
        <Header />
        <div className="pl-[24px] pr-[24px] pt-[40px] pb-[40px]">
          <Description />
          <Email handleClick={handleEmailClick} handleChange={handleChange} value={text} error={error} />
        </div>
      </div>
    </div>
  )
}

export default App
