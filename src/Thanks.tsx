import SuccessLogo from "./assets/images/icon-success.svg";

const Thanks = (props) => {

  return (
    <div className="pl-[24px] pr-[24px] pt-[149px] pb-[40px] flex flex-col font-Roberto items-start h-screen justify-between">
      <div className="">
        <img src={SuccessLogo} alt="Successful submission" className="mb-[40px]" />
        <p className="font-RobertoBold text-[40px] font-bold text-left text-[#242742] mb-[24px] leading-10">Thanks for subscribing!</p>
        <p className="text-base text-left text-[#242742]">
          A confirmation email has been sent to <span className="font-bold font-RobertoBold">ash@loremcompany.com</span>.
          Please open it and click the button inside to confirm your subscription
        </p>
      </div>
      <button onClick={props.handleClick} className="rounded-lg bg-[#242742] pt-[18px] pb-[14px] w-[312px]">
        <span className="text-base font-bold text-center text-white font-RobertoBold">Dismiss message</span>
      </button>
    </div>
  )
}

export default Thanks