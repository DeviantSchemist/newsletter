import SuccessLogo from "./assets/images/icon-success.svg";

const Thanks = (props) => {

  return (
    <div className="lg:pt-[280px] lg:pb-[280px] lg:pl-[468px] lg:pr-[468px] lg:bg-[#36384D] lg:h-screen lg:flex lg:justify-center">
      <div className="lg:bg-white lg:rounded-[36px] pl-[24px] lg:pl-[64px] pr-[24px] lg:pr-[64px] pt-[149px] lg:pt-[48px] pb-[40px] lg:pb-[64px] flex flex-col font-Roberto items-start h-screen justify-between lg:h-auto lg:w-[504px] lg:h-[520px] lg:justify-normal">
        <div className="">
          <img src={SuccessLogo} alt="Successful submission" className="mb-[40px]" />
          <p className="font-RobertoBold text-[40px] font-bold text-left text-[#242742] mb-[24px] leading-10">Thanks for subscribing!</p>
          <p className="text-base text-left text-[#242742] lg:mb-[40px]">
            A confirmation email has been sent to <span className="font-bold font-RobertoBold">ash@loremcompany.com</span>.
            Please open it and click the button inside to confirm your subscription
          </p>
        </div>
        <button onClick={props.handleClick} className="rounded-lg bg-[#242742] pt-[18px] pb-[14px] w-[312px] lg:w-auto lg:pl-[125px] lg:pr-[124px]">
          <span className="text-base font-bold text-center text-white font-RobertoBold">Dismiss message</span>
        </button>
      </div>
    </div>
  )
}

export default Thanks