import Header from "./Header";
import Description from "./Description";
import Email from "./Email";
import './App.css';

function App() {
  

  return (
    <>
      <Header />
      <div className="pl-[24px] pr-[24px] pt-[40px] pb-[40px]">
        <Description />
        <Email />
      </div>
    </>
  )
}

export default App
